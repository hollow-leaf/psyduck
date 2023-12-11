import axios from "axios";

const HOST = "127.0.0.1:5000"

export async function getNftsByAddress(address:string) {
    try {
        const res = await axios({
            method: 'get',
            url: HOST + '/nfts',
        })
        console.log(res)
        if(res.data){
            return res.data
        }
    }
    catch (err) {
        console.log("error", err);
        return []
    }
}

