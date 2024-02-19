import { useAccount } from "wagmi"
import { useQuery } from "@tanstack/react-query";
import { Balance } from "./balance"
import { DisconnectButton } from "./connect"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { getNftosByAddress } from "../services/api"
import Loading from "./loading"
import { NftItem } from "./nftItem"
import { ERC20Faucet } from "../services/contract"

export function Profile(props:any){

    const { address } = useAccount()
    const { open } = useWeb3Modal()

    const { isLoading, error, data } = useQuery({
        queryKey: ["getCollection"],
        queryFn: () => 
            getNftosByAddress(props.address).then(res=>{
                console.log(res)
                return res
            })
        
    });
    
    if(isLoading){
        return (
            <>
                <section>
                    <section>
                        <p>Your Address: {address}</p>
                        <Balance address={address} />
                    </section>
                    <DisconnectButton />
                    <button style={{marginLeft: "25px"}} onClick={() => open({ view: 'Networks' })}>Network</button>
                </section>
                <section>
                    <Loading />
                </section>
            </>
            
        )
    }
    if(data){
        if(data.length>0){
            return(
                <>
                    <section>
                        <section>
                            <p>Your Address: {address}</p>
                            <Balance />
                        </section>
                        <DisconnectButton />
                        <button style={{marginLeft: "25px"}} onClick={() => open({ view: 'Networks' })}>Network</button>
                    </section>
                    <section>
                        <h1>My NFT Collection</h1>
                        <div className="nftTable">
                        {data.map((item:any)=>{
                            return (
                                <NftItem poolContractAddr={item.poolContractAddr} nftId={item.nftId} creator={item.creatorId} price={0} url={""} name={item.nftName} supply={0} />
                            )
                        })}
                        </div>
                    </section>
                </>
                
            )
        }else{
            return (
                <>
                    <section>
                        <section>
                            <p>Your Address: {address}</p>
                            <Balance />
                        </section>
                        <DisconnectButton />
                        <button style={{marginLeft: "25px"}} onClick={() => open({ view: 'Networks' })}>Network</button>
                    </section>
                </> 
            )
        }
    }
}

