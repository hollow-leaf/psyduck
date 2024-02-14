import os
import time

import requests
from eth_utils import event_abi_to_log_topic
from web3 import Web3
from web3.middleware import geth_poa_middleware
from dotenv import load_dotenv
import hexbytes
import json
from abi import *

load_dotenv()
APIKEY = os.getenv("APIKEY")
web3 = Web3(Web3.HTTPProvider("https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"))
URL = "https://opbnb-testnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3"
ServerlessURL = "http://psyduck-app.wayneies1206.workers.dev"

f = open('factoryABI.json')
factoryABI = FactoryABI
factoryAddr = '0x5360d0Bb8Eb03C7C988b2D3B9162028e287b63A2'

target_contract = web3.eth.contract(address=factoryAddr, abi=factoryABI)  # 建立 contract 操作物件


def translator(event):
    for entry in event:
        args = dict(entry['args'])  # 該 event 參數
        for key in args:
            if type(args[key]) == bytes:  # bytes are not JSON serializable
                args[key] = args[key].hex()  # 如果是 bytes 的話轉成 hex 才可讀

def update():
    start_block = 0

    to_block = web3.eth.block_number
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
        except:
            print("2err")
    for item in ERC1155Minted_event_t:
        try:
            print(item['args'])
            owner = item['args']._minter
            id = item['args']._tokenId
            eventId = item['args']._eventId

            print(owner, id, eventId)
        except:
            print("3err")

def update_opbnb(start, end):

    preBlock = hex(start)
    nowBlock = hex(end)

    print(preBlock, nowBlock)

    payload = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_getLogs",
        "params": [
            {
                "fromBlock": preBlock,
                "toBlock": nowBlock,
                "address": [factoryAddr]
            }
        ]
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }

    try:
        responses = requests.post(URL, json=payload, headers=headers).json()['result']
    except:
        print("errr")
        return

    for response in responses:

        receipt = getTxReceiptByHash(response['transactionHash'])
        logs = receipt["logs"]

        for log in logs:
            contract = web3.eth.contract("0x739a7eF123E3b716605099cbC9A79fcE695E504f", abi=factoryABI)
            top0 = hexbytes.HexBytes(log["topics"][0])
            receipt_event_signature_hex = Web3.toHex(top0)
            abi_events = [abi for abi in contract.abi if abi["type"] == "event"]

            for event in abi_events:
                # Get event signature components
                name = event["name"]
                inputs = [param["type"] for param in event["inputs"]]
                inputs = ",".join(inputs)
                # Hash event signature
                event_signature_text = f"{name}({inputs})"
                event_signature_hex = Web3.toHex(Web3.keccak(text=event_signature_text))
                # Find match between log's event signature and ABI's event signature
                if event_signature_hex == receipt_event_signature_hex:
                    # Decode matching log
                    try:
                        decoded_logs = contract.events[event["name"]]().processReceipt(receipt)
                        event_name = decoded_logs[0]['event']
                        event_info = decoded_logs[0]['args']
                        if (event_name == "ERC1155Created"):
                            print(event_info['_owner'], event_info['eventId'], 1, event_info['name'])
                            register(event_info['_owner'], event_info['name'], event_info['eventId'])
                        if (event_name == "ERC1155AddNewNFT"):
                            eventId = event_info['_eventId']
                            tokenId = event_info['id']
                            maxSupply = event_info['_maxSupply']
                            price = event_info['_mintPrice']
                            name = event_info['_name']
                            print(eventId, tokenId, price, name, maxSupply)
                            nftCreate(eventId, tokenId, name, price, maxSupply, eventId)
                        if (event_name == "ERC1155Minted"):
                            owner = event_info['_minter']
                            id = event_info['_tokenId']
                            eventId = event_info['_eventId']
                            print(eventId, id, owner)
                            nftBuy(owner, id, "", eventId)
                    except:
                        print()


def getTxByHash(hash):
    payload = {
        "id": 1,
        "jsonrpc": "2.0",
        "params": [hash],
        "method": "eth_getTransactionByHash"
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.post(URL, json=payload, headers=headers)

    return response.json()

def getTxReceiptByHash(hash):
    payload = {
        "id": 1,
        "jsonrpc": "2.0",
        "params": [hash],
        "method": "eth_getTransactionReceipt"
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.post(URL, json=payload, headers=headers)

    return response.json()['result']

def getLastestBlock():
    payload = {
        "id": 1,
        "jsonrpc": "2.0",
        "method": "eth_blockNumber"
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }

    response = requests.post(URL, json=payload, headers=headers)

    return response.json()['result']

def auto_update_opbnb():
    now_block = int(getLastestBlock(), 16)
    start_block = int(getLastUpdateBlock())
    while(start_block < now_block):
        update_opbnb(start_block, start_block+45000)
        start_block += 45000
        time.sleep(1)
    LastUpdateBlock(now_block)

def getLastUpdateBlock():
    payload = {}
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.get(ServerlessURL + "/lastupdateBlock", json=payload, headers=headers)

    return response.json()['lastupdateBlock']

def LastUpdateBlock(block):
    payload = {
        "block": block
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.post(ServerlessURL + "/updateBlock", json=payload, headers=headers)

    return response.json()

def register(address, userId, eventId):
    payload = {
        "address": address,
        "userId": userId,
        "eventId": eventId
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.post(ServerlessURL + "/register", json=payload, headers=headers)

def nftCreate(creator, nftId, nftName, price, maxSupply, eventId):
    payload = {
        "creator": creator,
        "nftId": nftId,
        "nftName": nftName,
        "price": price,
        "maxSupply": maxSupply,
        "eventId": eventId
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.post(ServerlessURL + "/nftCreate", json=payload, headers=headers)

def nftBuy(owner, nftId, nftName, creator):
    payload = {
        "creator": creator,
        "nftId": nftId,
        "nftName": nftName,
        "owner": owner,
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json"
    }
    response = requests.post(ServerlessURL + "/nftBuy", json=payload, headers=headers)


auto_update_opbnb()