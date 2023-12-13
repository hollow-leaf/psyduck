"use client";
import * as React from 'react'
import { useState } from 'react'
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
} from 'wagmi'
import { FactoryADDRESS, FactoryABI} from '../../service/contractAbi'
type NFT = {
    eventId: number,
    mintPrice: number,
    maxSupply: number,
    metadataURI: string | null,
    name: string
};

const nftTemplate: NFT = {
    eventId: 0,
    mintPrice: 0,
    maxSupply: 0,
    metadataURI: 'hahaha',
    name: ''
};
export function AddNewNFTForm() {
    const [nft, setNft] = useState<NFT>(nftTemplate);

    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'addNewERC1155',
        args: [nft.eventId, nft.maxSupply, nft.mintPrice, nft.metadataURI, nft.name],
        enabled: Boolean(nft),
    })
    const { data, error, isError, write } = useContractWrite(config)

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                write?.()
            }}
        >
            <label>EventId : </label>
            <input
                type="number"
                placeholder="EventId"
                onChange={(e) => setNft({ ...nft, eventId: parseInt(e.target.value) })}
            />
            <br />

            <label>MintPrice : </label>
            <input
                type="number"
                placeholder="MintPrice"
                onChange={(e) => setNft({ ...nft, mintPrice: parseInt(e.target.value) })}
            />
            <br />

            <label>MaxSupply : </label>
            <input
                type="number"
                placeholder="MaxSupply"
                onChange={(e) => setNft({ ...nft, maxSupply: parseInt(e.target.value) })}
                className="my-4"
            />
            <br />

            <input
                type="file"
                onChange={(e) => setNft({ ...nft, metadataURI: 'haha' })}
                className="my-4"
            />
            <br />

            <label>NFT Name : </label>
            <input
                type="text"
                placeholder="NFT Name"
                onChange={(e) => setNft({ ...nft, name: e.target.value })}
                className="my-4"
            />
            <br />

            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white border border-blue-700 hover:bg-blue-600 px-4 py-2 rounded"
            >
                Add New NFT
            </button>
        </form>
    )
}

