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

export default function Donations() {
    const [nft, setNft] = useState<NFT>(nftTemplate);
    const [name, setName] = useState<string>('');
    const handleSubmitName = async (e: React.FormEvent) => {
        e.preventDefault();
        let data = { name };
        console.log(data);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let data = { ...nft };
        for (let key in nft) {
            if (nft[key as keyof NFT] === undefined || nft[key as keyof NFT] === null || nft[key as keyof NFT] === '' || Number.isNaN(nft[key as keyof NFT])) {
                alert("Please fill all the fields");
                return;
            }
            // Additional logic for handling file upload and other functionalities
        }
        console.log(data);
    };

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
                        <h2 className="text-2xl font-bold mb-4 text-center">Create Contract</h2>
                        <form onSubmit={handleSubmitName} className="text-left">
                            {/* Form elements for creating contract */}
                            <label>Get Started : </label><br />
                            <input
                                type="text"
                                placeholder="Donantion Name"
                                onChange={(e) => setName(e.target.value)}
                                className="my-4 text-center"
                            />
                            <br />

                            <button
                                type="submit"
                                className="mt-4 bg-blue-500 text-white border border-blue-700 hover:bg-blue-600 px-4 py-2 rounded"
                            >
                                Create Contract
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Add NFT */}
                    <div className="w-[80%] md:w-1/2 px-4 py-4 border border-blue-500 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4 text-center">Add New NFT</h2>
                        <form onSubmit={handleSubmit} className="text-left">
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
                    </div>
                </div>
            </div>
        </div>
    );
}