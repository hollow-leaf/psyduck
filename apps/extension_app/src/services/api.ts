const HOST = "https://psyduck-app.wayneies1206.workers.dev"

const  headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    'Access-Control-Allow-Origin': '*'
}

export async function getNftcsByUserId(userId:string) {
    const address = await userId2Address(userId)
    try {
        let body = {
            "address": address
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
            return rres.address
        }else{
            return ""
        }
    }
    catch (err) {
        console.log("error", err);
        return ""
    }
}