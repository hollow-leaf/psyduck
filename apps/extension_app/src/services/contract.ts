import { writeContract, readContract } from '@wagmi/core';
import { FactoryABI, ERC20ABI } from './contractAbi';

const FactoryADDRESS = "0xb2d2108Fa30b0a001998474CA7cd1670c85F4f7D"
const ERC20ADDRESS = "0x1E2DCCDfa8a3fc10669f81f2Ce6b7F425983cfE2"

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