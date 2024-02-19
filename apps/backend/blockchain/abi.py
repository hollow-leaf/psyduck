FactoryABI = [
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
      "anonymous":False,
      "inputs":[
         {
            "indexed":False,
            "internalType":"string",
            "name":"ERC1155name_",
            "type":"string"
         },
         {
            "indexed":False,
            "internalType":"uint256",
            "name":"mintPrice_",
            "type":"uint256"
         },
         {
            "indexed":False,
            "internalType":"string",
            "name":"name_",
            "type":"string"
         },
         {
            "indexed":False,
            "internalType":"string",
            "name":"metadataURI_",
            "type":"string"
         },
         {
            "indexed":False,
            "internalType":"uint256",
            "name":"tokenId_",
            "type":"uint256"
         }
      ],
      "name":"ERC1155AddNewNFT",
      "type":"event"
   },
   {
      "anonymous":False,
      "inputs":[
         {
            "indexed":False,
            "internalType":"address",
            "name":"to_",
            "type":"address"
         },
         {
            "indexed":False,
            "internalType":"string",
            "name":"ERC1155name_",
            "type":"string"
         },
         {
            "indexed":False,
            "internalType":"uint256[]",
            "name":"amounts_",
            "type":"uint256[]"
         },
         {
            "indexed":False,
            "internalType":"uint256[]",
            "name":"tokenId_",
            "type":"uint256[]"
         }
      ],
      "name":"ERC1155BatchMinted",
      "type":"event"
   },
   {
      "anonymous":False,
      "inputs":[
         {
            "indexed":False,
            "internalType":"address",
            "name":"to_",
            "type":"address"
         },
         {
            "indexed":False,
            "internalType":"string",
            "name":"ERC1155name_",
            "type":"string"
         },
         {
            "indexed":False,
            "internalType":"uint256",
            "name":"amount_",
            "type":"uint256"
         },
         {
            "indexed":False,
            "internalType":"uint256",
            "name":"tokenId_",
            "type":"uint256"
         }
      ],
      "name":"ERC1155Minted",
      "type":"event"
   },
   {
      "anonymous":False,
      "inputs":[
         {
            "indexed":True,
            "internalType":"address",
            "name":"previousOwner",
            "type":"address"
         },
         {
            "indexed":True,
            "internalType":"address",
            "name":"newOwner",
            "type":"address"
         }
      ],
      "name":"OwnershipTransferred",
      "type":"event"
   },
   {
      "anonymous":False,
      "inputs":[
         {
            "indexed":False,
            "internalType":"address",
            "name":"issuer_",
            "type":"address"
         },
         {
            "indexed":False,
            "internalType":"address",
            "name":"pool_",
            "type":"address"
         },
         {
            "indexed":False,
            "internalType":"string",
            "name":"name_",
            "type":"string"
         },
         {
            "indexed":False,
            "internalType":"address",
            "name":"fundAsset_",
            "type":"address"
         }
      ],
      "name":"PoolCreated",
      "type":"event"
   },
   {
      "anonymous":False,
      "inputs":[
         {
            "indexed":False,
            "internalType":"uint256",
            "name":"protocolFeeRate_",
            "type":"uint256"
         }
      ],
      "name":"ProtocolFeeRateSet",
      "type":"event"
   },
   {
      "anonymous":False,
      "inputs":[
         {
            "indexed":False,
            "internalType":"address",
            "name":"to_",
            "type":"address"
         },
         {
            "indexed":False,
            "internalType":"address",
            "name":"fundAsset_",
            "type":"address"
         },
         {
            "indexed":False,
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

globalABI = [
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": False,
				"internalType": "address",
				"name": "_previousGovernor",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "address",
				"name": "_newGovernor",
				"type": "address"
			}
		],
		"name": "GovernorTransferred",
		"type": "event"
	},
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": True,
				"internalType": "address",
				"name": "eventHolder",
				"type": "address"
			},
			{
				"indexed": True,
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

eventAbi = [
{
		"anonymous": False,
		"inputs": [
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_eventId",
				"type": "uint256"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_mintPrice",
				"type": "uint256"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"indexed": False,
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ERC1155AddNewNFT",
		"type": "event"
	},
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": False,
				"internalType": "address",
				"name": "_minter",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "uint256[]",
				"name": "_amounts",
				"type": "uint256[]"
			}
		],
		"name": "ERC1155BatchMinted",
		"type": "event"
	},
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": False,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "eventId",
				"type": "uint256"
			},
			{
				"indexed": False,
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "ERC1155Created",
		"type": "event"
	},
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": False,
				"internalType": "address",
				"name": "_minter",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_eventId",
				"type": "uint256"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC1155Minted",
		"type": "event"
	},
	{
		"anonymous": False,
		"inputs": [
			{
				"indexed": False,
				"internalType": "address",
				"name": "_burner",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "address",
				"name": "_tokenContract",
				"type": "address"
			},
			{
				"indexed": False,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "ERC1155Refunded",
		"type": "event"
	}
]
