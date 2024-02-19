import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router-dom'
import { RegisterButton } from 'src/components/RegisterButton'
import { userId2Address } from 'src/services/api/api'

export default function Launch() {
  const [inputValue, setInputValue] = useState<string>('')
  const [inputIdValue, setInputIdValue] = useState<string>('')

  const [correctOtherInput, setCorrectOtherInput] = useState<boolean>(true)
  const navigate = useNavigate()

  const handleInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 20) {
      setInputValue(value)
      setCorrectOtherInput(true)
    } else {
      setCorrectOtherInput(false)
    }
  }

  const handleIdInputContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length <= 20) {
      setInputIdValue(value)
      setCorrectOtherInput(true)
    } else {
      setCorrectOtherInput(false)
    }
  }

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyword = e.key
    if (keyword=="Enter"){
      handleSubmit()
    }
  }
  const handleSubmit = async () => {
    if (inputValue.trim() !== '') {
      await userId2Address(inputValue).then((res: any) => {
        if (res) {
          if(res['poolContractAddr']) {
            navigate(`/donation?value=${inputValue}`)
          } else {
            alert('Streamer has not registered!')
          }
        }
      })
    } else {
      alert('Must input streamer name!')
    }
  }

  const handleRegister = () => {
    if (inputIdValue.trim() !== '') {
      
    } else {
      alert('Must input streamer id!')
    }
  }

  return (
    <div className='md:max-w-[5120px] w-full bg-cover bg-no-repeat bg-fixed bg-launch min-h-screen grid place-items-start relative'>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
      <div className='mx-auto md:max-w-[650px] w-full md:grid grid-row-5 text-center gap-4 rounded-md relative z-10' style={{"padding": "10px"}}>
        <Navbar />
        <div className='row-span-5'></div>
        <label className="font-bold flex" style={{ "color": "white" }}>Search for streamer</label>
        <div className='flex flex-col bg-slate-200 rounded-md p-16 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl gap-3' style={{"marginBottom": "10px"}}>
          <p className='text-xl text-start text-white'>Input steamer name: </p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
              value={inputValue}
              onChange={handleInputContent}
              onKeyDown={handleEnter}
            />
            <button className='btn join-item input-bordered input-info rounded' onClick={handleSubmit} style={{"borderRadius": "30px", "minWidth": "0px"}}>
              Submit
            </button>
          </div>
          <div className={`${correctOtherInput === true ? "hidden" : "flex items-center"}`}>
            <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <p className="text-red-500 font-bold">Warning: Only allow number and string in text box！</p>
          </div>
        </div>
        <label className="font-bold flex" style={{ "color": "white" }}>Streamer register</label>
        <div className='flex flex-col bg-slate-200 rounded-md p-16 h-[200px] bg-cover bg-no-repeat bg-launch-profile shadow-xl gap-3'>
          <p className='text-xl text-start text-white'>Input your streamer id: </p>
          <div className='join gap-4 start'>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered input-info w-full max-w-xs'
              value={inputIdValue}
              onChange={handleIdInputContent}
              onKeyDown={handleEnter}
            />
            <RegisterButton userId={inputIdValue}/>
          </div>
          <div className={`${correctOtherInput === true ? "hidden" : "flex items-center"}`}>
            <svg className="h-6 w-6 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <p className="text-red-500 font-bold">Warning: Only allow number and string in text box！</p>
          </div>
        </div>
      </div>
    </div>
  )
}
