export const FactoryADDRESS = "0x5360d0Bb8Eb03C7C988b2D3B9162028e287b63A2"
export const ERC20ADDRESS = "0x92b9Ff2903F668B1C715cC8079e2ebC2D39ba4b7"
export const GlobalADDRESS = "0x18b91197D9FA2b39d6118D0dB5c8f1C049eCe350"
export const ERC20ABI = [
	{
		"type": "constructor",
		"name": "",
		"inputs": [
			{
				"type": "string",
				"name": "name_",
				"internalType": "string"
			},
			{
				"type": "string",
				"name": "symbol_",
				"internalType": "string"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "event",
		"name": "Approval",
		"inputs": [
			{
				"type": "address",
				"name": "owner",
				"indexed": true,
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "spender",
				"indexed": true,
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "value",
				"indexed": false,
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "Transfer",
		"inputs": [
			{
				"type": "address",
				"name": "from",
				"indexed": true,
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "to",
				"indexed": true,
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "value",
				"indexed": false,
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "function",
		"name": "allowance",
		"inputs": [
			{
				"type": "address",
				"name": "owner",
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "spender",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "approve",
		"inputs": [
			{
				"type": "address",
				"name": "spender",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "amount",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "balanceOf",
		"inputs": [
			{
				"type": "address",
				"name": "account",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "burn",
		"inputs": [
			{
				"type": "address",
				"name": "owner_",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "amount_",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "decimals",
		"inputs": [],
		"outputs": [
			{
				"type": "uint8",
				"name": "",
				"internalType": "uint8"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "decreaseAllowance",
		"inputs": [
			{
				"type": "address",
				"name": "spender",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "subtractedValue",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "increaseAllowance",
		"inputs": [
			{
				"type": "address",
				"name": "spender",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "addedValue",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "mint",
		"inputs": [
			{
				"type": "address",
				"name": "recipient_",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "amount_",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "name",
		"inputs": [],
		"outputs": [
			{
				"type": "string",
				"name": "",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "symbol",
		"inputs": [],
		"outputs": [
			{
				"type": "string",
				"name": "",
				"internalType": "string"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "totalSupply",
		"inputs": [],
		"outputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "transfer",
		"inputs": [
			{
				"type": "address",
				"name": "to",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "amount",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "transferFrom",
		"inputs": [
			{
				"type": "address",
				"name": "from",
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "to",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "amount",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "nonpayable"
	}
]

export const FactoryABI = [
	{
		"type": "constructor",
		"name": "",
		"inputs": [
			{
				"type": "address",
				"name": "_globals",
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "_asset",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "event",
		"name": "ERC1155AddNewNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_mintPrice",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_maxSupply",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"type": "string",
				"name": "_name",
				"indexed": false,
				"internalType": "string"
			},
			{
				"type": "uint256",
				"name": "id",
				"indexed": false,
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "ERC1155BatchMinted",
		"inputs": [
			{
				"type": "address",
				"name": "_minter",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "_tokenContract",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "uint256[]",
				"name": "_amounts",
				"indexed": false,
				"internalType": "uint256[]"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "ERC1155Created",
		"inputs": [
			{
				"type": "address",
				"name": "_owner",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "_tokenContract",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "eventId",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"type": "string",
				"name": "name",
				"indexed": false,
				"internalType": "string"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "ERC1155Minted",
		"inputs": [
			{
				"type": "address",
				"name": "_minter",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "_eventId",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_amount",
				"indexed": false,
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_tokenId",
				"indexed": false,
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "ERC1155Refunded",
		"inputs": [
			{
				"type": "address",
				"name": "_burner",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "_tokenContract",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "_amount",
				"indexed": false,
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "function",
		"name": "addNewERC1155",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_mintPrice",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_maxSupply",
				"internalType": "uint256"
			},
			{
				"type": "string",
				"name": "_name",
				"internalType": "string"
			},
			{
				"type": "string",
				"name": "_metadataURI",
				"internalType": "string"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "addrToEventId",
		"inputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "asset",
		"inputs": [],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "createEvent",
		"inputs": [
			{
				"type": "address",
				"name": "_eventHolder",
				"internalType": "address"
			},
			{
				"type": "string",
				"name": "_contractName",
				"internalType": "string"
			}
		],
		"outputs": [
			{
				"type": "address",
				"name": "_eventAddress",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "eventIdToAddr",
		"inputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "eventIdToOwner",
		"inputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getAllEventAddr",
		"inputs": [],
		"outputs": [
			{
				"type": "address[]",
				"name": "",
				"internalType": "address[]"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getDonateNFTBalanceOfById",
		"inputs": [
			{
				"type": "address",
				"name": "_account",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_tokenId",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "_amount",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getDonateNFTBalanceOfByName",
		"inputs": [
			{
				"type": "address",
				"name": "_account",
				"internalType": "address"
			},
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "string",
				"name": "_name",
				"internalType": "string"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "_amount",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "getTicektInfoById",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_tokenId",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "address",
				"name": "_contract",
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "_evnetHolder",
				"internalType": "address"
			},
			{
				"type": "string",
				"name": "_uri",
				"internalType": "string"
			},
			{
				"type": "uint256",
				"name": "supply",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "globalContract",
		"inputs": [],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "globals",
		"inputs": [],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "contract IGlobals"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "governor",
		"inputs": [],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "mintBatchEventDonateNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "string[]",
				"name": "_names",
				"internalType": "string[]"
			},
			{
				"type": "uint256[]",
				"name": "_amounts",
				"internalType": "uint256[]"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "mintBatchEventDonateNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "uint256[]",
				"name": "_tokenIds",
				"internalType": "uint256[]"
			},
			{
				"type": "uint256[]",
				"name": "_amounts",
				"internalType": "uint256[]"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "mintEventDonateNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_tokenId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_amount",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "mintEventDonateNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "string",
				"name": "_name",
				"internalType": "string"
			},
			{
				"type": "uint256",
				"name": "_amount",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "refundEventDonateNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_tokenId",
				"internalType": "uint256"
			},
			{
				"type": "uint256",
				"name": "_amount",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "refundAmount",
				"internalType": "uint256"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "refundEventDonateNFT",
		"inputs": [
			{
				"type": "uint256",
				"name": "_eventId",
				"internalType": "uint256"
			},
			{
				"type": "string",
				"name": "_name",
				"internalType": "string"
			},
			{
				"type": "uint256",
				"name": "_amount",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "refundAmount",
				"internalType": "uint256"
			}
		],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "setAsset",
		"inputs": [
			{
				"type": "address",
				"name": "_asset",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "setGlobals",
		"inputs": [
			{
				"type": "address",
				"name": "_globals",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "tokens",
		"inputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "contract DonateNFT"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "userIdToEventId",
		"inputs": [
			{
				"type": "string",
				"name": "",
				"internalType": "string"
			}
		],
		"outputs": [
			{
				"type": "uint256",
				"name": "",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	}
]

export const GlobalABI = [
	{
		"type": "event",
		"name": "GovernorTransferred",
		"inputs": [
			{
				"type": "address",
				"name": "_previousGovernor",
				"indexed": false,
				"internalType": "address"
			},
			{
				"type": "address",
				"name": "_newGovernor",
				"indexed": false,
				"internalType": "address"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "event",
		"name": "ValidEventHolderSet",
		"inputs": [
			{
				"type": "address",
				"name": "eventHolder",
				"indexed": true,
				"internalType": "address"
			},
			{
				"type": "bool",
				"name": "isValid",
				"indexed": true,
				"internalType": "bool"
			}
		],
		"outputs": [],
		"anonymous": false
	},
	{
		"type": "function",
		"name": "donateNFTFactory",
		"inputs": [],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "contract IDonateNFTFactory"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "governor",
		"inputs": [],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "initialize",
		"inputs": [
			{
				"type": "address",
				"name": "_governor",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "isEventHolders",
		"inputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isNameUsed",
		"inputs": [
			{
				"type": "string",
				"name": "",
				"internalType": "string"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "isValidEventHolder",
		"inputs": [
			{
				"type": "address",
				"name": "_eventHolder",
				"internalType": "address"
			}
		],
		"outputs": [
			{
				"type": "bool",
				"name": "",
				"internalType": "bool"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "setDonateNFTFactory",
		"inputs": [
			{
				"type": "address",
				"name": "_donateNFTFactory",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "setValidEventHolder",
		"inputs": [
			{
				"type": "string",
				"name": "_userId",
				"internalType": "string"
			},
			{
				"type": "bool",
				"name": "_isValid",
				"internalType": "bool"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "transferGovernor",
		"inputs": [
			{
				"type": "address",
				"name": "_newGovernor",
				"internalType": "address"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "userIdtoAddress",
		"inputs": [
			{
				"type": "string",
				"name": "",
				"internalType": "string"
			}
		],
		"outputs": [
			{
				"type": "address",
				"name": "",
				"internalType": "address"
			}
		],
		"stateMutability": "view"
	}
]