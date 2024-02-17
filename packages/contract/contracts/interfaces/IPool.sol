// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { IPoolEvent } from "./events/IPoolEvent.sol";

interface IPool is IPoolEvent {
    /*//////////////////////////////////////////////////////////////////////////
                        EXTERNAL NON-CONSTANT FUNCTIONS
    //////////////////////////////////////////////////////////////////////////*/
    function issuerWithdraw() external;
}
