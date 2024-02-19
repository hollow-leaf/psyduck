import React from "react";
import { useWaitForTransaction } from "wagmi";

export function WaitForTX({hash, write}) {
    console.log(hash)
    const { data, isError, isLoading } = useWaitForTransaction({
        hash: `0x${hash}`,
        onSuccess(data) {
            console.log("succc")
            write()
        }
    }
    )

    return (
        <></>
    )
}