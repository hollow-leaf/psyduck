// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface IDonateNFTFactoryEvent {
    event ERC1155Created(address _owner, address _tokenContract, uint256 eventId, string name); //emitted when ERC1155 token is deployed

    event ERC1155AddNewNFT(uint256 _eventId,uint256 _mintPrice, uint256 _maxSupply, string _name, uint256 id);

    event ERC1155Minted(address _minter, uint256 _eventId, uint256 _amount, uint256 _tokenId); //emited when ERC1155 token is minted

    event ERC1155BatchMinted(address _minter, address _tokenContract, uint256[] _amounts); //emited when ERC1155 token is minted

    event ERC1155Refunded(address _burner, address _tokenContract, uint256 _amount); //emited when ERC1155 token is burned

}
