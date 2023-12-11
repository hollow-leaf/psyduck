export type StreamerType = {
    id:string
    address: string,
    nftList: NftType[],
}

export type NftType = {
    nftId: string,
    price: number,
    url: string,
    creator: string
}