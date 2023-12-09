import { useAccount } from "wagmi"
import { Balance } from "./balance"

export function Profile(){

    const { address, isConnecting, isDisconnected } = useAccount()

    return(
        <section>
            <p>Your Address: {address}</p>
            <Balance />
        </section>
    )
}
