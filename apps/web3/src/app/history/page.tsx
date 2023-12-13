"use client";
import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
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

export default function History() {

    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="container mx-auto mb-20 text-center">
                    <Typography color="blue-gray" className="mb-2 font-bold uppercase">
                        Stream & Reward
                    </Typography>
                    <Typography variant="h1" color="blue-gray" className="mb-4">
                        History NFT List
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
            </div>
        </div>
    );
}