export const FactoryADDRESS = "0x563B972f0CdE62b8a4dC64Ad7CFde9578465B7e9"
export const ERC20ADDRESS = "0x0eDE01A62360a4D92d7CaaC38d7701e95142EFb5"
export const GlobalADDRESS = "0x18b91197D9FA2b39d6118D0dB5c8f1C049eCe350"

export const ERC20ABI = [
	{
	   "inputs":[
		  {
			 "internalType":"uint256",
			 "name":"initialSupply",
			 "type":"uint256"
		  }
	   ],
	   "stateMutability":"nonpayable",
	   "type":"constructor"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"spender",
			 "type":"address"
		  },
		  {
			 "internalType":"uint256",
			 "name":"allowance",
			 "type":"uint256"
		  },
		  {
			 "internalType":"uint256",
			 "name":"needed",
			 "type":"uint256"
		  }
	   ],
	   "name":"ERC20InsufficientAllowance",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"sender",
			 "type":"address"
		  },
		  {
			 "internalType":"uint256",
			 "name":"balance",
			 "type":"uint256"
		  },
		  {
			 "internalType":"uint256",
			 "name":"needed",
			 "type":"uint256"
		  }
	   ],
	   "name":"ERC20InsufficientBalance",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"approver",
			 "type":"address"
		  }
	   ],
	   "name":"ERC20InvalidApprover",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"receiver",
			 "type":"address"
		  }
	   ],
	   "name":"ERC20InvalidReceiver",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"sender",
			 "type":"address"
		  }
	   ],
	   "name":"ERC20InvalidSender",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"spender",
			 "type":"address"
		  }
	   ],
	   "name":"ERC20InvalidSpender",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"owner",
			 "type":"address"
		  }
	   ],
	   "name":"OwnableInvalidOwner",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"account",
			 "type":"address"
		  }
	   ],
	   "name":"OwnableUnauthorizedAccount",
	   "type":"error"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"owner",
			 "type":"address"
		  },
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"spender",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"value",
			 "type":"uint256"
		  }
	   ],
	   "name":"Approval",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"previousOwner",
			 "type":"address"
		  },
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"newOwner",
			 "type":"address"
		  }
	   ],
	   "name":"OwnershipTransferred",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"from",
			 "type":"address"
		  },
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"to",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"value",
			 "type":"uint256"
		  }
	   ],
	   "name":"Transfer",
	   "type":"event"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"owner",
			 "type":"address"
		  },
		  {
			 "internalType":"address",
			 "name":"spender",
			 "type":"address"
		  }
	   ],
	   "name":"allowance",
	   "outputs":[
		  {
			 "internalType":"uint256",
			 "name":"",
			 "type":"uint256"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"spender",
			 "type":"address"
		  },
		  {
			 "internalType":"uint256",
			 "name":"value",
			 "type":"uint256"
		  }
	   ],
	   "name":"approve",
	   "outputs":[
		  {
			 "internalType":"bool",
			 "name":"",
			 "type":"bool"
		  }
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"account",
			 "type":"address"
		  }
	   ],
	   "name":"balanceOf",
	   "outputs":[
		  {
			 "internalType":"uint256",
			 "name":"",
			 "type":"uint256"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"decimals",
	   "outputs":[
		  {
			 "internalType":"uint8",
			 "name":"",
			 "type":"uint8"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"to",
			 "type":"address"
		  },
		  {
			 "internalType":"uint256",
			 "name":"amount",
			 "type":"uint256"
		  }
	   ],
	   "name":"mint",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"name",
	   "outputs":[
		  {
			 "internalType":"string",
			 "name":"",
			 "type":"string"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"owner",
	   "outputs":[
		  {
			 "internalType":"address",
			 "name":"",
			 "type":"address"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"renounceOwnership",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"symbol",
	   "outputs":[
		  {
			 "internalType":"string",
			 "name":"",
			 "type":"string"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"totalSupply",
	   "outputs":[
		  {
			 "internalType":"uint256",
			 "name":"",
			 "type":"uint256"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"to",
			 "type":"address"
		  },
		  {
			 "internalType":"uint256",
			 "name":"value",
			 "type":"uint256"
		  }
	   ],
	   "name":"transfer",
	   "outputs":[
		  {
			 "internalType":"bool",
			 "name":"",
			 "type":"bool"
		  }
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"from",
			 "type":"address"
		  },
		  {
			 "internalType":"address",
			 "name":"to",
			 "type":"address"
		  },
		  {
			 "internalType":"uint256",
			 "name":"value",
			 "type":"uint256"
		  }
	   ],
	   "name":"transferFrom",
	   "outputs":[
		  {
			 "internalType":"bool",
			 "name":"",
			 "type":"bool"
		  }
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"newOwner",
			 "type":"address"
		  }
	   ],
	   "name":"transferOwnership",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	}
 ]

export const FactoryABI = [
	{
	   "inputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"constructor"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"owner",
			 "type":"address"
		  }
	   ],
	   "name":"OwnableInvalidOwner",
	   "type":"error"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"account",
			 "type":"address"
		  }
	   ],
	   "name":"OwnableUnauthorizedAccount",
	   "type":"error"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":false,
			 "internalType":"string",
			 "name":"ERC1155name_",
			 "type":"string"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"mintPrice_",
			 "type":"uint256"
		  },
		  {
			 "indexed":false,
			 "internalType":"string",
			 "name":"name_",
			 "type":"string"
		  },
		  {
			 "indexed":false,
			 "internalType":"string",
			 "name":"metadataURI_",
			 "type":"string"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"tokenId_",
			 "type":"uint256"
		  }
	   ],
	   "name":"ERC1155AddNewNFT",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"to_",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"string",
			 "name":"ERC1155name_",
			 "type":"string"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256[]",
			 "name":"amounts_",
			 "type":"uint256[]"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256[]",
			 "name":"tokenId_",
			 "type":"uint256[]"
		  }
	   ],
	   "name":"ERC1155BatchMinted",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"to_",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"string",
			 "name":"ERC1155name_",
			 "type":"string"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"amount_",
			 "type":"uint256"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"tokenId_",
			 "type":"uint256"
		  }
	   ],
	   "name":"ERC1155Minted",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"previousOwner",
			 "type":"address"
		  },
		  {
			 "indexed":true,
			 "internalType":"address",
			 "name":"newOwner",
			 "type":"address"
		  }
	   ],
	   "name":"OwnershipTransferred",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"issuer_",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"pool_",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"string",
			 "name":"name_",
			 "type":"string"
		  },
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"fundAsset_",
			 "type":"address"
		  }
	   ],
	   "name":"PoolCreated",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"protocolFeeRate_",
			 "type":"uint256"
		  }
	   ],
	   "name":"ProtocolFeeRateSet",
	   "type":"event"
	},
	{
	   "anonymous":false,
	   "inputs":[
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"to_",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"address",
			 "name":"fundAsset_",
			 "type":"address"
		  },
		  {
			 "indexed":false,
			 "internalType":"uint256",
			 "name":"amount_",
			 "type":"uint256"
		  }
	   ],
	   "name":"ProtocolWithdrawn",
	   "type":"event"
	},
	{
	   "inputs":[
		  {
			 "internalType":"string",
			 "name":"_ERC1155name",
			 "type":"string"
		  },
		  {
			 "internalType":"uint256",
			 "name":"_mintPrice",
			 "type":"uint256"
		  },
		  {
			 "internalType":"string",
			 "name":"_name",
			 "type":"string"
		  },
		  {
			 "internalType":"string",
			 "name":"_metadataURI",
			 "type":"string"
		  }
	   ],
	   "name":"addNewERC1155",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"_fundAsset",
			 "type":"address"
		  },
		  {
			 "internalType":"string",
			 "name":"name",
			 "type":"string"
		  }
	   ],
	   "name":"createPool",
	   "outputs":[
		  {
			 "internalType":"address",
			 "name":"pool_",
			 "type":"address"
		  }
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"string",
			 "name":"_name",
			 "type":"string"
		  },
		  {
			 "internalType":"uint256[]",
			 "name":"_tokenIds",
			 "type":"uint256[]"
		  },
		  {
			 "internalType":"uint256[]",
			 "name":"_amounts",
			 "type":"uint256[]"
		  }
	   ],
	   "name":"mintBatchDonateNFT",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"string",
			 "name":"_name",
			 "type":"string"
		  },
		  {
			 "internalType":"uint256",
			 "name":"_tokenId",
			 "type":"uint256"
		  },
		  {
			 "internalType":"uint256",
			 "name":"_amount",
			 "type":"uint256"
		  }
	   ],
	   "name":"mintDonateNFT",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"owner",
	   "outputs":[
		  {
			 "internalType":"address",
			 "name":"",
			 "type":"address"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"protocolFeeRate",
	   "outputs":[
		  {
			 "internalType":"uint256",
			 "name":"",
			 "type":"uint256"
		  }
	   ],
	   "stateMutability":"view",
	   "type":"function"
	},
	{
	   "inputs":[
		  
	   ],
	   "name":"renounceOwnership",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"uint256",
			 "name":"protocolFeeRate_",
			 "type":"uint256"
		  }
	   ],
	   "name":"setProtocolFeeRate",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"newOwner",
			 "type":"address"
		  }
	   ],
	   "name":"transferOwnership",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	},
	{
	   "inputs":[
		  {
			 "internalType":"address",
			 "name":"fundAsset_",
			 "type":"address"
		  }
	   ],
	   "name":"withdraw",
	   "outputs":[
		  
	   ],
	   "stateMutability":"nonpayable",
	   "type":"function"
	}
 ]

export const GlobalABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_previousGovernor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_newGovernor",
				"type": "address"
			}
		],
		"name": "GovernorTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "eventHolder",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "bool",
				"name": "isValid",
				"type": "bool"
			}
		],
		"name": "ValidEventHolderSet",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "donateNFTFactory",
		"outputs": [
			{
				"internalType": "contract IDonateNFTFactory",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "governor",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_governor",
				"type": "address"
			}
		],
		"name": "initialize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isEventHolders",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "isNameUsed",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_eventHolder",
				"type": "address"
			}
		],
		"name": "isValidEventHolder",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_donateNFTFactory",
				"type": "address"
			}
		],
		"name": "setDonateNFTFactory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_userId",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_isValid",
				"type": "bool"
			}
		],
		"name": "setValidEventHolder",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newGovernor",
				"type": "address"
			}
		],
		"name": "transferGovernor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "userIdtoAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]