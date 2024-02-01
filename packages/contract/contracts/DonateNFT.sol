// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC1155} from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {IDonateNFT} from "./interfaces/IDonateNFT.sol";

contract DonateNFT is ERC1155, Ownable, IDonateNFT {
    IERC20 public asset; // the asset used to mint DonateNFTs
    struct NFT {
        uint256 mintPrice;
        uint256 maxSupply;
        string name;
        string metadataURI;
    }

    NFT[] public nfts;

    address immutable EVENT_HOLDER; // the address of the event holder
    string public contractName; // the token mame
    uint256 number;
    mapping(string => uint256) public nameToId; // name to id mapping
    mapping(uint256 => uint256) public totalSupply; // id to supply mapping

    // Counter for the next token ID

    constructor(
        address _eventHolder,
        address _asset,
        string memory _contractName
    ) ERC1155("") Ownable(msg.sender){
        require(_asset != address(0), "DonateNFT: asset is zero address");
        require(_eventHolder != address(0), "DonateNFT: event holder is zero address");
        EVENT_HOLDER = _eventHolder;
        asset = IERC20(_asset);
        contractName = _contractName;
    }

    /*
    set a mint fee. only used for mint, not batch.
    */
    function setPriceById(uint256 _id, uint256 _price) public onlyOwner {
        nfts[_id].mintPrice = _price;
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
        require(totalSupply[_id] + amount <= nfts[_id].maxSupply, "DonateNFT: max supply exceeded");
        totalSupply[_id] += amount;
        // transfer asset to contract
        SafeERC20.safeTransferFrom(asset, _receiver, address(this), nfts[_id].mintPrice * amount);
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
            require(totalSupply[_ids[i]] + amounts[i] <= nfts[_ids[i]].maxSupply, "DonateNFT: max supply exceeded");
            totalSupply[_ids[i]] += amounts[i];
            totalPrice += nfts[_ids[i]].mintPrice * amounts[i];
        }

        SafeERC20.safeTransferFrom(asset, _receiver, address(this), totalPrice);
        _mintBatch(_receiver, _ids, amounts, data);
    }

    function refund(address _burner, uint256 _id, uint256 _amount)
        public
        onlyDonateNFTFactory
        returns (uint256 refundAmount)
    {
        refundAmount = nfts[_id].mintPrice;
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
            refundAmount += nfts[_ids[i]].mintPrice * _amounts[i];
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
        emit Withdraw(EVENT_HOLDER, asset.balanceOf(address(this)));
        SafeERC20.safeTransfer(asset, EVENT_HOLDER, asset.balanceOf(address(this)));
    }

    function addNewNFT(address _minter ,uint256 _mintPrice, uint256 _maxSupply, string memory _name, string memory _metadataURI) public onlyDonateNFTFactory returns (uint256 id){
        require(_minter == EVENT_HOLDER, "DonateNFT: caller is not the event holder");
        NFT memory newNFT;
        newNFT = NFT({
                mintPrice: _mintPrice,
                maxSupply: _maxSupply,
                name: _name,
                metadataURI: _metadataURI
            });
        nfts.push(newNFT);
        id = nfts.length - 1;
        nameToId[_name] = id;
    }

    // sets our URI and makes the ERC1155 OpenSea compatible
    function uri(uint256 _tokenId) public view override returns (string memory) {
        return nfts[_tokenId].metadataURI;
    }

    //** Modifier

    modifier onlyDonateNFTFactory() {
        require(msg.sender == owner(), "DonateNFT: caller is not the owner");
        _;
    }
}
