/* eslint-disable react-hooks/exhaustive-deps */
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

//

import { parseEther } from "viem";
import { switchNetwork } from "@wagmi/core";
import { sendTransaction, prepareSendTransaction } from "@wagmi/core";

//

import { useAccount, useContractRead, useNetwork, type WalletClient } from "wagmi";
import { readContract } from '@wagmi/core'

import { type HttpTransport } from "viem";
import { type PublicClient, getPublicClient } from "@wagmi/core";
import {
  BrowserProvider,
  FallbackProvider,
  JsonRpcProvider,
  JsonRpcSigner,
} from "ethers";
import { getWalletClient } from "@wagmi/core";

//

export function walletClientToSigner(walletClient: WalletClient) {
  const { account, chain, transport } = walletClient;
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  };
  const provider = new BrowserProvider(transport, network);
  const signer = new JsonRpcSigner(provider, account.address);
  return signer;
}

/** Action to convert a viem Wallet Client to an ethers.js Signer. */
export async function getEthersSigner({ chainId }: { chainId?: number } = {}) {
  const walletClient = await getWalletClient({ chainId });
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

// const ethersProvider: any = getEthersProvider();

// const ethersSigner = getEthersSigner();

// export { ethersProvider, ethersSigner };

//

export interface Web3ContentTypeInterface {
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

  /// SMART CONTRACTS
  smartContracts: any;
  setSmartContracts: (v: any) => void;
  currentSmartContract: any;
  setCurrentSmartContract: (v: any) => void;
  currentSmartContractAddress: any;
  setCurrentSmartContractAddress: (v: any) => void;
  currentSmartContractABI: any;
  setCurrentSmartContractABI: (v: any) => void;

  /// ETHERS REQUEST IN PROGRESS
  ethersRequestInProgress: boolean;
  setEthersRequestInProgress: (v: boolean) => void;

  /// SEND ETHER FUNCTION
  sendEthAmountToAddress: (a: number, t: string) => any;

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER
  Web3FX: any,
  setWeb3FX: (v: any) => any;
}

export const Web3DataContext = createContext<Web3ContentTypeInterface>({
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

  /// SMART CONTRACTS
  smartContracts: null,
  setSmartContracts: () => { },
  currentSmartContract: null,
  setCurrentSmartContract: () => { },
  currentSmartContractAddress: null,
  setCurrentSmartContractAddress: () => { },
  currentSmartContractABI: null,
  setCurrentSmartContractABI: () => { },

  /// ETHERS REQUEST IN PROGRESS
  ethersRequestInProgress: false,
  setEthersRequestInProgress: () => { },

  /// SEND ETHER FUNCTION
  sendEthAmountToAddress: () => { },

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER
  Web3FX: null,
  setWeb3FX: () => { },

});

export const useWeb3DataContext = () => useContext(Web3DataContext);

export const Web3DataContextProvider = ({ children }: any) => {

  const { chain } = useNetwork();

  const { walletAddress } = useAccount()

  /// WALLET SIGNER

  const [walletSigner, setWalletSigner] = useState<any | undefined>(undefined);

  const [walletSignerEthers, setWalletSignerEthers] = useState<any | undefined>(
    undefined
  );

  /// WALLET PROVIDER

  const [walletProvider, setWalletProvider] = useState<any | undefined>(
    undefined
  );

  const [walletProviderEthers, setWalletProviderEthers] = useState<
    any | undefined
  >(undefined);

  /// CURRENT CHAIN

  const [currentChain, setCurrentChain] = useState<any | undefined>(1);

  /// SMART CONTRACTS

  const [smartContracts, setSmartContracts] = useState<any | undefined>(
    undefined
  );

  const [currentSmartContract, setCurrentSmartContract] = useState<
    any | undefined
  >(undefined);

  const [currentSmartContractAddress, setCurrentSmartContractAddress] =
    useState< `0x${string}` | string | undefined>(undefined);

  const [currentSmartContractABI, setCurrentSmartContractABI] = useState<
    any | undefined
  >(undefined);

  /// ETHERS REQUEST IN PROGRESS

  const [ethersRequestInProgress, setEthersRequestInProgress] =
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

  const updateCurrentSmartContract: any = async (): Promise<any> => {
    //setCurrentSmartContract(chainId);

    const chainId: number = currentChain.id;

  };

  useEffect(() => {
    console.log("CURRENT CHAIN CHANGED::", chain, currentChain);

    setWalletSigner(getEthersSigner(currentChain.id));

    setWalletProvider(getEthersProvider(currentChain.id));

    setWalletSignerEthers(getEthersSigner(currentChain.id));

    setWalletProviderEthers(getEthersProvider(currentChain.id));

    updateCurrentSmartContract();

    return () => {
      setWalletProvider(undefined);
      setWalletSigner(undefined);
      setWalletProviderEthers(undefined);
      setWalletSignerEthers(undefined);
      setCurrentSmartContract(undefined);
    };
  }, [currentChain]);

  useEffect(() => {
    setCurrentChain(chain);

    return () => {
      setCurrentChain(undefined);
    };
  }, [chain]);

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER

  const [Web3FX, setWeb3FX] = useState({

    erc1155: {

      getBaseURI: async (callback:any) => {

        const data = await readContract({
          address: currentSmartContractAddress as `0x${string}`,
          abi: currentSmartContractABI,
          functionName: 'getBaseURI',
          walletAddress,
        })

        

        console.log(":: CONTRACT CALL :: getBaseURI ::", data);

      },

      setBaseURI: (newURI:string) => {

        //

      },

      setDefaultRoyalty: (receiver:string, feeNumerator:number) => {

        //

      },

      deleteDefaultRoyalty: () => {

        //

      },

      resetTokenRoyalty: (tokenId:number) => {

        //

      },

      setTokenRoyalty: (tokenId:number, receiver:string, feeNumerator:number) => {

        //

      },

      getTokenURI: () => {

        //

      },

      getMarketplaceAddress: () => {

        //

      },

      getTokenSupplies: (tokenId:number) => {

        //

      },

      getTokenMaximumSupply: () => {

        //

      },

      getTokenCurrentSupply: () => {

        //

      },

      getTokenMintingFee: () => {

        //

      },

      getTokensMintedByMe: () => {

        //

      },

      getTokensMintedByAddress: (address: string) => {

        //

      },

      getTokenMinter: (tokenId:number) => {

        //

      },

      getTokenMintee: (tokenId:number) => {

        //

      },

      getTokensCreatedByMe: () => {

        //

      },

      getTokensCreatedByAddress: (account: string) => {

        //

      },

      getTokenCreator: (tokenId:number) => {

        //

      },

      getTokensOwnedByMe: () => {

        //

      },

      getTokensOwnedByAddress: (account:string) => {

        //

      },

      getTokenOwner: (tokenId:number) => {

        //

      },

      getNFTItem: (tokenId:number) => {

        //

      },

      getNFTItems: () => {

        //

      },

      getTokenAuditTrail: (tokenId:number) => {

        //

      },

      searchTokenId: (tokenId:number) => {

        //

      },

      searchTokenURI: (query:string) => {

        //

      },

      searchTimestamp: (key:string, value:number) => {

        //

      },

      searchAddress: (key:string, value:number) => {

        //

      },

      transferToken: (from:string, to:string, tokenId:number, amount:number, data:any) => {

        //

      },

      grantAdminRole: (address:string) => {

        //

      },

      revokeAdminRole: (address:string) => {

        //

      },

      renounceAdminRole: (address:string) => {

        //

      },

      renounceContractOwnership: () => {

        //

      },

      grantMinterRole: (address:string) => {

        //

      },

      revokeMinterRole: (address:string) => {

        //

      },

      renounceMinterRole: (address:string) => {

        //

      },

      setTokenURI: (tokenId:number, tokenURI:string) => {

        //

      },

      setMarketplaceAddress: (address:string) => {

        //

      },

      setMintingFee: (fee:number) => {

        //

      },

      setLoggerAddress: (address:string) => {

        //

      },

      setNewOwner: (address:string) => {

        //

      },

      burn: (from:string, to:string, amount:number) => {

        //

      },

      burnBatch: (address:string, ids:Array<number>, values:Array<number>) => {

        //

      },

      tokenURIExists: (uri:string) => {

        //

      },

      mintSingle: (to:string, tokenId:number, amount:number, maximumSupply:number, tokenURI:string, data:any) => {

        //

      },

      mintBatch: (to:string, tokenIds:Array<number>, amounts:Array<number>, maximumSupplies:Array<number>, tokenURIs:Array<string>, data:any) => {

        //

      },

      pause: () => {

        //

      },

      unpause: () => {

        //

      },

      unpause: (address:string) => {

        //

      },

    }
    
  });

  return (
    <Web3DataContext.Provider
      value={{
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

        /// SMART CONTRACTS

        smartContracts,
        setSmartContracts,
        currentSmartContract,
        setCurrentSmartContract,
        currentSmartContractAddress,
        setCurrentSmartContractAddress,
        currentSmartContractABI,
        setCurrentSmartContractABI,

        /// ETHERS REQUEST IN PROGRESS
        ethersRequestInProgress,
        setEthersRequestInProgress,

        /// SEND ETHER FUNCTION
        sendEthAmountToAddress,

        // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JSADAPTER
        Web3FX,
        setWeb3FX,

        //
      }}
    >
      {children}
    </Web3DataContext.Provider>
  );
};
