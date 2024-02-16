// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";

import { Pool } from "./Pool.sol";
import { IPoolFactory } from "./interfaces/IPoolFactory.sol";

/// @title PoolFactory
/// @dev Contract for creating and managing pools
contract PoolFactory is IPoolFactory, Ownable {
    uint256 public protocolFeeRate = 0.01e18; // 1%

    mapping (string => address) nameToAddress;

    constructor(address initialOwner) Ownable(initialOwner){ }

    /// @dev Withdraws the entire balance of the specified fund asset to the owner
    /// @param fundAsset_ Address of the fund asset
    function withdraw(address fundAsset_) external onlyOwner {
        uint256 balance = IERC20(fundAsset_).balanceOf(address(this));
        IERC20(fundAsset_).transfer(msg.sender, balance);
    }

    /// @dev Sets the protocol fee rate
    /// @param protocolFeeRate_ New protocol fee rate
    function setProtocolFeeRate(uint256 protocolFeeRate_) external onlyOwner {
        require(protocolFeeRate_ <= 1e18, "PoolFactory: must <= 100%");
        require(protocolFeeRate_ >= 0, "PoolFactory: must >= 0%");
        protocolFeeRate = protocolFeeRate_;
        emit ProtocolFeeRateSet(protocolFeeRate_);
    }
    /// @dev Mint ERC1155 token by Factory
    /// @param _name Name of the pool
    /// @param _tokenId Token ID
    /// @param _amount Amount of token
    function mintDonateNFT(string memory _name, uint256 _tokenId, uint256 _amount) external {
        Pool(nameToAddress[_name]).mint(msg.sender, _tokenId, _amount);
        emit ERC1155Minted(msg.sender, _name, _amount, _tokenId);
    }

    function mintBatchDonateNFT(string memory _name, uint256[] memory _tokenIds, uint256[] memory _amounts) external override{
        Pool(nameToAddress[_name]).mintBatch(msg.sender, _tokenIds, _amounts);
        emit ERC1155BatchMinted(msg.sender, _name, _amounts);
    }

    function addNewERC1155(uint256 _eventId, uint256 _mintPrice, string memory _name, string memory _metadataURI) external override{
        uint256 id = Pool(nameToAddress[_name]).addNewNFT(msg.sender,_mintPrice,  _name, _metadataURI);
        emit ERC1155AddNewNFT(_eventId, _mintPrice, _name, _metadataURI, id);
    }

    /*//////////////////////////////////////////////////////////////////////////
                        EXTERNAL NON-CONSTANT FUNCTIONS
    //////////////////////////////////////////////////////////////////////////*/

    /// @dev Creates a new pool with the provided configurations
    /// @param _fundAsset Address of the fund asset
    /// @param _issuer Address of the issuer
    /// @return pool_ Address of the created pool
    function createPool(address _fundAsset, address _issuer, string memory name) external override returns (address pool_) {
        require(nameToAddress[name] == address(0), "pool already exists");
        Pool pool = new Pool(address(this), _fundAsset, _issuer);
        nameToAddress[name] = address(pool);
        emit PoolCreated(msg.sender, address(pool));
        return (address(pool));
    }
}