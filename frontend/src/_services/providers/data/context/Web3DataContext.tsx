/* eslint-disable react-hooks/exhaustive-deps */
import { ethers } from "ethers";
import { createContext, useContext, useEffect, useState } from "react";

//

import { parseEther } from "viem";
import { switchNetwork } from "@wagmi/core";
import { sendTransaction, prepareSendTransaction } from "@wagmi/core";

//

import {
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
  type WalletClient,
} from "wagmi";
import { readContract } from "@wagmi/core";

import { type HttpTransport } from "viem";
import { type PublicClient, getPublicClient } from "@wagmi/core";
import {
  BrowserProvider,
  FallbackProvider,
  JsonRpcProvider,
  JsonRpcSigner,
} from "ethers";
import { getWalletClient } from "@wagmi/core";
import { getNetwork } from '@wagmi/core'
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
  walletAccount: `0x${string}` | undefined,
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

  /// SMART CONTRACTS
  currentSmartContract: any;
  setCurrentSmartContract: (v: any) => void;

  /// ETHERS REQUEST IN PROGRESS
  ethersRequestInProgress: boolean;
  setEthersRequestInProgress: (v: boolean) => void;

  /// SEND ETHER FUNCTION
  sendEthAmountToAddress: (a: number, t: string) => any;

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER
  Web3FX: any;
  setWeb3FX: (v: any) => any;
}

export const Web3DataContext = createContext<Web3ContentTypeInterface>({
  /// WALLET ACCOUNT
  walletAccount: undefined,
  setWalletAccount: () => {},
  /// WALLET SIGNERS
  walletSignerEthers: null,
  setWalletSignerEthers: () => {},
  walletSigner: null,
  setWalletSigner: () => {},

  /// WALLET PROVIDERS
  walletProviderEthers: null,
  setWalletProviderEthers: () => {},
  walletProvider: null,
  setWalletProvider: () => {},

  /// SMART CONTRACTS
  currentSmartContract: null,
  setCurrentSmartContract: () => {},

  /// ETHERS REQUEST IN PROGRESS
  ethersRequestInProgress: false,
  setEthersRequestInProgress: () => {},

  /// SEND ETHER FUNCTION
  sendEthAmountToAddress: () => {},

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER
  Web3FX: null,
  setWeb3FX: () => {},

  // BEGIN ETHERS FX



  // END ETHERS FX

});

export const useWeb3DataContext = () => useContext(Web3DataContext);

