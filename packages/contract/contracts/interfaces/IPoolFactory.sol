// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { IPoolFactoryEvent } from "./events/IPoolFactoryEvent.sol";

interface IPoolFactory is IPoolFactoryEvent {
    /*//////////////////////////////////////////////////////////////////////////
                        EXTERNAL NON-CONSTANT FUNCTIONS
    //////////////////////////////////////////////////////////////////////////*/
    function createPool(address fundAsset, address _issuer, string memory _name) external returns (address pool_);

    function setProtocolFeeRate(uint256 protocolFeeRate_) external;

    function mintDonateNFT(string memory _name, uint256 _tokenId, uint256 _amount) external;

    function mintBatchDonateNFT(string memory _name, uint256[] memory _tokenIds, uint256[] memory _amounts) external;

    function addNewERC1155(uint256 _eventId, uint256 _mintPrice, string memory _name, string memory _metadataURI) external;

    /*//////////////////////////////////////////////////////////////////////////
                        EXTERNAL CONSTANT FUNCTIONS
    //////////////////////////////////////////////////////////////////////////*/

    function protocolFeeRate() external view returns (uint256 protocolFeeRate_);
}
