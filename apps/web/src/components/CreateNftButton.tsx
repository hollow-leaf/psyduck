import React from "react";
import { FactoryABI, FactoryADDRESS } from "src/services/contractAbi";
import { useAccount, useContractWrite } from "wagmi";
import Loading from "./loading";

export function CreateNftButton({nftName, nftPrice, creatorName, setnftName, setnftPrice}) {
    const { address, isConnecting, isDisconnected } = useAccount()

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'addNewERC1155',
        onSuccess(data) {
            alert('Successful! \n'+ "transaction hash: " +JSON.stringify(data).split(":")[1].split("\"")[1])
            setnftName("")
            setnftPrice(0)
        },
        onError(error) {
            console.log(error)
        },
    })

    if(!isDisconnected){
        return (
            <div>
                <div>
                    {<button
                    className="btn join-item input-bordered input-info rounded"
                    type="button"
                    disabled={!write}
                    onClick={() => {
                        console.log(nftName, nftPrice)
                        if (nftName.trim() == '') {
                            alert('Must input NFT name!')
                        } else if (nftPrice <= 0) {
                            alert('NFT price must be larger than 0!')
                        } else {
                            write({
                                args: [creatorName, nftPrice, nftName, "None"],
                            })
                        }
                    }
                    }
                    style={{"borderRadius": "30px", "minWidth": "0px", "marginTop": "10px"}}
                    >Create</button>}
                </div>
                
                <div>
                {isLoading && <Loading />}
                </div>

            </div>
            
        )
    }else{
        return (
            <div>
                <p>You have to connect wallet!</p>
            </div>
        )
    }

}