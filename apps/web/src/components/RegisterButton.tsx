import React from "react";
import { FactoryABI, FactoryADDRESS, ERC20ADDRESS } from "src/services/contractAbi";
import { useAccount, useContractWrite } from "wagmi";
import Loading from "./loading";
import { formatAddress } from "src/utils/stingify";

export function RegisterButton({userId}) {
    const { address, isConnecting, isDisconnected } = useAccount()

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: FactoryADDRESS,
        abi: FactoryABI,
        functionName: 'createPool',
        onSuccess(data) {
            alert('Successful! \n'+ "transaction hash: " +JSON.stringify(data).split(":")[1].split("\"")[1])
        },
        onError(error) {
            console.log(error)
            alert('Error: ' + "ID already register!")
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
                        if (userId.trim() !== '') {
                            write({
                                args: [ERC20ADDRESS, userId],
                            })
                        } else {
                            alert('Must input streamer id!')
                        }
                    }
                    }
                    style={{"borderRadius": "30px", "minWidth": "0px"}}
                    >Register</button>}
                </div>
                
                <div>
                {isLoading && <Loading />}
                </div>

            </div>
            
        )
    }else{
        return (
            <div>
                <p style={{"color": "white"}}>You have to connect wallet!</p>
            </div>
        )
    }
}