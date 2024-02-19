import { channelInfo } from "../type"

const HOST = "https://psyduck-app.wayneies1206.workers.dev"

const  headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Access-Control-Allow-Origin': '*'
}

export async function getNftcsByUserId(userId:string) {
    try {
        let body = {
            "creatorId": userId
        }
        const res = await fetch(HOST + '/nftCreateByAddress', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          })
        if(res){
            const rres = await res.json()
            return rres.nfts
        }else{
            return []
        }
    }
    catch (err) {
        console.log("error", err);
        return []
    }
}

export async function getNftosByAddress(address:string) {
    try {

        let body = {
            "address": address
        }

        const res = await fetch(HOST + '/nftOwnByAddress', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          })
        if(res){
            const rres = await res.json()
            return rres.nfts
        }else{
            return []
        }
    }
    catch (err) {
        console.log("error", err);
        return []
    }
}

export async function userId2Address(userId:string){
    try {

        let body = {
            "userId": userId
        }

        const res = await fetch(HOST + '/userIdToAddress', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          })
        if(res){
            const rres = await res.json()
            return {address: rres.address, poolContractAddr: rres.poolContractAddr}
        }else{
            return ""
        }
    }
    catch (err) {
        console.log("error", err);
        return ""
    }
}

export async function getChannelinfoById(userId:string) {
    try {
        const res = await fetch("https://api.streamelements.com/kappa/v2/channels/" + userId, {
            method: 'GET',
            headers: headers,
          })
        if(res){
            const rres:channelInfo = await res.json()
            return rres
        }else{
            return
        }
    }
    catch (err) {
        console.log("error", err);
        return
    }
}