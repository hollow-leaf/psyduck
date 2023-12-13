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
import { Account } from '../components/Account'
import { Balance } from '../components/Balance'
import { BlockNumber } from '../components/BlockNumber'
import { ConnectKitButton } from '../components/ConnectKitButton'
import { Connected } from '../components/Connected'
import { NetworkSwitcher } from '../components/NetworkSwitcher'
import { ReadContract } from '../components/ReadContract'
import { ReadContracts } from '../components/ReadContracts'
import { ReadContractsInfinite } from '../components/ReadContractsInfinite'
import { SendTransaction } from '../components/SendTransaction'
import { SendTransactionPrepared } from '../components/SendTransactionPrepared'
import { SignMessage } from '../components/SignMessage'
import { SignTypedData } from '../components/SignTypedData'
import { Token } from '../components/Token'
import { WatchContractEvents } from '../components/WatchContractEvents'
import { WatchPendingTransactions } from '../components/WatchPendingTransactions'
import { WriteContract } from '../components/WriteContract'
import { WriteContractPrepared } from '../components/WriteContractPrepared'
import {CreateContractForm} from './createContract'
import { AddNewNFTForm } from "./addNewNFT";
export default function Page() {
  const [nft, setNft] = useState<NFT>(nftTemplate);

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
    <>

      <ConnectKitButton />

      {/* <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected> */}
      <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="container mx-auto mb-20 text-center">
                    <Typography color="blue-gray" placeholder={''} className="mb-2 font-bold uppercase">
                        Stream & Reward
                    </Typography>
                    <Typography variant="h1" color="blue-gray" placeholder={''} className="mb-4">
                        Empower Live Streaming
                    </Typography>
                    <Typography
                        placeholder={''}
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
    </>
  )
}

