from datetime import datetime
from extension import db
from db_operate.model import *
import random

def create_createList(eventId):
    new_createlist = CreateList()
    new_createlist.eventId = eventId
    db.session.add(new_createlist)
    db.session.commit()

def create_ownList(address):
    new_ownlist = OwnerList()
    new_ownlist.owner = address
    db.session.add(new_ownlist)
    db.session.commit()

def create_new_creator(address, eventId, isStreamer, userId):
    user = User.query.filter_by(address=address).all()
    if (len(user) == 0):
        new_user = User()
        new_user.address = address
        new_user.event_id = eventId
        new_user.isStreamer = isStreamer
        new_user.userId = userId
        db.session.add(new_user)
        db.session.commit()
        create_createList(eventId)
        create_ownList(address)
    else:
        adjust_user = user[0]
        adjust_user.event_id = eventId
        adjust_user.isStreamer = isStreamer
        adjust_user.userId = userId
        db.session.add(adjust_user)
        db.session.commit()
        create_createList(eventId)

def create_nft(eventId, nftId, price, name, maxSupply):
    address = User.query.filter_by(event_id=eventId).all()[0].address
    newNft = NFTC()
    newNft.eventId = eventId
    newNft.nft_id = nftId
    newNft.price = price
    newNft.name = name
    newNft.creator = address
    newNft.maxSupply = maxSupply
    db.session.add(newNft)
    db.session.commit()

def buy_new_nft(eventId, nftId, owner):
    user = User.query.filter_by(address=owner).all()
    if(len(user)==0):
        print("New User")
        newUser = User()
        newUser.address = owner
        newUser.isStreamer = 0
        db.session.add(newUser)
        db.session.commit()
        create_ownList(owner)

    creator = User.query.filter_by(event_id=eventId).all()[0]
    print(1)
    nft = NFTC.query.filter_by(eventId=eventId, nft_id=nftId).all()[0]
    print(2)
    newNft = NFTO()
    newNft.event_id = eventId
    newNft.nft_id = nftId
    newNft.owner = owner
    newNft.creator = creator.userId
    newNft.name = nft.name
    db.session.add(newNft)
    db.session.commit()

def getNftCByEventId(eventId):
    nfts = NFTC.query.filter_by(eventId=eventId).all()

    res = []
    for nft in nfts:
        res.append({"eventId": eventId, "creator": nft.creator, "price": nft.price, "name": nft.name, "Supply": nft.maxSupply, "nftID": nft.nft_id})
    return res

def getNftOByAddress(address):
    nfts = NFTO.query.filter_by(owner=address).all()

    res = []
    for nft in nfts:
        res.append({"creator": nft.creator, "name": nft.name, "nft_id": nft.nft_id})
    return res

def blockHaveUpdated(block):
    user = User.query.filter_by(address="blockNow").all()
    if (len(user) == 0):
        newUser = User()
        newUser.address = "blockNow"
        newUser.isStreamer = 0
        newUser.userId = "0xec7186"
        db.session.add(newUser)
        db.session.commit()
    adjust_user = user[0]
    adjust_user.userId = block
    db.session.add(adjust_user)
    db.session.commit()

def block2Update():
    user = User.query.filter_by(address="blockNow").all()
    if (len(user) == 0):
        newUser = User()
        newUser.address = "blockNow"
        newUser.isStreamer = 0
        newUser.userId = "0xec7186"
        db.session.add(newUser)
        db.session.commit()
        return newUser.userId
    return user[0].userId