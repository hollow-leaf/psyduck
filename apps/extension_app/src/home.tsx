import { ConnectButton, DisconnectButton } from "./components/connect";
import { login, store } from "./store";
import { Profile } from "./components/profile";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export function Home(){
    const { isDisconnected } = useAccount()
    const { open } = useWeb3Modal()
    

    if (isDisconnected) return <ConnectButton />
    return (
        <div>
            <Profile />
            <DisconnectButton />
            <button onClick={() => open({ view: 'Networks' })}>Network</button>
        </div>
    )
}
