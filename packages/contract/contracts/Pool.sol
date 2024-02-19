// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { ERC1155 } from "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import { Strings } from "@openzeppelin/contracts/utils/Strings.sol";
import { UD60x18, ud } from "@prb/math/src/UD60x18.sol";

import { IPoolFactory } from "./interfaces/IPoolFactory.sol";
import { IPool } from "./interfaces/IPool.sol";

/// @title Pool
/// @dev Contract for creating and managing pools
contract Pool is ERC1155, IPool {
    IERC20 public fundAsset;
    address public issuer;
    uint256 public totalDeposit;
    struct NFT {
        uint256 mintPrice;
        uint256 totalSupplys;
        string name;
        string metadataURI;
    }

    NFT[] public nfts;

    mapping(address => uint256) public userDepositAmounts;

    mapping(string => uint256) public nameToId;

    IPoolFactory private _poolFactory;

    /// @dev Modifier to check if the message sender is the issuer
    modifier onlyIssuer() {
        require(msg.sender == issuer, "only issuer");
        _;
    }

    modifier onlyPoolFactory() {
        require(msg.sender == address(_poolFactory), "only poolFactory");
        _;
    }

    /// @dev Constructor to initialize the Pool contract
    /// @param poolFactory_ Address of the pool factory
    /// @param _fundAsset Address of the fund
    /// @param _issuer Address of the issuer
    constructor(address poolFactory_, address _fundAsset, address _issuer) ERC1155("") {
        require(_fundAsset != address(0), "fund is 0x00");
        require(_issuer != address(0), "issuer is 0x00");

        _poolFactory = IPoolFactory(poolFactory_);
        fundAsset = IERC20(_fundAsset);
        issuer = _issuer;
    }

    /*//////////////////////////////////////////////////////////////////////////
                        EXTERNAL NON-CONSTANT FUNCTIONS
    //////////////////////////////////////////////////////////////////////////*/

    /// @dev Add new NFT to the pool
    /// @param _minter Address of the minter
    /// @param _mintPrice Price to mint the NFT
    /// @param _name Name of the NFT
    /// @param _metadataURI URI of the NFT metadata
    /// @return id ID of the NFT
    function addNewNFT(address _minter ,uint256 _mintPrice, string memory _name, string memory _metadataURI) public onlyPoolFactory returns (uint256 id){
        require(_minter == issuer, "only issuer");
        NFT memory newNFT;
        newNFT = NFT({
                mintPrice: _mintPrice,
                totalSupplys: 0,
                name: _name,
                metadataURI: _metadataURI
            });
        nfts.push(newNFT);
        id = nfts.length - 1;
        nameToId[_name] = id;
    }

    /// @dev mint NFTs to the specified address.
    /// @param to_ the address to mint NFTs to.
    /// @param id_ the id of the NFT to mint.
    /// @param amount_ the amount of NFTs to mint.
    /// @return true if the minting was successful.
    function mint(address to_, uint256 id_, uint256 amount_) external returns (bool) {
        require(to_ != address(0), "to is 0x00");
        require(amount_ > 0, "amount must > zero");

        uint256 transferAmount = nfts[id_].mintPrice * amount_;

        require(
            fundAsset.transferFrom(to_, address(this), transferAmount), "transfer fund failed"
        );

        _mint(to_, id_, amount_, "");
        // emit Mint(to_, id_, amount_);

        userDepositAmounts[to_] += transferAmount;
        nfts[id_].totalSupplys += amount_;
        totalDeposit += transferAmount;

        return true;
    }

    /// @dev mint NFTs to the specified address.
    /// @param to_ the address to mint NFTs to.
    /// @param ids_ the ids of the NFTs to mint.
    /// @param amounts_ the amounts of NFTs to mint.
    /// @return true if the minting was successful.
    function mintBatch(
        address to_,
        uint256[] memory ids_,
        uint256[] memory amounts_
    )
        external
        returns (bool)
    {
        require(to_ != address(0), "to is 0x00");
        require(ids_.length == amounts_.length, "length mismatch");

        uint256 totalTransferAmount = 0;
        for (uint256 i = 0; i < ids_.length; ++i) {
            require(amounts_[i] > 0, "amount must > zero");

            totalTransferAmount += nfts[i].mintPrice * amounts_[i];
            nfts[i].totalSupplys += amounts_[i];
        }

        require(
            fundAsset.transferFrom(to_, address(this), totalTransferAmount),
            "transfer fund failed"
        );

        _mintBatch(to_, ids_, amounts_, "");
        // emit MintBatch(to_, ids_, amounts_);

        userDepositAmounts[to_] += totalTransferAmount;
        totalDeposit += totalTransferAmount;

        return true;
    }

    /// @dev withdraw the fund from the pool if the pool is closed and the target is reached.
    /// @notice this function can only be called by the issuer.
    function issuerWithdraw() external override onlyIssuer {
        uint256 protocolFeeRate = _poolFactory.protocolFeeRate();
        uint256 withdrawAmount = fundAsset.balanceOf(address(this));

        uint256 protocolFee = withdrawAmount * protocolFeeRate / 1e18;
        withdrawAmount -= protocolFee;

        require(withdrawAmount > 0, "no fund");
        require(fundAsset.transfer(issuer, withdrawAmount), "transfer fund failed");

        if (protocolFee > 0) {
            require(fundAsset.transfer(address(_poolFactory), protocolFee), "transfer fee failed");
        }

        emit IssuerWithdrawal(issuer, withdrawAmount);
    }

    // /// @dev set the issuer of the pool.
    // /// @param newIssuer_ the new issuer of the pool.
    // /// @notice this function can only be called by the issuer.
    // function setIssuer(address _oldIssuer, address newIssuer_) external onlyPoolFactory {
    //     require(_oldIssuer == issuer, "not issuer");
    //     require(newIssuer_ != address(0), "issuer is 0x00");
    //     issuer = newIssuer_;
    // }

    /*//////////////////////////////////////////////////////////////////////////
                        EXTERNAL CONSTANT FUNCTIONS
    //////////////////////////////////////////////////////////////////////////*/
    function uri(uint256 id_) public view override returns (string memory uri_) {
        return nfts[id_].metadataURI;
    }
}
