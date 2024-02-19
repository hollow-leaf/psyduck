import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import { StreamerType } from "../type"
import { getNftcsByUserId, userId2Address } from "../services/api";
import { NftSaleItem } from "./nftSaleItem";
import { register } from "../services/contract";

export function Streamer(props:any){

    const { isLoading, error, data } = useQuery({
        queryKey: ["getStreamer"],
        queryFn: () =>
          streamer().then(async res=>{
            if(res.id==""){
                return res
            }
            
            res.nftList = await getNftcsByUserId(res.id).then(rres=>{
                var nfts: { nftId: any; creator: any; price: any; url: string; name: any; supply: any; poolContractAddr:string;}[] = []
                console.log(rres)

                res.address = rres[0].creator
                rres.map((item:any)=>{
                    console.log(item)
                    nfts.push({poolContractAddr: item.poolContractAddr, nftId: item.nftId, creator: item.creatorId, price: item.price , url:"", name: item.nftName, supply: item.Supply})
                })
                
                return nfts
            }).catch(e=>{return []})
            
            return res
          })
    });

    if(isLoading||error) return <Loading/ >;

    if(data){
        if(data.id==""){
            return
        }else{
            return (
                <section>
                    <h1>{data.id}</h1>
                    <h1>NFT List</h1>
                    <div className="nftTable">
                        <>
                            {data.nftList.map((item:any)=>{
                                return (
                                    <NftSaleItem poolContractAddr={data.poolContractAddr} nftId={item.nftId} creator={item.creator} price={item.price} url={item.url} name={item.name} supply={item.supply} />
                                )
                            })}
                        </>
                        
                    </div>
                </section>
            )
        }
    }
    
    return
}

//return streamer's address if register else return ""
async function streamer():Promise<StreamerType>{
    const tabs = await chrome.tabs.query({active: true, lastFocusedWindow: true});

    var streamer:StreamerType = {
        id: "",
        address: "",
        nftList: [],
        poolContractAddr: ""
    }
    if(!tabs[0].url){
        return streamer
    }
    
    streamer.id = url2StreamerId(tabs[0].url)

    const rres:any = await userId2Address(streamer.id)
    streamer.poolContractAddr = rres.poolContractAddr

    return streamer
}


//return streamerId if url is invalid then return ""
function url2StreamerId(url:string):string{
    console.log(url)
    if(!url.startsWith("https://")){
        console.log(1)
        return ""
    }
    const urll = url.slice(8, url.length)
    const host = urll.split("/")[0]

    console.log(urll)
    console.log(host)

    //https://www.twitch.tv/sweetcampercs
    if(host=="www.twitch.tv"){
        return urll.split("/")[1]
    }

    //https://www.binance.com/zh-TC/live/u/28159939
    if(host=="www.binance.com"){
        return urll.split("live/u/")[1]
    }

    return ""
}

