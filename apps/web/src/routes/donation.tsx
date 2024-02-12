import React, { useState, useEffect, useLayoutEffect } from "react"
import Error from "./error"
import Navbar from "./components/Navbar"
import { TwitchContextService } from "../../src/services/api/twitchContext"
import { useLocation } from "react-router-dom"

export default function Donation() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const streamerId = searchParams.get("value")

  const [tipAmount, setTipAmount] = useState<string>("4.2")
  const [message, setMessage] = useState<string>("")

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipAmount(event.target.value)
    console.log(tipAmount)
  }

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
    console.log(message)
  }
  
  if (!streamerId) {
    return <Error />
  } else {
    return (
      <div className="md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="mx-auto md:max-w-[650px] w-full md:grid grid-row-5 text-start gap-4 rounded-sm relative z-10">
          <Navbar />
          <div className="bg-slate-200 rounded-sm p-4 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl relative">
            <div className="avatar absolute pl-4 bottom-0 left-0 gap-4 flex items-center">
              <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <div className="bg-white rounded-xl h-8 w-28 text-start pt-1 pl-2">
                <p className="text-black font-bold">{streamerId}</p>
              </div>
            </div>
          </div>
          <div className="row-span-3 md:grid grid-cols-10 gap-4 rounded-sm">
            <form className="bg-white col-span-3 md:col-span-5 h-[450px] rounded-sm p-5 grid-row-7">
              <fieldset className="grid grid-row-3">
                <label className="font-bold flex">Select amount to tip</label>
                <fieldset className="grid grid-cols-3 gap-2 pt-4">
                  <label className="bg-slate-200 rounded-xl text-center font-bold text-sky-400"><input className="hidden" type="radio" name="preset" value="3.3" onChange={handleAmountChange}/>$3.33</label>
                  <label className="bg-slate-200 rounded-xl text-center font-bold text-sky-400"><input className="hidden" type="radio" name="preset" value="4.2" onChange={handleAmountChange}/>$4.20</label>
                  <label className="bg-slate-200 rounded-xl text-center font-bold text-sky-400"><input className="hidden" type="radio" name="preset" value="6.9" onChange={handleAmountChange}/>$6.90</label>
                  <label className="bg-slate-200 rounded-xl text-center font-bold text-sky-400"><input className="hidden" type="radio" name="preset" value="13.37" onChange={handleAmountChange}/>$13.37</label>
                  <label className="bg-slate-200 rounded-xl text-center font-bold text-sky-400">OTHER</label>
                </fieldset>
              </fieldset>
              <fieldset>
                <label className="font-bold flex pt-4">Send a message with your tip</label>
                <div className="pt-4">
                  <input type="text" placeholder={`Message for ${streamerId}`} className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <div className="flex items-center pt-4">
                  <p className="mr-2">You are logged-in as</p>
                  <p className="font-bold">xxx</p>
                </div>
              </fieldset>
            </form>
            <div className="bg-white col-span-2 md:col-span-5 pl-2 h-[450px] rounded-sm p-5">
              02
            </div>
          </div>
        </div>
      </div>
    )
  }
}
