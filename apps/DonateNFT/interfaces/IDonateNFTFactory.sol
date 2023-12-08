// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

import {IDonateNFTFactoryEvent} from "./IDonateNFTFactoryEvent.sol";

interface IDonateNFTFactory is IDonateNFTFactoryEvent {
    //** view function */

    function getAllEventAddr() external view returns (address[] memory);

    function getDonateNFTBalanceOfById(address _account, uint256 _eventId, uint256 _tokenId)
        external
        view
        returns (uint256 _amount);

    function getDonateNFTBalanceOfByName(address _account, uint256 _eventId, string calldata _name)
        external
        view
        returns (uint256 _amount);

    function getTicektInfoById(uint256 _eventId, uint256 _tokenId)
        external
        view
        returns (address _contract, address _evnetHolder, string memory _uri, uint256 supply);

    function governor() external view returns (address);

    //** normal function */

    function setGlobals(address _globals) external;

    function createEvent(
        address _asset,
        string memory _contractName,
        string memory _baseURI,
        uint256[] memory _mintAmounts,
        uint256[] memory _mintPrices,
        string[] memory _names,
        uint256[] memory _ids
    ) external returns (address _eventAddress, uint256 _eventId);

    function mintEventDonateNFT(uint256 _eventId, string memory _name, uint256 _amount) external;

    function mintEventDonateNFT(uint256 _eventId, uint256 _tokenId, uint256 _amount) external;

    function mintBatchEventDonateNFT(uint256 _eventId, string[] memory _names, uint256[] memory _amounts) external;

    function mintBatchEventDonateNFT(uint256 _eventId, uint256[] memory _tokenIds, uint256[] memory _amounts) external;

    function refundEventDonateNFT(uint256 _eventId, string memory _name, uint256 _amount)
        external
        returns (uint256 refundAmount);

    function refundEventDonateNFT(uint256 _eventId, uint256 _id, uint256 _amount)
        external
        returns (uint256 refundAmount);

    function refundBatchEventDonateNFT(uint256 _eventId, string[] memory _names, uint256[] memory _amounts)
        external
        returns (uint256 refundAmount);

    function refundBatchEventDonateNFT(uint256 _eventId, uint256[] memory _tokenIds, uint256[] memory _amounts)
        external
        returns (uint256 refundAmount);
}
