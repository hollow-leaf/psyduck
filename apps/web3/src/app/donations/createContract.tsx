"use client";
import * as React from 'react'
import { useState } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { GlobalADDRESS, GlobalABI } from '../../service/contractAbi'
export function CreateContractForm() {
  const [tokenId, setTokenId] = useState('')

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: GlobalADDRESS,
    abi: GlobalABI,
    functionName: 'setValidEventHolder',
    args: [tokenId, true],
    enabled: Boolean(tokenId),
  })
  const { data, error, isError, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('tokenId', tokenId)
        write?.()
      }}
    >

      <label>Get Started : </label>
      <input
        id="tokenId"
        type='string'
        onChange={(e) => setTokenId(e.target.value)}
        placeholder="Input Name"
        value={tokenId}
      /><br/>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white border border-blue-700 hover:bg-blue-600 px-4 py-2 rounded"
        disabled={!write || isLoading}
      >
        {isLoading ? 'loading...' : 'Create Contract'}
      </button>
      {isSuccess && (
        <div>
          Successfully create your own NFT contract !!
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </form>
  )
}
