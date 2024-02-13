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
  const [otherClick, setOtherClick] = useState<boolean>(false)
  const [correctOtherInput, setCorrectOtherInput] = useState<boolean>(true)
  const handleOtherAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[0-9.0-9]*$/.test(value) && value.length <= 10) {
      setTipAmount(value)
      setCorrectOtherInput(true)
    } else {
      setCorrectOtherInput(false)
    }
  }
  useEffect(() => {
    setOtherClick(false)
  }, [tipAmount])
  if (!streamerId) {
    return <Error />
  } else {
    return (
      <div className="md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="mx-auto md:max-w-[650px] w-full md:grid grid-row-5 rounded-xl relative z-10 gap-3">
          <Navbar />
          <div className="bg-slate-200 rounded-xl p-4 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl relative">
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
            <form className="bg-white col-span-3 md:col-span-5 h-[450px] rounded-xl p-5 grid-row-7">
              <fieldset className="grid grid-row-3 gap-4">
                <label className="font-bold flex">Select amount to tip</label>
                <fieldset className="grid grid-cols-3 gap-2 pt-4">
                  <button className={`${tipAmount === '3.33' ? "bg-sky-400 rounded-xl text-center font-bold text-slate-100" : "bg-slate-100 rounded-xl text-center font-bold text-sky-400"}`} type='button' onClick={() => setTipAmount('3.33')}>$3.33</button>
                  <button className={`${tipAmount === '4.2' ? "bg-sky-400 rounded-xl text-center font-bold text-slate-100" : "bg-slate-100 rounded-xl text-center font-bold text-sky-400"}`} type='button' onClick={() => setTipAmount('4.2')}>$4.20</button>
                  <button className={`${tipAmount === '6.9' ? "bg-sky-400 rounded-xl text-center font-bold text-slate-100" : "bg-slate-100 rounded-xl text-center font-bold text-sky-400"}`} type='button' onClick={() => setTipAmount('6.9')}>$6.90</button>
                  <button className={`${tipAmount === '13.37' ? "bg-sky-400 rounded-xl text-center font-bold text-slate-100" : "bg-slate-100 rounded-xl text-center font-bold text-sky-400"}`} type='button' onClick={() => setTipAmount('13.37')}>$13.37</button>
                  <button className={`${otherClick === true ? "bg-sky-400 rounded-xl text-center font-bold text-slate-100" : "bg-slate-100 rounded-xl text-center font-bold text-sky-400"}`} type="button" onClick={() => { setOtherClick(true) }}>OTHER</button>
                </fieldset>
                <div className="relative">
                  <input type="text" placeholder="Input amount" className="input input-bordered input-info w-full max-w-xs" onChange={handleOtherAmount} />
                  <div className={`${correctOtherInput === true ? "hidden" : "flex items-center"}`}>
                    <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <p className="text-red-500 font-bold">Warning: Only allow number and float in text box！</p>
                  </div>
                </div>
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
            <form className="bg-white col-span-2 md:col-span-5 h-[450px] rounded-xl p-5">
              <fieldset className="grid grid-rows-5">
                <div className="flex items-center">
                  <label className="font-bold flex text-gray-400">Your tip</label>
                  <label className="font-bold pl-40">${tipAmount}</label>
                </div>
                <div className="divider"></div>
                <label className="font-bold text-black">Tip {streamerId}</label>
                <button className="btn btn-wide rounded-3xl">Psyduck</button>
                <div className="row-span-4">
                  <label className="text-gray-400 absolute align-middle bottom-0 text-center pr-2">By moving forward you confirm you’ve read and approved our Terms of Service.</label>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
