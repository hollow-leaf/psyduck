import { useState } from "react";
import { getChannelinfoById } from "../services/api";
import { NftType } from "../type";
import { formatAddress } from "../utils/stingify";
import { useQuery } from "@tanstack/react-query";


export function NftItem(props:NftType){

    const [imgUrl, setImgUrl] = useState<string>("")

    const { isLoading, error, data } = useQuery({
        queryKey: ["getChannelinfoById"],
        queryFn: () => {
            getChannelinfoById(props.creator).then(res => {
                if(res?.avatar)setImgUrl(res?.avatar)
            })
        }        
    });

    if(isLoading) {
        return <></>
    } else {
        return (
            <div>
                <div className="card">
                    <h4>ID: {props.nftId}</h4>
                    <h4>Name: {props.name}</h4>
                    <h4>Creator: {formatAddress(props.creator)}</h4>
                    <div className="shine"></div>
                    <div className="background" style={{"backgroundImage": `url(${imgUrl})`}}>
                        <div className="tiles">
                            <div className="tile tile-1"></div>
                            <div className="tile tile-2"></div>
                            <div className="tile tile-3"></div>
                            <div className="tile tile-4"></div>
    
                            <div className="tile tile-5"></div>
                            <div className="tile tile-6"></div>
                            <div className="tile tile-7"></div>
                            <div className="tile tile-8"></div>
    
                            <div className="tile tile-9"></div>
                            <div className="tile tile-10"></div>
                        </div>
    
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}