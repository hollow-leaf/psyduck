import './App.css'
import { Home } from "./home";
import {Provider} from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet, goerli, opBNBTestnet, opBNB } from 'viem/chains'
import { Streamer } from './components/streamer';
import CreateNft from './components/createNft';

const projectId = '966691db73928f3c8a904ea62261b457'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [opBNB]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 10,
      cacheTime: 1000 * 10,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <Provider store={store}>
          <div className="App">
            <Home />
            <Streamer />
          </div>
        </Provider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}


export default App;
