import { writeContract, readContract } from '@wagmi/core';
import { DonateNFTABI, RegisterABI, ERC20ABI } from './contractAbi';

const DonateNFTADDRESS = "0x"
const RegisterADDRESS = "0x"
const ERC20ADDRESS = "0x"

export async function id2Address(id:string){
    if(id==""){
        return ""
    }

    const data = await readContract({
        address: RegisterADDRESS,
        abi: RegisterABI,
        //TODO: enter right function
        functionName: 'claim',
    })

    if(data){
        return data
    }

    return ""
}



export async function buyNftByNftId(nftId:number, amount:number){
    const { hash } = await writeContract({
        address: DonateNFTADDRESS,
        abi: DonateNFTABI,
        functionName: 'mintEventDonateNFT',
        args: [nftId, 0, amount],
    })

    return hash
}

