import {nftCreate, nftOwn} from "./model"

export function addCreateNft(ori:string, newNft: nftCreate): string {
    console.log(NftCreateToString(newNft))
    return ori + (NftCreateToString(newNft))
}

export function addOwnNft(ori:string, newNft: nftOwn): string {
    return ori + (NftOwnToString(newNft))
}

export function deleteCreateNft(ori:string, nftRemove:nftCreate): string {

    return ""
}

export function deleteOwnNft(ori:string, nftRemove:nftOwn): string {

    return ""
}

//Convert string into nft array
export function StringToNftCreateArray(nfts: string): nftCreate[] {
    var nftsStringArray = nfts.split("&")
    nftsStringArray.shift()
    var res: nftCreate[] = []
    nftsStringArray.forEach(nft => {
        res.push(StringToNftCreate(nft))
    })
    return res
}

export function StringToNftOwnArray(nfts: string): nftOwn[] {
    var nftsStringArray = nfts.split("&")
    nftsStringArray.shift()
    var res: nftOwn[] = []
    nftsStringArray.forEach(nft => {
        res.push(StringToNftOwn(nft))
    })
    return res
}

//Usage for converting single nft into string structure or reversing
export function NftOwnToString(nfto: nftOwn): string {
    var res = "&"
    for (const [key, value] of Object.entries(nfto)) {
        res = res + String(`${value}`)+","
      }
    
    return res.slice(0, -1)
}

export function NftCreateToString(nftc: nftCreate): string {
    var res = "&"
    for (const [key, value] of Object.entries(nftc)) {
        res = res + String(`${value}`)+","
      }
    
    return res.slice(0, -1)
}

export function StringToNftOwn(nfto: string): nftOwn {
    const value = nfto.split(",")
    const res:nftOwn = {owner:value[0], nftId:Number(value[1]), nftName:value[2], creatorAddr: value[3], creatorId: value[4]}
    return res
}

export function StringToNftCreate(nfto: string): nftCreate {
    const value = nfto.split(",")
    const res:nftCreate = {nftId:Number(value[0]), nftName:value[1], price: Number(value[2]), maxSupply: Number(value[3]), creatorId: (value[4]), url: (value[5]), poolContractAddr: (value[6])}
    return res
}

export function getNftInfoByNftID(nftId: number, nfts: string): nftCreate {
    const nftArray = StringToNftCreateArray(nfts)
    nftArray.map((nft) => {
        if(nft.nftId == nftId) {
            return nft
        }
    })
    return {nftId: -1, nftName: "", price:-1, maxSupply: -1, creatorId: "", url: "", poolContractAddr: ""}
}