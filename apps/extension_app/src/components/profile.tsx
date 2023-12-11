import { useAccount } from "wagmi"
import { Balance } from "./balance"
import { DisconnectButton } from "./connect"
import { useWeb3Modal } from "@web3modal/wagmi/react"

export function Profile(){

    const { address } = useAccount()
    const { open } = useWeb3Modal()

    return(
        <section>
            <p>Your Address: {address}</p>
            <Balance />
            <DisconnectButton />
            <button onClick={() => open({ view: 'Networks' })}>Network</button>
        </section>
    )
}
