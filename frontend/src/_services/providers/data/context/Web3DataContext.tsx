/* eslint-disable react-hooks/exhaustive-deps */
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

import { parseEther, parseGwei } from 'viem';

import { switchNetwork } from '@wagmi/core';

import { sendTransaction, prepareSendTransaction } from '@wagmi/core';

const { ethereum } = window;

export interface Web3ContentTypeInterface {
  walletSigner: any;
  setWalletSigner: (v: any) => void;
  sendEthAmountToAddress: (a: number, t: string) => any;
}

export const Web3DataContext = createContext<Web3ContentTypeInterface>({
  walletSigner: null,
  setWalletSigner: () => { },
  sendEthAmountToAddress: () => {}
});

export const useWeb3DataContext = () => useContext(Web3DataContext);

export const Web3DataContextProvider = ({ children }: any) => {

  const [walletProvider, setWalletProvider] = useState<any | undefined>(undefined);

  const [walletSigner, setWalletSigner] = useState<any | undefined>(undefined);

  const [smartContracts, setSmartContracts] = useState<any | undefined>(undefined);

  const [currentChain, setCurrentChain] = useState<any | undefined>(undefined);

  const [currentSmartContract, setCurrentSmartContract] = useState<any | undefined>(undefined);

  const [sendingTransaction, setSendingTransaction] = useState<boolean>(false);

  // const createEthereumContract = () => {
    
  //   const provider = new ethers.providers.Web3Provider(ethereum);

  //   setWalletProvider(provider);

  //   const signer = provider.getSigner();

  //   setWalletSigner(signer);

  //   const smartContractInCurrentChain: any | undefined = smartContracts[currentChain?.id];

  //   const contractAddress: string = smartContractInCurrentChain?.address;

  //   const contractABI: any = smartContractInCurrentChain?.abi;

  //   const contract = new ethers.Contract(contractAddress, contractABI, signer);

  //   setCurrentSmartContract(contract);

  //   return contract;

  // };

  const sendEthAmountToAddress: any = async(amount: number, toAddress: string): Promise<any> => {
    
    await switchChainID(1);
    
    const config = await prepareSendTransaction({
      to: toAddress,
      value: parseEther(`${amount}`),
      chainId: 1,
      // gasPrice: parseGwei('20'),
      // maxFeePerGas: parseGwei('20'),
      // maxPriorityFeePerGas: parseGwei('20'),
    })

    const { hash } = await sendTransaction(config);

    return hash;

  }

  const switchChainID: any = async(chainId: number) : Promise<any> => {

    const network = await switchNetwork({
      chainId: chainId,
    })

    console.log("SWITCHED NETWORK::", chainId, network)

  }

  useEffect(() => {

    //createEthereumContract();

    return () => {

      setWalletProvider(undefined);
      setWalletSigner(undefined);
      setCurrentSmartContract(undefined);
      
    }
    
  }, [currentChain])

  return (
    <Web3DataContext.Provider
      value={{
        walletSigner,
        setWalletSigner,
        sendEthAmountToAddress
      }}
    >
      {children}
    </Web3DataContext.Provider>
  );
};
