import React, { useState } from "react";
import { CreateNftButton } from "./CreateNftButton";

export function CreateNft(props:any) {
    const [nftName, setnftName] = useState<string>("")
    const [nftPrice, setnftPrice] = useState<number>(0)
    const [correctOtherInput, setCorrectOtherInput] = useState<boolean>(true)

    const handleNftNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value
        setnftName(input)
    }

    const handleNftPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value
        if (/^[0-9.0-9]*$/.test(input) && input.length <= 10 && parseFloat(input) >= 1) {
            setnftPrice(Number(input))
            setCorrectOtherInput(true)
          } else {
            setCorrectOtherInput(false)
            }
        }

    return (
        <div className="bg-slate-200 rounded-xl p-4 bg-cover bg-no-repeat bg-launch-profile shadow-xl relative grid grid-row-3 gap-4">
              <label className="font-bold flex" style={{ "color": "white" }}>Create NFT</label>
              <form className="bg-white col-span-2 md:col-span-5 h-[300px] rounded-xl p-5" style={{"background": "rgba(255,255,255,0.8)"}}>
                <fieldset className="grid grid-row-3 gap-4">
                  <label className="font-bold flex">NFT Name</label>
                  <div className="relative">
                    <input type="text" placeholder="" className={"input input-bordered input-info w-full max-w-xs"} style={{"borderColor": "rgba(32,28,59,0.8)"}} value={nftName} onChange={handleNftNameChange}/>
                  </div>
                  <label className="font-bold flex">NFT Price</label>
                  <div className="relative">
                    <input type="text" placeholder="" className={"input input-bordered input-info w-full max-w-xs"} style={{"borderColor": "rgba(32,28,59,0.8)"}} value={nftPrice} onChange={handleNftPriceChange}/>
                  </div>
                </fieldset>
                <CreateNftButton nftName={nftName} nftPrice={nftPrice} creatorName={props.userId} setnftPrice={setnftPrice} setnftName={setnftName} />
                <div className={`${correctOtherInput === true ? "hidden" : "flex items-center"}`}>
                    <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <p className="text-red-500 font-bold" style={{ "fontSize": "10px", "marginTop": "10px" }}>Warning: Only allow number, float and minimum tip required is $1.00 in text box！</p>
                  </div>
              </form>
        </div>
    )
}