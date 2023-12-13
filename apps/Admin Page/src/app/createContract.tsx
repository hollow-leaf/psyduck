"use client";
import * as React from 'react'
import { useState } from 'react'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import { useDebounce } from '../hooks/useDebounce'
import { FactoryADDRESS, ERC20ADDRESS, GlobalADDRESS, ERC20ABI, FactoryABI, GlobalABI} from '../service/contractAbi'
export function CreateContractForm() {
  const [tokenId, setTokenId] = useState('')
  const debouncedTokenId = useDebounce(tokenId)

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: GlobalADDRESS,
    abi: GlobalABI,
    functionName: 'setValidEventHolder',
    args: [debouncedTokenId, true],
    enabled: Boolean(debouncedTokenId),
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
      />
      <button disabled={!write || isLoading}>
        {isLoading ? 'loading...' : 'Create Contract'}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </form>
  )
}
