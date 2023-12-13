"use client";
import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { CreateContractForm } from "./createContract";
import { AddNewNFTForm } from "./addNewNFT";
type NFT = {
    mintPrice: number,
    maxSupply: number,
    metadataURI: string | null,
    name: string
};

const nftTemplate: NFT = {
    mintPrice: 0,
    maxSupply: 0,
    metadataURI: 'hahaha',
    name: ''
};

export default function Donations() {
    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="container mx-auto mb-20 text-center">
                    <Typography color="blue-gray" className="mb-2 font-bold uppercase">
                        Stream & Reward
                    </Typography>
                    <Typography variant="h1" color="blue-gray" className="mb-4">
                        Empower Live Streaming
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
                    >
                        Unlock the potential of livestreaming with our decentralized donation platform.
                        Empower creators and participate in a new era of digital interaction, ensuring a secure, transparent
                        , and inclusive experience.
                    </Typography>
                </div>
                <div className="flex flex-wrap mx-4 ">
                    {/* Left Column: Create Contract */}
                    <div className="w-[80%] md:w-1/2 px-4 py-4 border border-blue-500 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Streamer Register</h2>
                        <CreateContractForm />
                    </div>

                    {/* Right Column: Add NFT */}
                    <div className="w-[80%] md:w-1/2 px-4 py-4 border border-blue-500 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Add New NFT</h2>
                        <AddNewNFTForm />
                    </div>
                </div>
            </div>
        </div>
    );
}