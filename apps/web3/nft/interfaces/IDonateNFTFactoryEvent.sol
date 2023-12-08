// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.20;

interface IDonateNFTFactoryEvent {
    event ERC1155Created(address _owner, address _tokenContract); //emitted when ERC1155 token is deployed

    event ERC1155Minted(address _minter, address _tokenContract, uint256 _amount); //emited when ERC1155 token is minted

    event ERC1155BatchMinted(address _minter, address _tokenContract, uint256[] _amounts); //emited when ERC1155 token is minted

    event ERC1155Refunded(address _burner, address _tokenContract, uint256 _amount); //emited when ERC1155 token is burned

    event ERC1155BatchRefunded(address _burner, address _tokenContract, uint256[] _amounts); //emited when ERC1155 token is burned
}
