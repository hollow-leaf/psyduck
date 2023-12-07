"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { opBNB, opBNBTestnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "./navbar";
import Footer from "./footer";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [opBNBTestnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Psyduck",
  projectId: "966691db73928f3c8a904ea62261b457",
  chains,
});

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