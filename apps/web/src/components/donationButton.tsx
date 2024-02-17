import React from "react";
import { ERC20ABI, ERC20ADDRESS } from "src/services/contractAbi";
import { useContractWrite, useAccount } from 'wagmi'
import { formatAddress } from "src/utils/stingify";


export function DoantionButton({to, value}) {
    const { address, isConnecting, isDisconnected } = useAccount()

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: ERC20ADDRESS,
        abi: ERC20ABI,
        functionName: 'transfer',
      })
    
    
    if(!isDisconnected){
        return (
            <div>
                <div>
                    {<button
                    className="btn btn-wide rounded-3xl"
                    type="button"
                    style={{"width": "100%"}}
                    disabled={!write}
                    onClick={() => {
                        write({
                            args: [to, value],
                        })

                        return false
                        }
                    }
                    >Donate</button>}
                </div>
                <div>
                {isLoading && <label className="font-bold text-black">Check wallet</label>}
                {isSuccess && 
                <>
                    <p className="font-bold text-black">Transaction:</p>
                    <br />
                    <p className="font-bold text-black">{formatAddress(JSON.stringify(data).split(":")[1].split("\"")[1])}</p>
                </>
                }
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
