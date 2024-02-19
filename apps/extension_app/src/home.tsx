import { ConnectButton, DisconnectButton } from "./components/connect"
import { Profile } from "./components/profile"
import { useAccount } from "wagmi"

export function Home(){
    const { isDisconnected, address } = useAccount()
    
    if (!isDisconnected&&address) return (
        <Profile address={address} />
    )

    return (
        <section>
            <ConnectButton />
        </section>
    )
}
