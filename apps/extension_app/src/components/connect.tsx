import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

export function ConnectButton() {
    const { open } = useWeb3Modal()
  
    return (
      <>
        <button onClick={() => open()}>Connect Wallet</button>
      </>
    )
  }

export function DisconnectButton(){
    const { disconnect } = useDisconnect()
    const { isDisconnected } = useAccount()

    return (
        <>
          <button onClick={() => {
            if(isDisconnected==false){
                disconnect()
            }
          }}>Disconnect</button>
        </>
      )
}