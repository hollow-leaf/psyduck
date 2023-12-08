// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import {DonateNFT} from "./DonateNFT.sol";
import {IDonateNFTFactory} from "./interfaces/IDonateNFTFactory.sol";
import {IGlobals} from "./interfaces/IGlobals.sol";

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

    //** Storage */
    IGlobals public globals;
    DonateNFT[] public tokens; //an array that contains different ERC1155 tokens contracrt deployed
    mapping(uint256 => address) public eventIdToAddr; //index to contract address mapping
    mapping(uint256 => address) public eventIdToOwner; //index to ERC1155 owner address, which is the event holder

    constructor(address _globals) {
        globals = IGlobals(_globals);
    }

    //** Normal Functions */

    /**
     * @dev deploys a ERC1155 token with given parameters
     * @param _asset address of the asset to be used for minting
     * @param _contractName  name of our ERC1155 token
     * @param _baseURI resolving to our hosted metadata
     * @param _mintPrices prices for each ERC1155 token
     * @param _maxSupplys maximum supply for each ERC1155 token
     * @param _ids IDs the ERC1155 token should contain
     * @param _names Names each ID should map to. Case-sensitive.
     * @return _eventAddress address of deployed ERC1155 token
     * @return _eventId index of deployed ERC1155 token
     */
    function createEvent(
        address _asset,
        string memory _contractName,
        string memory _baseURI,
        uint256[] memory _mintPrices,
        uint256[] memory _maxSupplys,
        string[] memory _names,
        uint256[] memory _ids
    ) public onlyEventHolder returns (address _eventAddress, uint256 _eventId) {
        DonateNFT t = new DonateNFT(
            msg.sender,
            _asset, 
            _contractName,
            _baseURI,
            _mintPrices,
            _maxSupplys,
            _names,
            _ids
        );
        tokens.push(t);
        _eventAddress = address(t);
        _eventId = tokens.length - 1;
        eventIdToAddr[_eventId] = _eventAddress;
        eventIdToOwner[_eventId] = msg.sender;
        emit ERC1155Created(msg.sender, _eventAddress);
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
        emit ERC1155Minted(msg.sender, address(tokens[_eventId]), _amount);
    }

    function mintEventDonateNFT(uint256 _eventId, uint256 _tokenId, uint256 _amount) external {
        tokens[_eventId].mint(msg.sender, _tokenId, _amount);
        emit ERC1155Minted(msg.sender, address(tokens[_eventId]), _amount);
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

    function refundBatchEventDonateNFT(uint256 _eventId, string[] memory _names, uint256[] memory _amounts)
        external
        returns (uint256 refundAmount)
    {
        uint256[] memory ids = new uint256[](_names.length);
        for (uint256 i = 0; i < _names.length; i++) {
            ids[i] = getIdByName(_eventId, _names[i]);
        }
        refundAmount = tokens[_eventId].refundBatch(msg.sender, ids, _amounts);
        emit ERC1155BatchRefunded(msg.sender, address(tokens[_eventId]), _amounts);
    }

    function refundBatchEventDonateNFT(uint256 _eventId, uint256[] memory _tokenIds, uint256[] memory _amounts)
        external
        returns (uint256 refundAmount)
    {
        refundAmount = tokens[_eventId].refundBatch(msg.sender, _tokenIds, _amounts);
        emit ERC1155BatchRefunded(msg.sender, address(tokens[_eventId]), _amounts);
    }

    function setGlobals(address _globals) external onlyGovernor {
        require(_globals != address(0) && IGlobals(_globals).governor() != address(0), "DonateNFTFactory: invalid globals");
        globals = IGlobals(_globals);
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

    function getNameById(uint256 _eventId, uint256 _tokenId) internal view returns (string memory) {
        return tokens[_eventId].idToName(_tokenId);
    }
}
