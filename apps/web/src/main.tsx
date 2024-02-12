import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import App from './App'
import Launch from './routes/launch'
import Donation from './routes/donation'
import ErrorPage from './routes/error'

const rootElement = document.getElementById('root')

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'launch',
    element: <Launch />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'donation',
    element: <Donation />,
    errorElement: <ErrorPage />,
  },
])

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
} else {
  console.error('Root element with id "root" not found')
}
