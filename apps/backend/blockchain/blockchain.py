import os
from web3 import Web3
from web3.middleware import geth_poa_middleware
from dotenv import load_dotenv
import json
from db_operate.db_operate import *
from blockchain.abi import *

load_dotenv()
APIKEY = os.getenv("APIKEY")
chain = Web3(Web3.WebsocketProvider('wss://goerli.infura.io/ws/v3/'+APIKEY))
chain.middleware_onion.inject(geth_poa_middleware, layer=0)

start_block = 0

target_contract = chain.eth.contract(address='0xb2d2108Fa30b0a001998474CA7cd1670c85F4f7D', abi=factoryABI)  # 建立 contract 操作物件

def translator(event):
    for entry in event:
        tx = chain.eth.get_transaction(entry.transactionHash)  # 查當初 transaction 內容
        block = chain.eth.get_block(entry.blockNumber)  # 查該 block 資訊
        args = dict(entry['args'])  # 該 event 參數
        for key in args:
            if type(args[key]) == bytes:  # bytes are not JSON serializable
                args[key] = args[key].hex()  # 如果是 bytes 的話轉成 hex 才可讀

def update():
    start_block = block2Update()

    to_block = chain.eth.block_number
    ERC1155Created_event_t = target_contract.events['ERC1155Created'].create_filter(fromBlock=start_block,toBlock=to_block).get_all_entries()
    ERC1155Minted_event_t = target_contract.events['ERC1155Minted'].create_filter(fromBlock=start_block,toBlock=to_block).get_all_entries()
    ERC1155AddNewNFT_event_t = target_contract.events['ERC1155AddNewNFT'].create_filter(fromBlock=start_block,toBlock=to_block).get_all_entries()


    translator(ERC1155AddNewNFT_event_t)
    translator(ERC1155Minted_event_t)
    translator(ERC1155Created_event_t)

    ERC1155AddNewNFT_event = []
    ERC1155Minted_event = []
    ERC1155Created_event = []

    for item in ERC1155Created_event_t:
        try:
            print(item['args'])
            address = item['args']._owner
            eventId = item['args'].eventId
            userId = item['args'].name

            create_new_creator(address, eventId, 1, userId)
        except:
            print("1err")
    for item in ERC1155AddNewNFT_event_t:
        try:
            print(item['args'])
            eventId = item['args']._eventId
            tokenId = item['args'].id
            maxSupply = item['args']._maxSupply
            price = item['args']._mintPrice
            name = item['args']._name
            print(eventId, tokenId, maxSupply, price, name)

            create_nft(eventId, tokenId, price, name, maxSupply)

        except:
            print("2err")
    for item in ERC1155Minted_event_t:
        try:
            print(item['args'])
            owner = item['args']._minter
            id = item['args']._tokenId
            eventId = item['args']._eventId

            print(owner, id, eventId)

            buy_new_nft(eventId, id, owner)

        except:
            print("3err")

    blockHaveUpdated(to_block)