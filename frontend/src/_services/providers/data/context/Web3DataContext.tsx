/* eslint-disable react-hooks/exhaustive-deps */
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

//

import { parseEther } from "viem";
import { switchNetwork } from "@wagmi/core";
import { sendTransaction, prepareSendTransaction } from "@wagmi/core";

//

import {
  BrowserProvider,
  FallbackProvider,
  JsonRpcProvider,
  JsonRpcSigner,
} from "ethers";

//

import {
  useAccount,
  useNetwork,
  type WalletClient,
} from "wagmi";

import { type HttpTransport } from "viem";
import { type PublicClient, getPublicClient } from "@wagmi/core";

import { getWalletClient, getAccount, getNetwork } from '@wagmi/core';

import { ERC1155FactoryClass } from "./libs/classes/ERC1155FactoryClass";
import { ERC721FactoryClass } from "./libs/classes/ERC721FactoryClass";
import { ERCMKTPFactoryClass } from "./libs/classes/ERCMKTPFactoryClass";
import { ERCDAOFactoryClass } from "./libs/classes/ERCDAOFactoryClass";
import { ERCDEFIFactoryClass } from "./libs/classes/ERCDEFIFactoryClass";
//



export function walletClientToSigner(walletClient: WalletClient) {
  const { account, transport } = walletClient;
  const { chain } = getNetwork();
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: chain?.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner({ chainId }: { chainId?: number } = {}) {
  const walletClient = await getWalletClient();
  if (!walletClient) return undefined;
  return walletClientToSigner(walletClient);
}

export function publicClientToProvider(publicClient: PublicClient) {
  const { chain, transport } = publicClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  if (transport.type === "fallback") {
    const providers = (transport.transports as ReturnType<HttpTransport>[]).map(
      ({ value }) => new JsonRpcProvider(value?.url, network)
    );
    if (providers.length === 1) return providers[0];
    return new FallbackProvider(providers);
  }
  return new JsonRpcProvider(transport.url, network);
}

/** Action to convert a viem Public Client to an ethers.js Provider. */
export function getEthersProvider({ chainId }: { chainId?: number } = {}) {
  const publicClient = getPublicClient({ chainId });
  return publicClientToProvider(publicClient);
}

export interface Web3ContentTypeInterface {
  /// WALLET ACCOUNT
  walletAccount: `0x${string}`,
  setWalletAccount: (v: any) => void;

  /// WALLET SIGNERS
  walletSignerEthers: any;
  setWalletSignerEthers: (v: any) => void;
  walletSigner: any;
  setWalletSigner: (v: any) => void;

  /// WALLET PROVIDERS
  walletProviderEthers: any;
  setWalletProviderEthers: (v: any) => void;
  walletProvider: any;
  setWalletProvider: (v: any) => void;

  /// ETHERS REQUEST IN PROGRESS
  smartContractProcessing: boolean;
  setSmartContractProcessing: (v: boolean) => void;

  /// SEND ETHER FUNCTION
  sendEthAmountToAddress: (a: number, t: string) => any;

  // ERC721FactorySmartContract
  erc721FactorySmartContract: ERC721FactoryClass;

  // ERC1155FactorySmartContract
  erc1155FactorySmartContract: ERC1155FactoryClass;

  // ERCDAOFactorySmartContract
  ercMKTPFactorySmartContract: ERCMKTPFactoryClass;

  // ERCDAOFactorySmartContract
  ercDAOFactorySmartContract: ERCDAOFactoryClass;

  // ERCDEFIFactorySmartContract
  ercDEFIFactorySmartContract: ERCDEFIFactoryClass;

}

export const Web3DataContext = createContext<Web3ContentTypeInterface>({
  /// WALLET ACCOUNT
  walletAccount: '0x0',
  setWalletAccount: () => { },
  /// WALLET SIGNERS
  walletSignerEthers: null,
  setWalletSignerEthers: () => { },
  walletSigner: null,
  setWalletSigner: () => { },

  /// WALLET PROVIDERS
  walletProviderEthers: null,
  setWalletProviderEthers: () => { },
  walletProvider: null,
  setWalletProvider: () => { },

  /// ETHERS REQUEST IN PROGRESS
  smartContractProcessing: false,
  setSmartContractProcessing: () => { },

  /// SEND ETHER FUNCTION
  sendEthAmountToAddress: () => { },

  // BEGIN ETHERS FX

  // ERC721FactorySmartContract
  erc721FactorySmartContract: new ERC721FactoryClass({id: 1, name: 'Mainnet'}, `0x0`),

  // ERC1155FactorySmartContract
  erc1155FactorySmartContract: new ERC1155FactoryClass({ id: 1, name: 'Mainnet' }, `0x0`),

  // ERCMKTPFactorySmartContract
  ercMKTPFactorySmartContract: new ERCMKTPFactoryClass({ id: 1, name: 'Mainnet' }, `0x0`),

  // ERCDAOFactorySmartContract
  ercDAOFactorySmartContract: new ERCDAOFactoryClass({ id: 1, name: 'Mainnet' }, `0x0`),

  // ERCDEFIFactorySmartContract
  ercDEFIFactorySmartContract: new ERCDEFIFactoryClass({ id: 1, name: 'Mainnet' }, `0x0`),

});

export const useWeb3DataContext = () => useContext(Web3DataContext);

export const Web3DataContextProvider = ({ children }: any) => {

  const { chain } = useNetwork();

  const { address } = useAccount();

  /// WALLET ACCOUNT

  const [walletAccount, setWalletAccount] = useState<`0x${string}`>(address as `0x${string}`);

  /// WALLET SIGNER

  const [walletSigner, setWalletSigner] = useState<any | undefined>(undefined);

  const [walletSignerEthers, setWalletSignerEthers] = useState<any | undefined>(undefined);

  /// WALLET PROVIDER

  const [walletProvider, setWalletProvider] = useState<any | undefined>(undefined);

  const [walletProviderEthers, setWalletProviderEthers] = useState<any | undefined>(undefined);

  /// CURRENT CHAIN

  const [currentChain, setCurrentChain] = useState<any | undefined>(chain);

  /// ETHERS REQUEST IN PROGRESS

  const [smartContractProcessing, setSmartContractProcessing] =
    useState<boolean>(false);

  /// SEND ETHER FUNCTION

  const sendEthAmountToAddress: any = async (
    amount: number,
    toAddress: string
  ): Promise<any> => {
    await switchChainID(currentChain);

    const config = await prepareSendTransaction({
      to: toAddress,
      value: parseEther(`${amount}`),
      chainId: currentChain,
      // gasPrice: parseGwei('20'),
      // maxFeePerGas: parseGwei('20'),
      // maxPriorityFeePerGas: parseGwei('20'),
    });

    const { hash } = await sendTransaction(config);

    return hash;
  };

  const switchChainID: any = async (chainId: number): Promise<any> => {
    const network = await switchNetwork({
      chainId: chainId,
    });
    console.log("SWITCHED NETWORK::", chainId, network);
  };

  const erc721FactorySmartContract = new ERC721FactoryClass(chain, walletAccount);

  const erc1155FactorySmartContract = new ERC1155FactoryClass(chain, walletAccount);

  const ercMKTPFactorySmartContract = new ERCMKTPFactoryClass(chain, walletAccount);

  const ercDAOFactorySmartContract = new ERCDAOFactoryClass(chain, walletAccount);

  const ercDEFIFactorySmartContract = new ERCDEFIFactoryClass(chain, walletAccount);

  const updateCurrentSmartContract: any = async (): Promise<any> => {

    erc721FactorySmartContract.updateCurrentClient(currentChain, address as `0x${string}`);
    erc1155FactorySmartContract.updateCurrentClient(currentChain, address as `0x${string}`);
    ercMKTPFactorySmartContract.updateCurrentClient(currentChain, address as `0x${string}`);
    ercDAOFactorySmartContract.updateCurrentClient(currentChain, address as `0x${string}`);
    ercDEFIFactorySmartContract.updateCurrentClient(currentChain, address as `0x${string}`);

  };

  useEffect(() => {

    if (currentChain && currentChain !== null && typeof currentChain !== 'undefined') {

      console.log("CURRENT CHAIN UPDATED::", chain, currentChain);

      setWalletSigner(getEthersSigner(currentChain.id));

      setWalletProvider(getEthersProvider(currentChain.id));

      setWalletSignerEthers(getEthersSigner(currentChain.id));

      setWalletProviderEthers(getEthersProvider(currentChain.id));

      updateCurrentSmartContract();

    }

    return () => {
      setWalletProvider(undefined);
      setWalletSigner(undefined);
      setWalletProviderEthers(undefined);
      setWalletSignerEthers(undefined);
    };

  }, [currentChain]);

  useEffect(() => {
    setWalletAccount(address as `0x${string}`);
    updateCurrentSmartContract();
    return () => {
      setWalletAccount("0x0");
    }
  }, [address]);

  useEffect(() => {
    setCurrentChain(chain);
    return () => {
      setCurrentChain({ id: 1, name: "Ethereum Mainnet" });
    };
  }, [chain]);

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER

  return (
    <Web3DataContext.Provider
      value={{
        /// WALLET ACCOUNT
        walletAccount,
        setWalletAccount,

        /// WALLET SIGNER
        walletSignerEthers,
        setWalletSignerEthers,
        walletSigner,
        setWalletSigner,

        /// WALLET PROVIDER
        walletProviderEthers,
        setWalletProviderEthers,
        walletProvider,
        setWalletProvider,

        /// ETHERS REQUEST IN PROGRESS
        smartContractProcessing,
        setSmartContractProcessing,

        /// SEND ETHER FUNCTION
        sendEthAmountToAddress,

        // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JSADAPTER

        // ERC721FactorySmartContract
        erc721FactorySmartContract,

        // ERC1155FactorySmartContract
        erc1155FactorySmartContract,

        // ERCMKTPFactorySmartContract
        ercMKTPFactorySmartContract,

        // ERCDAOFactorySmartContract
        ercDAOFactorySmartContract,

        // ERCDEFIFactorySmartContract
        ercDEFIFactorySmartContract

        //
      }}
    >
      {children}
    </Web3DataContext.Provider>
  );
};
