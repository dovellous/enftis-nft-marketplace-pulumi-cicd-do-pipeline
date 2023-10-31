import React from "react";
import { Routes } from "_router";
import { HelmetProvider } from "react-helmet-async";
import { DataProvider } from "_services/providers/data";

import { Web3Modal } from "@web3modal/react";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

import {
  configureChains,
  createConfig,
  WagmiConfig
} from "wagmi";

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { wagmiChains } from "_components/widgets/wallet/ui/WagmiChains";

import dotenv from "dotenv";
dotenv.config();

const chainsList = wagmiChains;

const projectId = process.env.REACT_APP_WALLET_CONNECT_API_KEY || "";

const alchemyApiKey = process.env.REACT_APP_ALCHEMY_KEY || "";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, publicClient, webSocketPublicClient } = configureChains(
  chainsList,
  [
    alchemyProvider({ apiKey: alchemyApiKey }),
    w3mProvider({ projectId }),
    publicProvider()
  ],
)

// Set up wagmi config
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const App: React.FC = () => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <DataProvider>
          <HelmetProvider>
            <Routes />
          </HelmetProvider>
        </DataProvider>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export { App };