// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPoolFactoryEvent {
    event PoolCreated(address indexed issuer_, address indexed pool_, string indexed name_, address fundAsset_);

    event ProtocolFeeRateSet(uint256 protocolFeeRate_);

    event ProtocolWithdrawn(address indexed to_, address indexed fundAsset_, uint256 indexed amount_);

    event ERC1155Minted(address indexed to_, string indexed ERC1155name_, uint256 indexed amount_, uint256 tokenId_);

    event ERC1155BatchMinted(address indexed to_, string indexed ERC1155name_, uint256[] indexed amounts_, uint256[] tokenId_);

    // event IssuerChanged(address indexed oldIssuer_, address indexed newIssuer_);

    event ERC1155AddNewNFT(string indexed ERC1155name_, uint256 indexed mintPrice_, string indexed name_, string metadataURI_, uint256 tokenId_);
}