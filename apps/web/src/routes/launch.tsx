import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useNavigate  } from 'react-router-dom'

export default function Launch() {
  const [inputValue, setInputValue] = useState<string>('')
  const navigate = useNavigate()

  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (/^[a-zA-Z0-9]*$/.test(value) && value.length <= 20) {
      setInputValue(value)
    }else{
      alert('Please input correct name! (Please switch input method)')
    }
  }

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      navigate(`/donation?value=${inputValue}`)
    }else{
      alert('Must input streamer name!')
    }
  }

  return (
    <div className='md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='mx-auto md:max-w-[650px] w-full md:grid grid-row-5 text-center gap-4 rounded-md relative z-10'>
        <Navbar />
        <div className='row-span-5'></div>
        <div className='flex flex-col bg-slate-200 rounded-md p-16 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl gap-3'>
          <p className='text-xl text-start text-white'>Input steamer name: </p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
              value={inputValue}
              onChange={handleInputContent}
            />
            <button className='btn join-item input-bordered input-info rounded-r-full' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
