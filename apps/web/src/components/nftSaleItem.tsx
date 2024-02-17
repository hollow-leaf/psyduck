import { useAccount, useContractWrite } from "wagmi";
import { nftCreate } from "../models/model"
import { formatAddress } from "../utils/stingify";
import React from "react"
import { FactoryABI, FactoryADDRESS } from "src/services/contractAbi";
import Loading from "./loading";

export function NftSaleItem(props:nftCreate){
    const { address, isConnecting, isDisconnected } = useAccount()

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'mintEventDonateNFT',
        args: [props.eventId, props.nftId, 1]
      })
    return (
        <div>
            {isLoading && <Loading />}
            <div className="card" style={{"background": "rgba(40, 2, 84, 0.7)"}} onClick={() => {
                if(isDisconnected){
                    alert("You have to connect wallet")
                }else{
                    write()
                }
            }}>
                <h4>ID: {props.nftId}</h4>
                <h4>Price: {props.price}</h4>
                <h4>Creator: {formatAddress(props.creator)}</h4>
                <div className="shine"></div>
                <div className="background" style={{"backgroundImage": `url(${props.url})`}}>
                    <div className="tiles">
                        <div className="tile tile-1"></div>
                        <div className="tile tile-2"></div>
                        <div className="tile tile-3"></div>
                        <div className="tile tile-4"></div>

                        <div className="tile tile-5"></div>
                        <div className="tile tile-6"></div>
                        <div className="tile tile-7"></div>
                        <div className="tile tile-8"></div>

                        <div className="tile tile-9"></div>
                        <div className="tile tile-10"></div>
                    </div>

                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>
                <h1 className="hoverAppear">Click to buy!</h1>
            </div>
        </div>
    )
}