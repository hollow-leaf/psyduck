import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: unknown  = useRouteError()
  console.error(error)

  return (
    <div className='mx-auto font-bold bg-slate-400'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
