"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  coreWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { Chain, configureChains, createConfig, WagmiConfig } from "wagmi";
import { opBNBTestnet, avalancheFuji } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "./navbar";
import Footer from "./footer";
const customAvalancheChain:Chain = {
  id: 1141776, // The chain ID of your custom chain
  name: 'Cathay Psyduck Network',
  network: 'Psyduck',
  nativeCurrency: {
    name: 'Psyduck',
    symbol: 'PSD',
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ['https://subnets.avacloud.io/a204496f-1767-4226-8cac-ffe7a2224b7f'],
    },
    default: {
      http: ['https://subnets.avacloud.io/a204496f-1767-4226-8cac-ffe7a2224b7f'],
    },
  },
  testnet: false,
};
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [opBNBTestnet, avalancheFuji, customAvalancheChain],
  [publicProvider()]
);
const ProjectId = "966691db73928f3c8a904ea62261b457";
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      coreWallet({ projectId: ProjectId, chains }),
      metaMaskWallet({ projectId: ProjectId, chains }),
      rainbowWallet({ projectId: ProjectId, chains }),
      walletConnectWallet({ projectId: ProjectId, chains }),
    ],
  },
]);


const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 10,
    },
  },
});
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} coolMode>
          <ThemeProvider>
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  )
}

export default Layout;