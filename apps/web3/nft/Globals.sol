// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IGlobals} from "./interfaces/IGlobals.sol";

contract Globals is IGlobals, Initializable {
    //** Modifier */
    modifier onlyGovernor() {
        require(msg.sender == governor, "Globals: only governor");
        _;
    }

    //** Storage */
    address public override governor;
    mapping(address => bool) public isEventHolders;

    //** UUPS functions */
    function initialize(address _governor) public initializer {
        require(_governor != address(0), "Globals: _governor is zero address");
        governor = _governor;
    }

    //** allow list function */
    function setValidEventHolder(address _eventHolder, bool _isValid) external override onlyGovernor {
        require(_eventHolder != address(0), "Globals: _eventHolder is zero address");
        isEventHolders[_eventHolder] = _isValid;
        emit ValidEventHolderSet(_eventHolder, _isValid);
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
