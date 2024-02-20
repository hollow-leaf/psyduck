import React, { useState } from "react"
import Navbar from "./components/Navbar"
import { useLocation, useNavigate } from "react-router-dom"
import { channelInfo } from "src/models/model"
import { useQuery } from "react-query"
import { getChannelinfoById, getNftcsByUserId, userId2Address } from "src/services/api/api"
import { NftSaleItem } from "src/components/nftSaleItem"
import { nftCreate } from "src/models/model"
import { DoantionButton } from "src/components/donationButton"
import { CreateNft } from "src/components/CreateNft"
import { useAccount } from "wagmi"

export default function Donation() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const streamerId = searchParams.get("value")
  const { address, isConnecting, isDisconnected } = useAccount()

  const [channelInfo, setchannelInfo] = useState<channelInfo>()
  const [tipAmount, setTipAmount] = useState<string>("1")
  const [otherAmount, setOtherAmount] = useState<string>("1")
  const [otherClick, setOtherClick] = useState<boolean>(true)
  const [correctOtherInput, setCorrectOtherInput] = useState<boolean>(true)
  const [nftToSale, setnftToSale] = useState<nftCreate[]>([])
  const [streamerAddress, setStreamerAddress] = useState<string>('')
  const [streamerPoolAddress, setStreamerPoolAddress] = useState<string>('')

  const handleOtherAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount: string = e.target.value
    setOtherAmount(inputAmount)
    if (/^[0-9.0-9]*$/.test(inputAmount) && inputAmount.length <= 10 && parseFloat(inputAmount) >= 1) {
      setTipAmount(inputAmount)
      setCorrectOtherInput(true)
    } else {
      setCorrectOtherInput(false)
    }
  }

  const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyEvent: string = e.key
    if (keyEvent === "ArrowUp") {
      let newvalue: number
      if (otherAmount === "") {
        newvalue = 1
      } else {
        newvalue = parseFloat(otherAmount) + 1
      }
      setTipAmount(newvalue.toString())
      setOtherAmount(newvalue.toString())
    } else if (keyEvent === "ArrowDown") {
      if (parseFloat(otherAmount) >= 1) {
        const newvalue: number = parseFloat(otherAmount) - 1
        setTipAmount(newvalue.toString())
        setOtherAmount(newvalue.toString())
      }
      if (otherAmount === "") {
        setOtherAmount("0")
      }
    }
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["getChannelinfoById"],
    queryFn: () => {
      if (streamerId) {
        getChannelinfoById(streamerId).then((res: any) => {
          if (res != null) {
            setchannelInfo(res)
          }
        })
        getNftcsByUserId(streamerId).then((res: any) => {
          if (res) {
            setnftToSale(res)
          }
        })
        userId2Address(streamerId).then((res: any) => {
          if (res) {
            console.log(res)
            setStreamerAddress(res['address'])
            setStreamerPoolAddress(res['poolContractAddr'])
            if(res['poolContractAddr']=="") {
              alert('Streamer has not registered!')
              navigate(`/launch`)
            }
          }
        })
      }
    }
  })


  if (isLoading) {
    return <></>
  } else {
    return (
      <div className="md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="mx-auto md:max-w-[650px] w-full md:grid grid-row-5 rounded-xl relative z-10 gap-3" style={{"padding": "10px"}}>
          <Navbar />
          <div className="bg-slate-200 rounded-xl p-4 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl relative" style={{"marginBottom": "10px"}}>
            <div className="avatar absolute pl-4 bottom-0 left-0 gap-4 flex items-center">
              <div className="w-24 rounded-full">
                {channelInfo?.avatar && <img src={channelInfo.avatar} />}
              </div>
              <div className="bg-white rounded-xl h-8 w-28 text-center pt-1 pl-2" style={{"width": `${streamerId?String(streamerId?.length*12):""}px`}}>
                <p className="text-black font-bold" >{streamerId}</p>
              </div>
            </div>
          </div>
          <div className="row-span-3 md:grid grid-cols-10 gap-4 rounded-sm" style={{"marginBottom": "10px"}}>
            <form className="bg-white col-span-3 md:col-span-5 h-[300px] rounded-xl p-5 grid-row-7" style={{"marginBottom": "10px"}}>
              <fieldset className="grid grid-row-3 gap-4">
                <label className="font-bold flex">Amount to tip</label>
                <div className="relative">
                  <input type="text" placeholder="Input amount" className={`${otherClick === true ? "input input-bordered input-info w-full max-w-xs" : "hidden"}`} value={otherAmount} onChange={handleOtherAmount} onKeyDown={handleKeyEvent} style={{"borderColor": "rgba(32,28,59,0.8)"}}/>
                  <div className={`${correctOtherInput === true || otherClick === false ? "hidden" : "flex items-center"}`}>
                    <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <p className="text-red-500 font-bold" style={{ "fontSize": "10px", "marginTop": "10px" }}>Warning: Only allow number, float and minimum tip required is $1.00 in text box！</p>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <label className="font-bold flex pt-4">Send a message with your tip</label>
                <div className="pt-4">
                  <input type="text" placeholder={`Message for ${streamerId}`} className="input input-bordered input-info w-full max-w-xs" style={{"borderColor": "rgba(32,28,59,0.8)"}}/>
                </div>
              </fieldset>
            </form>
            <form className="bg-white col-span-2 md:col-span-5 h-[300px] rounded-xl p-5">
              <fieldset className="grid" style={{ "gridTemplateRows": "repeat(0, 40%)" }}>
                <div className="flex items-center">
                  <label className="font-bold flex text-gray-400">Your tip</label>
                  <label className="font-bold pl-40" style={{ "paddingLeft": "5rem" }}>$ {tipAmount} PsyCoin</label>
                </div>
                <div className="divider"></div>
                <label className="font-bold text-black" style={{"marginBottom": "10px"}}>Tip {streamerId}</label>
                <DoantionButton to={streamerAddress} value={tipAmount} />
              </fieldset>
            </form>
          </div>
          <div className="bg-slate-200 rounded-xl p-4 bg-cover bg-no-repeat bg-launch-profile shadow-xl relative grid grid-row-3 gap-4">
            <label className="font-bold flex" style={{ "color": "white" }}>NFT created by {streamerId}</label>
            <div className="nftTable">
              {nftToSale.map((item: any) => {
                return (
                  <div className="row-span-3  rounded-sm" key={item.nfdId + item.nftName}>
                    <NftSaleItem poolContractAddr={streamerPoolAddress} creatorId={item.creatorId} nftId={item.nftId} price={item.price} nftName={item.nftName} maxSupply={item.maxSupply} url={channelInfo ? channelInfo.avatar : ""} />
                  </div>
                )
              })}
            </div>
          </div>
          {!isDisconnected&&address==streamerAddress&&<CreateNft userId={streamerId} />}
        </div>
      </div>
    )
  }
}
