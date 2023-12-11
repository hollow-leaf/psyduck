import { useAccount } from "wagmi"
import { Balance } from "./balance"
import { DisconnectButton } from "./connect"
import { useWeb3Modal } from "@web3modal/wagmi/react"

export function Profile(){

    const { address } = useAccount()
    const { open } = useWeb3Modal()

    return(
        <>
            <section>
                <p>Your Address: {address}</p>
                <Balance />
            </section>
            <DisconnectButton />
            <button style={{marginLeft: "25px"}} onClick={() => open({ view: 'Networks' })}>Network</button>
        </>
    )
}
