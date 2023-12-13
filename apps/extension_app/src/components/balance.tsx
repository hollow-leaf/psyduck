import { useAccount, useBalance } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { PDBalance } from "../services/contract"


export function Balance(props:any){

    const { isLoading, error, data } = useQuery({
        queryKey: ["getBalance"],
        queryFn: () => 
            PDBalance(props.address).then(res=>{
                console.log(res)
                return res
            })
        
    });
    
    if (isLoading) return <div>Fetching balance…</div>
    if (error) return <div>Error fetching balance</div>
    
    return (
        <div>
            Balance: {Number(data)}
        </div>
    )
}