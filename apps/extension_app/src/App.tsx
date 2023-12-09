import "./App.css"
import { Home } from "./home";
import {Provider, useSelector} from "react-redux";
import { store } from "./store";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { mainnet, goerli, opBNBTestnet } from 'viem/chains'

const projectId = '966691db73928f3c8a904ea62261b457'

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, goerli, opBNBTestnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {

  return (
    <WagmiConfig config={wagmiConfig}>
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    </WagmiConfig>
    
  );
}


export default App;
