// SPDX-License-Identifier: Apache License 2.0
pragma solidity ^0.8.20;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {IDonateNFT} from "./interfaces/IDonateNFT.sol";

contract DonateNFT is ERC1155, Ownable, IDonateNFT {
    IERC20 public asset; // the asset used to mint DonateNFTs
    string[] public names; // string array of names
    uint256[] public ids; // uint array of ids
    uint256[] public mintPrices;
    uint256[] public maxSupplys;

    address immutable EVENT_HOLDER; // the address of the event holder
    string public baseMetadataURI; // the token metadata URI
    string public name; // the token mame

    mapping(string => uint256) public nameToId; // name to id mapping
    mapping(uint256 => string) public idToName; // id to name mapping
    mapping(uint256 => uint256) public idToPrice; // id to price mapping
    mapping(uint256 => uint256) public totalSupply; // id to supply mapping

    bool public isEventOpen;

    constructor(
        address _eventHolder,
        address _asset,
        string memory _contractName,
        string memory _baseURI,
        uint256[] memory _mintPrices,
        uint256[] memory _maxSupplys,
        string[] memory _names,
        uint256[] memory _ids
    ) ERC1155(_baseURI) Ownable(msg.sender) {
        require(_asset != address(0), "DonateNFT: asset is zero address");
        require(_eventHolder != address(0), "DonateNFT: event holder is zero address");
        EVENT_HOLDER = _eventHolder;
        asset = IERC20(_asset);
        names = _names;
        ids = _ids;
        mintPrices = _mintPrices;
        maxSupplys = _maxSupplys;
        createMapping();
        setURI(_baseURI);
        baseMetadataURI = _baseURI;
        name = _contractName;
    }

    /*
    used to change metadata, only owner access
    */
    function setURI(string memory _newURI) public onlyOwner {
        _setURI(_newURI);
    }

    /*
    set a mint fee. only used for mint, not batch.
    */
    function setPriceById(uint256 _id, uint256 _price) public onlyOwner {
        idToPrice[_id] = _price;
    }

    /*
    mint(address account, uint _id, uint256 amount)

    account - address to mint the token to
    _id - the ID being minted
    amount - amount of tokens to mint
    */
    function mint(address _receiver, uint256 _id, uint256 amount)
        public
        onlyDonateNFTFactory
        returns (uint256)
    {
        require(totalSupply[_id] + amount <= maxSupplys[_id], "DonateNFT: max supply exceeded");
        totalSupply[_id] += amount;
        // transfer asset to contract
        SafeERC20.safeTransferFrom(asset, _receiver, address(this), idToPrice[_id] * amount);
        _mint(_receiver, _id, amount, "");
        return _id;
    }

    /*
    mintBatch(address to, uint256[] memory _ids, uint256[] memory amounts, bytes memory data)

    to - address to mint the token to
    _ids - the IDs being minted
    amounts - amount of tokens to mint given ID
    bytes - additional field to pass data to function
    */
    function mintBatch(address _receiver, uint256[] memory _ids, uint256[] memory amounts, bytes memory data)
        public
        onlyDonateNFTFactory
    {
        uint256 totalPrice = 0;
        for (uint256 i = 0; i < _ids.length; ++i) {
            require(totalSupply[_ids[i]] + amounts[i] <= maxSupplys[_ids[i]], "DonateNFT: max supply exceeded");
            totalSupply[_ids[i]] += amounts[i];
            totalPrice += idToPrice[_ids[i]] * amounts[i];
        }

        SafeERC20.safeTransferFrom(asset, _receiver, address(this), totalPrice);
        _mintBatch(_receiver, _ids, amounts, data);
    }

    function refund(address _burner, uint256 _id, uint256 _amount)
        public
        onlyDonateNFTFactory
        returns (uint256 refundAmount)
    {
        refundAmount = idToPrice[_id];
        _burn(_burner, _id, _amount);
        // approve asset to DonateNFTFactory
        asset.approve(msg.sender, refundAmount);
        SafeERC20.safeTransfer(asset, _burner, refundAmount);
    }

    function refundBatch(address _burner, uint256[] memory _ids, uint256[] memory _amounts)
        public
        onlyDonateNFTFactory
        returns (uint256 refundAmount)
    {
        refundAmount = 0;
        for (uint256 i = 0; i < _ids.length; ++i) {
            refundAmount += idToPrice[_ids[i]] * _amounts[i];
        }
        _burnBatch(_burner, _ids, _amounts);
        // approve asset to DonateNFTFactory
        asset.approve(msg.sender, refundAmount);
        SafeERC20.safeTransfer(asset, _burner, refundAmount);
    }

    // TODO: implement withdraw feature for event holder
    function withdraw() public {
        require(msg.sender == EVENT_HOLDER, "DonateNFT: caller is not the event holder");
        // transfer asset to event holder
        emit Withdrawn(EVENT_HOLDER, asset.balanceOf(address(this)));
        SafeERC20.safeTransfer(asset, EVENT_HOLDER, asset.balanceOf(address(this)));
    }

    // sets our URI and makes the ERC1155 OpenSea compatible
    function uri(uint256 _tokenid) public view override returns (string memory) {
        return string(abi.encodePacked(baseMetadataURI, Strings.toString(_tokenid), ".json"));
    }

    function getNames() public view returns (string[] memory) {
        return names;
    }

    //** Modifier

    modifier onlyDonateNFTFactory() {
        require(msg.sender == owner(), "DonateNFT: caller is not the owner");
        _;
    }

    // creates a mapping of strings to ids (i.e ["one","two"], [1,2] - "one" maps to 1, vice versa.)
    function createMapping() private {
        for (uint256 id = 0; id < ids.length; id++) {
            nameToId[names[id]] = ids[id];
            idToName[ids[id]] = names[id];
            idToPrice[ids[id]] = mintPrices[id];
        }
    }
}
