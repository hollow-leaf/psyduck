// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPoolFactoryEvent {
    event PoolCreated(address issuer_, address pool_, string name_, address fundAsset_);

    event ProtocolFeeRateSet(uint256 protocolFeeRate_);

    event ProtocolWithdrawn(address to_, address fundAsset_, uint256 amount_);

    event ERC1155Minted(address to_, string ERC1155name_, uint256 amount_, uint256 tokenId_);

    event ERC1155BatchMinted(address to_, string ERC1155name_, uint256[] amounts_, uint256[] tokenId_);

    event ERC1155AddNewNFT(string ERC1155name_, uint256 mintPrice_, string name_, string metadataURI_, uint256 tokenId_);
}