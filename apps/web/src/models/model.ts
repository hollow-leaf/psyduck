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

export type nftOwn = {
    owner: string
    nftId: number
    nftName: string
    creatorAddr: string
    creatorId: string
}

export type nftCreate = {
    nftId: number
    nftName: string
    price: number
    maxSupply: number
    creatorId: string
    url: string
    poolContractAddr: string
}

export type account = {
    userId: string
    address: string
    poolContractAddr: string
}