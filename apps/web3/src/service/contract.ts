import { writeContract, readContract } from '@wagmi/core';
import { FactoryABI, ERC20ABI, GlobalABI } from './contractAbi';

const FactoryADDRESS = "0xb2d2108Fa30b0a001998474CA7cd1670c85F4f7D"
const ERC20ADDRESS = "0x1E2DCCDfa8a3fc10669f81f2Ce6b7F425983cfE2"
const GlobalADDRESS = "0x0191343b0e4C72B5F3539C5Ed4b3F36B3699bdb0"

export async function eventId2Address(eventId:number){
    
    const data:any = await readContract({
        address: FactoryADDRESS,
        abi: FactoryABI,
        //TODO: enter right function
        functionName: 'eventIdToAddr',
        args: [eventId],
    })

    console.log(data)

    if(data){
        return data
    }

    return ""
}


export async function buyNftByNftId(minter:string, eventId:number, nftId:number, amount:number, price:number){
    alert("Approve transaction on your device!")

    const contractAddr = await eventId2Address(eventId)

    await ERC20Approve(contractAddr, amount*price)

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

export async function createNewNft(name:string, eventId:number, supply:number, price:number){
    alert("Approve transaction on your device!")

    const { hash } = await writeContract({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'addNewERC1155',
        args: [eventId, price, supply, name, ""],
    })

    console.log("Transaction Submit")

    return hash
}