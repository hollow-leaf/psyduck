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
import TwitchAuth from './routes/authcallback'
import ErrorPage from './routes/error'
import Callback from './routes/callback'
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

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
  {
    path: 'auth/callback',
    element: <Callback />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'twitchtest',
    element: <TwitchAuth />,
    errorElement: <ErrorPage />,
  }
])

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
    
  )
} else {
  console.error('Root element with id "root" not found')
}
