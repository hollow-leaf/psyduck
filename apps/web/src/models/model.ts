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
    creator: string
}

export type nftCreate = {
    creator: string
    nftId: number
    nftName: string
    price: number
    maxSupply: number
    eventId: number
    url: string
}

export type account = {
    userId: string
    address: string
    eventId: number
}