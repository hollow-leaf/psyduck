import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
import { StreamerType } from "../type"
import { getNftsByAddress } from "../services/api";
import { NftItem } from "./nftItem";

export function Streamer(props:any){

    const { isLoading, error, data } = useQuery({
        queryKey: ["getStreamer"],
        queryFn: () =>
          streamer().then(res=>{
            if(res.id==""){
                return res
            }

            //TODO
            /* getNftsByAddress(res.address).then(r=>{
                if(r){
                    res.nftList = r
                }
                return res
            }) */

            //only for test
            res.nftList = [{nftId:"a", creator:"0xsdasda", price:100, url:""},{nftId:"b", creator:"0xsdasda", price:500, url:""},{nftId:"c", creator:"0xsdasda", price:10, url:""}]
            return res
          })
    });

    if(isLoading||error) return <Loading/ >;

    if(data){
        if(data.address==""||data.id==""){
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
                                    <NftItem nftId={item.nftId} creator={item.creator} price={item.price} url={item.url} />
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
        nftList: []
    }
    if(!tabs[0].url){
        return streamer
    }
    
    streamer.id = url2StreamerId(tabs[0].url)

    //TODO: contract function
    streamer.address = "0x"

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

