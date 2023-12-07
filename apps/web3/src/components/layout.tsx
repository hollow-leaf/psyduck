"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  Theme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, sepolia, WagmiConfig } from "wagmi";
import { goerli, mainnet, polygonMumbai } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Cathay Co2 App",
  projectId: "aee029c7cbcb082fb760081017c3dec5",
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
          <ThemeProvider>{children}</ThemeProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  )
}

export default Layout;
