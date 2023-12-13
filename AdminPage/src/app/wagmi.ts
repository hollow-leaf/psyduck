
// import { Chain } from '@wagmi/core'
// import { createConfig, configureChains } from 'wagmi'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { publicProvider } from "wagmi/providers/public";
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect' 
// import { CoreConnector } from 'wagmi/connectors/core'
// const metadata = {
//   name: 'Web3Modal',
//   description: 'Web3Modal Example',
//   url: 'https://web3modal.com',
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// }
// const ProjectId = '966691db73928f3c8a904ea62261b457'
// const opBNBTestnet:Chain = ({
//   id: 5611,
//   name: 'opBNB Testnet',
//   network: 'opBNB Testnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'tBNB',
//     symbol: 'tBNB',
//   },
//   rpcUrls: {
//     public: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
//     default: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
//   },
//   blockExplorers: {
//     default: { name: 'opbnbscan', url: 'https://opbnbscan.com' },
//   },
//   contracts: {
//     multicall3: {
//       address: '0xcA11bde05977b3631167028862bE2a173976CA11',
//       blockCreated: 3705108,
//     },
//   },
//   testnet: true,
// })
// const Psyduck:Chain = ({
//   id: 1141776,
//   name: 'Cathay Psyduck Devnet',
//   network: 'Cathay Psyduck Devnet',
//   nativeCurrency: {
//     decimals: 18,
//     name: 'Duck',
//     symbol: 'DK',
//   },
//   rpcUrls: {
//     public: { http: ['https://subnets.avacloud.io/a204496f-1767-4226-8cac-ffe7a2224b7f'] },
//     default: { http: ['https://subnets.avacloud.io/a204496f-1767-4226-8cac-ffe7a2224b7f'] },
//   },
// })
// const { chains, publicClient, webSocketPublicClient } = configureChains(
//   [Psyduck, opBNBTestnet],
//   [publicProvider()],
// )
// export const config = createConfig({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: 'wagmi',
//       },
//     }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         projectId: '...',
//       },
//     }),
//     //add core wallet on avalanche
//     new CoreConnector({ chains }),
//   ],
//   publicClient,
//   webSocketPublicClient,
// })

"use client";

import React from "react";
import { Chain } from '@wagmi/core'
import { ThemeProvider } from "@material-tailwind/react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  coreWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const Psyduck:Chain = ({
  id: 1141776,
  name: 'Cathay Psyduck Devnet',
  network: 'Cathay Psyduck Devnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Duck',
    symbol: 'DK',
  },
  rpcUrls: {
    public: { http: ['https://subnets.avacloud.io/a204496f-1767-4226-8cac-ffe7a2224b7f'] },
    default: { http: ['https://subnets.avacloud.io/a204496f-1767-4226-8cac-ffe7a2224b7f'] },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 3705108,
    },
  },
})

const opBNBTestnet:Chain = ({
  id: 5611,
  name: 'opBNB Testnet',
  network: 'opBNB Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'tBNB',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
    default: { http: ['https://opbnb-testnet-rpc.bnbchain.org'] },
  },
  blockExplorers: {
    default: { name: 'opbnbscan', url: 'https://opbnbscan.com' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 3705108,
    },
  },
  testnet: true,
})

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [Psyduck, opBNBTestnet],
  [publicProvider()]
);
const ProjectId = "966691db73928f3c8a904ea62261b457";
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      coreWallet({ projectId: ProjectId,chains }),
      metaMaskWallet({ projectId: ProjectId,chains}),
      rainbowWallet({ projectId: ProjectId,chains }),
      walletConnectWallet({ projectId: ProjectId,chains }),
    ],
  },
]);

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});