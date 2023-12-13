// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

import {IDonateNFTFactory} from "./interfaces/IDonateNFTFactory.sol";
import {IGlobals} from "./interfaces/IGlobals.sol";

contract Globals is IGlobals {
    //** Modifier */
    modifier onlyGovernor() {
        require(msg.sender == governor, "Globals: only governor");
        _;
    }
    IDonateNFTFactory public donateNFTFactory;
    //** Storage */
    address public override governor;
    mapping(address => bool) public isEventHolders;
    mapping(string => address) public userIdtoAddress;
    mapping(string => bool) public isNameUsed;


    //** UUPS functions */
    function initialize(address _governor) public {
        require(_governor != address(0), "Globals: _governor is zero address");
        governor = _governor;
    }

    function setDonateNFTFactory(address _donateNFTFactory) external onlyGovernor {
        require(_donateNFTFactory != address(0) && IDonateNFTFactory(_donateNFTFactory).governor() != address(0), "Globals: invalid globals");
        donateNFTFactory = IDonateNFTFactory(_donateNFTFactory);
    }

    //** allow list function */
    function setValidEventHolder(string memory _userId, bool _isValid) external override {
        require(msg.sender != address(0), "Globals: _eventHolder is zero address");
        require(!isNameUsed[_userId] , "Globals: userId is used");
        userIdtoAddress[_userId] = msg.sender;
        isEventHolders[msg.sender] = _isValid;
        isNameUsed[_userId] = _isValid;
        donateNFTFactory.createEvent(msg.sender, _userId);
        emit ValidEventHolderSet(msg.sender, _isValid);
    }

    //** Governor Transfer Functions */
    function transferGovernor(address _newGovernor) external override onlyGovernor {
        require(_newGovernor != address(0), "Globals: _newGovernor is zero address");
        emit GovernorTransferred(governor, _newGovernor);
        governor = _newGovernor;
    }

    //** view function */
    function isValidEventHolder(address _eventHolder) external view override returns (bool) {
        return isEventHolders[_eventHolder];
    }
}
