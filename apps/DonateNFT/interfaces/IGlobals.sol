// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.20;

interface IGlobals {
    //** events */
    event ValidEventHolderSet(address indexed eventHolder, bool indexed isValid);

    event GovernorTransferred(address _previousGovernor, address _newGovernor);

    //** allow list function */

    function setValidEventHolder(address _eventHolder, bool _isValid) external;

    //** view function */
    function governor() external view returns (address);

    function isValidEventHolder(address _eventHolder) external view returns (bool);

    //** Governor Transfer Functions */
    function transferGovernor(address _newGovernor) external;
}
