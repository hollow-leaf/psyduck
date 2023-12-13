import axios from "axios";

const HOST = "http://127.0.0.1:5000"

export async function getNftcsByUserId(userId:string) {
    try {

        let form = new FormData()
        form.append("userId", userId)

        const res = await fetch(HOST + '/nftc', {
            method: 'POST',
            body: form
          })
        if(res){
            const rres = await res.json()
            return rres.data
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

        let form = new FormData()
        form.append("address", address)

        const res = await fetch(HOST + '/nfto', {
            method: 'POST',
            body: form
          })
        if(res){
            const rres = await res.json()
            return rres.data
        }else{
            return []
        }
    }
    catch (err) {
        console.log("error", err);
        return []
    }
}

export async function address2eventId(address:string){
    try {

        let form = new FormData()
        form.append("address", address)

        const res = await fetch(HOST + '/address2eventId', {
            method: 'POST',
            body: form
          })
        if(res){
            const rres = await res.json()
            return rres.data
        }else{
            return -1
        }
    }
    catch (err) {
        console.log("error", err);
        return -1
    }
}