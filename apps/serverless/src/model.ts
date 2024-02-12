export type nftOwn = {
    owner: string
    nftId: number
    nftName: string
    creator: string
}

export type nftCreate = {
    creator: string
    nftId: number
    nftName: string
    price: number
    maxSupply: number
    eventId: number
}

export type account = {
    userId: string
    address: string
    eventId: number
}