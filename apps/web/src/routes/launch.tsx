import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { TwitchContextService } from '../../src/services/api/twitchContext'

export default function Launch() {
  const [liveState, setLiveState] = useState<string>('offline')
  const [accessToken, setAccessToken] = useState<string>('')
  const TwitchAccessToken = new TwitchContextService()

  const fetchData = async () => {
    const res: string = await TwitchAccessToken.getAccessToken()
    setAccessToken(res)
    console.log(accessToken)
  }
  useEffect(()=>{
    fetchData()
    .then((response)=>{return response})
    .catch((error)=>{return error})
  },[])
  return (
    <div className='md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative'>
      {/* Background cover */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      {/* Content */}
      <div className="mx-auto md:max-w-[650px] w-full md:grid grid-row-5 text-center gap-4 rounded-md relative z-10">
        <Navbar />
        <div className='bg-slate-200 rounded-md p-24 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl'>
          <div className={`avatar ${liveState === 'online' ? 'online' : 'offline'}`}>
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
        <div className='row-span-3 md:grid grid-cols-10 gap-4 rounded-md'>
          <div className='bg-slate-300 col-span-3 md:col-span-5 h-[450px] rounded-md'>01</div>
          <div className='bg-slate-100 col-span-2 md:col-span-5 pl-2 h-[450px] rounded-md'>02</div>
        </div>
      </div>
    </div>
  )
}
