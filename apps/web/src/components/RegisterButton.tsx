import React from "react";
import { GlobalABI, GlobalADDRESS } from "src/services/contractAbi";
import { useAccount, useContractWrite } from "wagmi";

export function RegisterButton({userId}) {
    const { address, isConnecting, isDisconnected } = useAccount()

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: GlobalADDRESS,
        abi: GlobalABI,
        functionName: 'setValidEventHolder',
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
                                args: [userId, true],
                            })
                        } else {
                            alert('Must input streamer id!')
                        }
                    }
                    }
                    style={{"borderRadius": "30px"}}
                    >Register</button>}
                </div>
                <div>
                {isLoading && <label className="font-bold text-black">Check wallet</label>}
                {isSuccess && <p className="font-bold text-black">Transaction: {JSON.stringify(data)}</p>}
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