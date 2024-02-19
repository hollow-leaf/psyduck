import { useAccount, useContractWrite, useWaitForTransaction } from "wagmi";
import { nftCreate } from "../models/model"
import { formatAddress } from "../utils/stingify";
import React from "react"
import { FactoryABI, FactoryADDRESS, ERC20ABI, ERC20ADDRESS } from "src/services/contractAbi";
import Loading from "./loading";
import { WaitForTX } from "./WaitForTx";

export function NftSaleItem(props:nftCreate){
    const { address, isConnecting, isDisconnected } = useAccount()

    const { data:dataApprove, isLoading:isLoadingApprove, isSuccess:isSuccessApprove, write:writeApprove } = useContractWrite({
        address: ERC20ADDRESS,
        abi: ERC20ABI,
        functionName: 'approve',
        args: [props.poolContractAddr, props.price],
    })

    
    

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'mintDonateNFT',
        args: [props.creatorId, props.nftId, 1],
        onSuccess(data) {
            alert('Successful! \n'+ "transaction hash: " +JSON.stringify(data).split(":")[1].split("\"")[1])
        },
    })

    return (
        <div>
            {isLoading && <Loading />}
            <div className="card" style={{"background": "rgba(40, 2, 84, 0.7)"}} onClick={() => {
                if(isDisconnected){
                    alert("You have to connect wallet")
                }else{
                    writeApprove()
                }
            }}>
                <h4>ID: {props.nftId}</h4>
                <h4>Price: {props.price}</h4>
                <h4>Creator: {props.creatorId}</h4>
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
            {isSuccessApprove&&<WaitForTX hash={JSON.stringify(dataApprove).split(":")[1].split("0x")[1].split("\"")[0]} write={write}/>}
        </div>
    )
}