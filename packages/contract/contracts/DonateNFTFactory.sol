// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import {DonateNFT} from "./DonateNFT.sol";
import {IDonateNFTFactory} from "./interfaces/IDonateNFTFactory.sol";
import {IGlobals} from "./interfaces/IGlobals.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract DonateNFTFactory is IDonateNFTFactory {
    //** Modifier */
    modifier onlyEventHolder() {
        require(globals.isValidEventHolder(msg.sender), "DonateNFTFactory: only valid event holder");
        _;
    }

    modifier onlyGovernor() {
        require(msg.sender == globals.governor(), "DonateNFTFactory: only governor");
        _;
    }

    modifier onlyGlobals() {
        require(msg.sender == globalContract, "DonateNFTFactory: only global");
        _;
    }

    //** Storage */
    IGlobals public globals;
    address public asset;
    address public globalContract;
    DonateNFT[] public tokens; //an array that contains different ERC1155 tokens contracrt deployed
    mapping(uint256 => address) public eventIdToAddr; //index to contract address mapping
    mapping(address => uint256) public addrToEventId;
    mapping(uint256 => address) public eventIdToOwner; //index to ERC1155 owner address, which is the event holder
    mapping(string => uint256) public userIdToEventId;
    constructor(address _globals, address _asset) {
        globalContract = _globals;
        globals = IGlobals(_globals);
        asset = _asset;
    }

    //** Normal Functions */
    function createEvent(
        address _eventHolder,
        string memory _contractName
    ) public onlyGlobals returns (address _eventAddress, uint256 _eventId) {
        DonateNFT t = new DonateNFT(
            _eventHolder,
            asset, 
            _contractName
        );
        tokens.push(t);
        _eventAddress = address(t);
        _eventId = tokens.length - 1;
        eventIdToAddr[_eventId] = _eventAddress;
        addrToEventId[_eventAddress] = _eventId;
        eventIdToOwner[_eventId] = _eventHolder;
        userIdToEventId[_contractName] = _eventId;
        emit ERC1155Created(_eventHolder, _eventAddress,_eventId , _contractName);
    }

    // TODO: add whitelist functionality
    /**
     * @dev mints a ERC1155 token with given parameters
     * @param _eventId index position in our tokens array - represents which ERC1155 you want to interact with
     * @param _name Case-sensitive. Name of the token (this maps to the ID you created when deploying the token)
     * @param _amount amount of tokens you wish to mint
     */
    function mintEventDonateNFT(uint256 _eventId, string memory _name, uint256 _amount) external {
        uint256 tokenId = getIdByName(_eventId, _name);
        tokens[_eventId].mint(msg.sender, tokenId, _amount);
        emit ERC1155Minted(msg.sender, _eventId, _amount, tokenId);
    }

    function mintEventDonateNFT(uint256 _eventId, uint256 _tokenId, uint256 _amount) external {
        tokens[_eventId].mint(msg.sender, _tokenId, _amount);
        emit ERC1155Minted(msg.sender, _eventId, _amount, _tokenId);
    }

    function mintBatchEventDonateNFT(uint256 _eventId, string[] memory _names, uint256[] memory _amounts) external {
        uint256[] memory ids = new uint256[](_names.length);
        for (uint256 i = 0; i < _names.length; i++) {
            ids[i] = getIdByName(_eventId, _names[i]);
        }
        tokens[_eventId].mintBatch(msg.sender, ids, _amounts, "");
        emit ERC1155BatchMinted(msg.sender, address(tokens[_eventId]), _amounts);
    }

    function mintBatchEventDonateNFT(uint256 _eventId, uint256[] memory _tokenIds, uint256[] memory _amounts) external {
        tokens[_eventId].mintBatch(msg.sender, _tokenIds, _amounts, "");
        emit ERC1155BatchMinted(msg.sender, address(tokens[_eventId]), _amounts);
    }

    function refundEventDonateNFT(uint256 _eventId, string memory _name, uint256 _amount)
        external
        returns (uint256 refundAmount)
    {
        uint256 id = getIdByName(_eventId, _name);
        refundAmount = tokens[_eventId].refund(msg.sender, id, _amount);
        emit ERC1155Refunded(msg.sender, address(tokens[_eventId]), _amount);
    }

    function refundEventDonateNFT(uint256 _eventId, uint256 _tokenId, uint256 _amount)
        external
        returns (uint256 refundAmount)
    {
        refundAmount = tokens[_eventId].refund(msg.sender, _tokenId, _amount);
        emit ERC1155Refunded(msg.sender, address(tokens[_eventId]), _amount);
    }

    function setGlobals(address _globals) external onlyGovernor {
        require(_globals != address(0) && IGlobals(_globals).governor() != address(0), "DonateNFTFactory: invalid globals");
        globals = IGlobals(_globals);
    }

    function setAsset(address _asset) external onlyGovernor {
        require(_asset!= address(0) , "DonateNFTFactory: invalid globals");
        asset = _asset;
    }

    function addNewERC1155(uint256 _eventId, uint256 _mintPrice, uint256 _maxSupply, string memory _name, string memory _metadataURI) public{
        uint256 id = tokens[_eventId].addNewNFT(msg.sender,_mintPrice, _maxSupply,  _name, _metadataURI);
        emit ERC1155AddNewNFT(_eventId, _mintPrice, _maxSupply, _name, id );
    }


    //** View Functions */

    function getAllEventAddr() external view returns (address[] memory) {
        address[] memory _tokens = new address[](tokens.length);
        for (uint256 i = 0; i < tokens.length; i++) {
            _tokens[i] = address(tokens[i]);
        }
        return _tokens;
    }

    function getDonateNFTBalanceOfById(address _account, uint256 _eventId, uint256 _tokenId)
        external
        view
        returns (uint256 _amount)
    {
        return tokens[_eventId].balanceOf(_account, _tokenId);
    }

    function getDonateNFTBalanceOfByName(address _account, uint256 _eventId, string calldata _name)
        external
        view
        returns (uint256 _amount)
    {
        uint256 id = getIdByName(_eventId, _name);
        return tokens[_eventId].balanceOf(_account, id);
    }

    function getTicektInfoById(uint256 _eventId, uint256 _tokenId)
        public
        view
        returns (address _contract, address _evnetHolder, string memory _uri, uint256 supply)
    {
        DonateNFT token = tokens[_eventId];
        return (address(token), token.owner(), token.uri(_tokenId), token.totalSupply(_tokenId));
    }

    function governor() external view override returns (address) {
        return globals.governor();
    }

    //** Helper Functions */

    function getIdByName(uint256 _eventId, string memory _name) internal view returns (uint256) {
        return tokens[_eventId].nameToId(_name);
    }
}
