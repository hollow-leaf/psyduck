// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPoolFactoryEvent {
    event PoolCreated(address indexed issuer_, address indexed pool_);

    event ProtocolFeeRateSet(uint256 protocolFeeRate_);

    event ERC1155Minted(address indexed to_, string indexed name_, uint256 indexed amount_, uint256 tokenId_);

    event ERC1155BatchMinted(address indexed to_, string indexed name_, uint256[] indexed amounts_);

    event ERC1155AddNewNFT(uint256 indexed eventId_, uint256 indexed mintPrice_, string indexed name_, string metadataURI_, uint256 tokenId_);
}
