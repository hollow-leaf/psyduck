import { writeContract, readContract } from '@wagmi/core';
import { FactoryABI, ERC20ABI, GlobalABI } from './contractAbi';
import { useAccount } from "wagmi"

const FactoryADDRESS = "0x563B972f0CdE62b8a4dC64Ad7CFde9578465B7e9"
const ERC20ADDRESS = "0x0eDE01A62360a4D92d7CaaC38d7701e95142EFb5"
const GlobalADDRESS = "0x18b91197D9FA2b39d6118D0dB5c8f1C049eCe350"

const HOST = "https://psyduck-app.wayneies1206.workers.dev"

const  headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
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
            return {"address":rres.address, "poolContractAddr": rres.poolContractAddr}
        }else{
            return ""
        }
    }
    catch (err) {
        console.log("error", err);
        return ""
    }
}

export async function PDBalance(address:string){
    
    const data:any = await readContract({
        address: ERC20ADDRESS,
        abi: ERC20ABI,
        //TODO: enter right function
        functionName: 'balanceOf',
        args: [address],
    })

    console.log(data)

    if(data){
        return data
    }
    return ""
}


export async function buyNftByNftId(creator:string, nftId:number, amount:number, price:number, poolContractAddr:string){
    alert("Approve transaction on your device!")

    await ERC20Approve(poolContractAddr, amount*price)

    const { hash } = await writeContract({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'mintDonateNFT',
        args: [creator, nftId, amount],
    })

    console.log("Transaction Submit")

    return hash
}

export async function ERC20Approve(contract:string, amount:number){
    const { hash } = await writeContract({
        address: ERC20ADDRESS,
        abi: ERC20ABI,
        functionName: 'approve',
        args: [contract, amount],
    })

    return hash
}

export async function ERC20Faucet(receiver:string, amount:number){
    const { hash } = await writeContract({
        address: ERC20ADDRESS,
        abi: ERC20ABI,
        functionName: 'mint',
        args: [receiver, amount],
    })

    return hash
}

export async function register(userId:string){
    alert("Approve transaction on your device!")

    const { hash } = await writeContract({
        address: GlobalADDRESS,
        abi: GlobalABI,
        functionName: 'setValidEventHolder',
        args: [userId, true],
    })

    return hash
}

/* export async function createNewNft(address:string, name:string, supply:number, price:number){
    if(address){
        console.log(address)
        if(eventId>-1){
            const { hash } = await writeContract({
                address: FactoryADDRESS,
                abi: FactoryABI,
                functionName: 'addNewERC1155',
                args: [eventId, price, supply, name, ""],
            })
        }else{
            alert("You have to register!")
        }
    }
} */