export const Web3DataContextProvider = ({ children }: any) => {

  const { chain } = useNetwork();

  const { address } = useAccount();

  /// WALLET ACCOUNT

  const [walletAccount, setWalletAccount] = useState<`0x${string}` | undefined>( address );

  /// WALLET SIGNER

  const [walletSigner, setWalletSigner] = useState<any | undefined>(undefined);

  const [walletSignerEthers, setWalletSignerEthers] = useState<any | undefined>( undefined );

  /// WALLET PROVIDER

  const [walletProvider, setWalletProvider] = useState<any | undefined>( undefined );

  const [walletProviderEthers, setWalletProviderEthers] = useState< any | undefined >(undefined);

  /// CURRENT CHAIN

  const [currentChain, setCurrentChain] = useState<any | undefined>({id: 1, name: "Ethereum Mainnet"});

  /// SMART CONTRACTS

  const [currentSmartContract, setCurrentSmartContract] = useState< any | undefined >(undefined);

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

  const [erc721_config, set_erc721_config] = useState<any>({
    address: `0x0`,
    abi: {}
  })

  const [erc1155_config, set_erc1155_config] = useState<any>({
    address: `0x0`,
    abi: {}
  })

  const [ercMKTP_config, set_ercMKTP_config] = useState<any>({
    address: `0x0`,
    abi: {}
  })

  ///// xxx

  

    
    /// baseURI
    
    // instantiate empty variables for the method: baseURI
    const [erc1155_baseURI_args, set_erc1155_baseURI_args] = useState<Array<any> | undefined>(undefined);
    
    // Function to invoke when 'baseURI' is successful.
    const [erc1155_baseURI_success_cb, set_erc1155_baseURI_success_cb] = useState<Function | any >(()=>{});
    
    // Function to invoke when an error is thrown while attempting to execute 'baseURI' .
    const [erc1155_baseURI_errors_cb, set_erc1155_baseURI_errors_cb] = useState<Function>(()=>{});
    
    // Function to invoke when 'baseURI' is settled (either successfully sent, or an error has thrown).
    const [erc1155_baseURI_settled_cb, set_erc1155_baseURI_settled_cb] = useState<Function>(()=>{});
    
    // Prepare the write function for the 'baseURI' method
    const { config: erc1155_baseURI_config } = usePrepareContractWrite({
        ...erc1155_config,
        functionName: 'baseURI',
        args: erc1155_baseURI_args as Array<any> | undefined,
        chainId: currentChain?.id,
        account: walletAccount,
        enabled: false,
        onSuccess(data:any) {
          typeof erc1155_baseURI_success_cb === 'function' && erc1155_baseURI_success_cb(data);
        },
        onError(error:any) {
          typeof erc1155_baseURI_errors_cb === 'function' && erc1155_baseURI_errors_cb(error);
        },
        onSettled(data:any, error:any) {
          typeof erc1155_baseURI_settled_cb === 'function' && erc1155_baseURI_settled_cb(data, error);
        },
        onMutate({ args, overrides }:any) {
          console.log('Mutate', { args, overrides })
        },
    });
    
    // Override destructred vars
    const { 
        data: erc1155_baseURI_data , 
        write: erc1155_baseURI_write 
    } = useContractWrite(
        erc1155_baseURI_config
    );
 
    // Wait for 'baseURI' to finish executing
    const { 
        isLoading: erc1155_baseURI_is_waiting, 
        isSuccess: erc1155_baseURI_is_success, 
        isError: erc1155_baseURI_is_error 
    } = useWaitForTransaction({
        hash: erc1155_baseURI_data?.hash,
     });
    
    
    // Set the variables for 'baseURI' which are: []
    // This will call the write function for 'baseURI'
    const erc1155_baseURI_exe:any = (...args:any) => {
         
        set_erc1155_baseURI_args(args);
         
    }
    
    // Listen for argument changes then call the function
    useEffect(() => {
        
        erc1155_baseURI_write?.();
        
    }, [erc1155_baseURI_args]);
    
    /// end baseURI
    
    

    
    /// setBaseURI
    
    // instantiate empty variables for the method: setBaseURI
    const [erc1155_setBaseURI_args, set_erc1155_setBaseURI_args] = useState<Array<any> | undefined>(undefined);
    
    // Function to invoke when 'setBaseURI' is successful.
    const [erc1155_setBaseURI_success_cb, set_erc1155_setBaseURI_success_cb] = useState<Function | any >(()=>{});
    
    // Function to invoke when an error is thrown while attempting to execute 'setBaseURI' .
    const [erc1155_setBaseURI_errors_cb, set_erc1155_setBaseURI_errors_cb] = useState<Function>(()=>{});
    
    // Function to invoke when 'setBaseURI' is settled (either successfully sent, or an error has thrown).
    const [erc1155_setBaseURI_settled_cb, set_erc1155_setBaseURI_settled_cb] = useState<Function>(()=>{});
    
    // Prepare the write function for the 'setBaseURI' method
    const { config: erc1155_setBaseURI_config } = usePrepareContractWrite({
        ...erc1155_config,
        functionName: 'setBaseURI',
        args: erc1155_setBaseURI_args as Array<any> | undefined,
        chainId: currentChain?.id,
        account: walletAccount,
        enabled: false,
        onSuccess(data:any) {
          typeof erc1155_setBaseURI_success_cb === 'function' && erc1155_setBaseURI_success_cb(data);
        },
        onError(error:any) {
          typeof erc1155_setBaseURI_errors_cb === 'function' && erc1155_setBaseURI_errors_cb(error);
        },
        onSettled(data:any, error:any) {
          typeof erc1155_setBaseURI_settled_cb === 'function' && erc1155_setBaseURI_settled_cb(data, error);
        },
        onMutate({ args, overrides }:any) {
          console.log('Mutate', { args, overrides })
        },
    });
    
    // Override destructred vars
    const { 
        data: erc1155_setBaseURI_data , 
        write: erc1155_setBaseURI_write 
    } = useContractWrite(
        erc1155_setBaseURI_config
    );
 
    // Wait for 'setBaseURI' to finish executing
    const { 
        isLoading: erc1155_setBaseURI_is_waiting, 
        isSuccess: erc1155_setBaseURI_is_success, 
        isError: erc1155_setBaseURI_is_error 
    } = useWaitForTransaction({
        hash: erc1155_setBaseURI_data?.hash,
     });
    
    
    // Set the variables for 'setBaseURI' which are: [newURI]
    // This will call the write function for 'setBaseURI'
    const erc1155_setBaseURI_exe:any = (...args:any) => {
         
        set_erc1155_setBaseURI_args(args);
         
    }
    
    // Listen for argument changes then call the function
    useEffect(() => {
        
        erc1155_setBaseURI_write?.();
        
    }, [erc1155_setBaseURI_args]);
    
    /// end setBaseURI
    
    



  ///// end xxx

  const switchChainID: any = async (chainId: number): Promise<any> => {
    const network = await switchNetwork({
      chainId: chainId,
    });
    console.log("SWITCHED NETWORK::", chainId, network);
  };

  const updateCurrentSmartContract: any = async (): Promise<any> => {
    //
    const chainId: number = currentChain?.id;

    if(typeof chainId !== "undefined"){

      const smartContractPath:string = `_services/providers/data/context/libs/artifacts/${chainId}`;
      
      // Import smart contracts ABIs from the artifacts
      const erc721:any = await import(`${smartContractPath}/contracts/ERC721Factory.sol/ERC721Factory.json`);
      const erc1155:any = await import(`${smartContractPath}/contracts/ERC1155Factory.sol/ERC1155Factory.json`);
      const ercMKTP:any = await import(`${smartContractPath}/contracts/ERCMKTPFactory.sol/ERCMKTPFactory.json`);

      // Import smart contracts Addresses from the artifacts
      const erc721Address:any = await import(`${smartContractPath}/addresses/ERC721FactoryAddress.json`);
      const erc1155Address:any = await import(`${smartContractPath}/addresses/ERC1155FactoryAddress.json`);
      const ercMKTPAddress:any = await import(`${smartContractPath}/addresses/ERCMKTPFactoryAddress.json`);

      setCurrentSmartContract(
        {
          abis: {
            erc721, 
            erc1155, 
            ercMKTP
          },
          addresses: {
            erc721Address, 
            erc1155Address, 
            ercMKTPAddress
          }
        }
      );

    }

      return () => {

        setCurrentSmartContract(
          {
            abis: {
              erc721: null, 
              erc1155: null, 
              ercMKTP: null, 
            },
            addresses: {
              erc721Address: null, 
              erc1155Address: null, 
              ercMKTPAddress: null, 
            }
          }
        );

      }

  };

  useEffect(()=>{

    if(typeof currentSmartContract !== "undefined"){

      // Rebuild ERC721 configurations
      set_erc721_config(
        {
          abis: currentSmartContract.abis.erc721,
          address: currentSmartContract.addresses.erc721Address,
        }
      )

      // Rebuild ERC1155 configurations
      set_erc1155_config(
        {
          abis: currentSmartContract.abis.erc1155,
          address: currentSmartContract.addresses.erc1155Address,
        }
      )

      // Rebuild ERCMKTP configurations
      set_ercMKTP_config(
        {
          abis: currentSmartContract.abis.ercMKTP,
          address: currentSmartContract.addresses.ercMKTPAddress,
        }
      )

    }

    return () => {

      const emptyConfig:any = {address: "0x0", abis: {}};

      set_erc721_config(emptyConfig);
      set_erc1155_config(emptyConfig);
      set_ercMKTP_config(emptyConfig);

    }

  }, [currentSmartContract]);

  useEffect(()=>{
    setWalletAccount(address);
    return () => {
      setWalletAccount("0x0");
    }
  },[address]);

  useEffect(() => {

    if (currentChain && currentChain !== null && typeof currentChain !== 'undefined') {

      console.log("CURRENT CHAIN CHANGED::", chain, currentChain);

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
        setCurrentSmartContract(undefined);
      };

  }, [currentChain]);

  useEffect(() => {
    setCurrentChain(chain);
    return () => {
      setCurrentChain({id:1, name: "Ethereum Mainnet"});
    };
  }, [chain]);

  // BLOCK CHAIN METHODS FOR NATIVE & ETHERS.JS ADAPTER

  const [Web3FX, setWeb3FX] = useState({});

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

        /// SMART CONTRACTS

        currentSmartContract,
        setCurrentSmartContract,

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
