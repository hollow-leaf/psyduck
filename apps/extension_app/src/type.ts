export type StreamerType = {
    id:string
    address: string,
    nftList: NftType[],
    poolContractAddr: string
}

export type NftType = {
    nftId: number,
    price: number,
    url: string,
    creator: string,
    name: string,
    supply: number,
    poolContractAddr: string
}

export type channelInfo = {
    profile: profile
    _id: string
    provider: string
    broadcasterType: string
    suspended: boolean
    providerId: string
    avatar: string
    username: string
    alias: string
    displayName: string
    inactive: boolean
    isPartner: boolean
}

export type profile = {
    title: string
    headerImage: string
}