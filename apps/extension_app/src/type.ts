export type StreamerType = {
    id:string
    address: string,
    nftList: NftType[],
}

export type NftType = {
    nftId: number,
    price: number,
    url: string,
    creator: string
    name: string
    supply: number
    eventId: number
}