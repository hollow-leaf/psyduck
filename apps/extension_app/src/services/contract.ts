import { writeContract, readContract } from '@wagmi/core';
import { FactoryABI, ERC20ABI, GlobalABI } from './contractAbi';
import { useAccount } from "wagmi"
import { address2eventId } from './api';

const FactoryADDRESS = "0x5360d0Bb8Eb03C7C988b2D3B9162028e287b63A2"
const ERC20ADDRESS = "0x92b9Ff2903F668B1C715cC8079e2ebC2D39ba4b7"
const GlobalADDRESS = "0x18b91197D9FA2b39d6118D0dB5c8f1C049eCe350"


export async function eventId2Address(eventId:number){
    
    const data:any = await readContract({
        address: FactoryADDRESS,
        abi: FactoryABI,
        //TODO: enter right function
        functionName: 'addrToEventId',
        args: [eventId],
    })

    console.log(data)

    if(data){
        return data
    }

    return ""
}

export async function addrToEventId(addr:string){
    const data:any = await readContract({
        address: FactoryADDRESS,
        abi: FactoryABI,
        //TODO: enter right function
        functionName: 'addrToEventId',
        args: [addr],
    })

    console.log(data)

    if(data){
        return data
    }

    return ""
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


export async function buyNftByNftId(minter:string, eventId:number, nftId:number, amount:number, price:number){
    alert("Approve transaction on your device!")

    /* const contractAddr = await eventId2Address(eventId)

    await ERC20Approve(contractAddr, amount*price) */

    const { hash } = await writeContract({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'mintEventDonateNFT',
        args: [eventId, nftId, amount],
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

export async function createNewNft(address:string, name:string, supply:number, price:number){


    if(address){
        console.log(address)
        const eventId = await address2eventId(address)
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

}