// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IPoolEvent {
    event Mint(address indexed to_, uint256 indexed id_, uint256 indexed amount_);

    event MintBatch(address indexed to_, uint256[] indexed ids_, uint256[] indexed amounts_);

    event IssuerWithdrawal(address indexed issuer_, uint256 amount_);

    event IssuerChanged(address indexed oldIssuer_, address indexed newIssuer_);

    event FundAssetChanged(address indexed oldFundAsset_, address indexed newFundAsset_);

    event PoolOpenSet(bool indexed isOpen_);
}
