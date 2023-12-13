// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IGlobals {
    //** events */
    event ValidEventHolderSet(address indexed eventHolder, bool indexed isValid);

    event GovernorTransferred(address _previousGovernor, address _newGovernor);

    //** allow list function */

    function setValidEventHolder(string memory _userId, bool _isValid) external;

    //** view function */
    function governor() external view returns (address);

    function isValidEventHolder(address _eventHolder) external view returns (bool);

    //** Governor Transfer Functions */
    function transferGovernor(address _newGovernor) external;

    function setDonateNFTFactory(address _donateNFTFactory) external;
}
