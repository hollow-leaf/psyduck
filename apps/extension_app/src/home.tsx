import { ConnectButton, DisconnectButton } from "./components/connect";
import { Profile } from "./components/profile";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export function Home(){
    const { isDisconnected } = useAccount()
    const { open } = useWeb3Modal()
    

    if (!isDisconnected) return (
        <div>
            <Profile />
            <DisconnectButton />
            <button onClick={() => open({ view: 'Networks' })}>Network</button>
        </div>
    )

    return <ConnectButton />
}
