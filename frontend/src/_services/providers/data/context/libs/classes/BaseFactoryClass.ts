import {
  BaseError,
  ContractFunctionRevertedError,
  createPublicClient,
  createWalletClient,
  formatEther,
  getAddress,
  hashMessage,
  http,
  isAddress,
  parseEther,
  recoverAddress,
  recoverMessageAddress,
  verifyMessage,
} from "viem";

import { prepareWriteContract, writeContract } from "@wagmi/core";

class BaseFactoryClass {
  private currentABI: any;
  private currentAddress: `0x${string}` = "0x0";
  private currentChain: any;
  private publicClient: any;
  private walletClient: any;
  private contractName: string = "";
  private walletAddress: `0x${string}` = "0x0";
  private isInitialized: boolean = false;

  constructor(chain: any, walletAddress: `0x${string}`, contractName: string) {
    this.currentChain = chain;
    this.walletAddress = walletAddress;
    this.contractName = contractName;
  }

  toString(): string {
    if (this.currentChain) {
      return `
                chainID=${this.currentChain.id}; 
                chainName=${this.currentChain.name}; 
                contractName=${this.contractName};
                contractAddress=${this.currentAddress};
                contractABI=${this.currentABI};`;
    }

    return "";
  }

  toStringify(): string {
    if (this.currentChain) {
      return JSON.stringify({
        chain: {
          id: this.currentChain.id,
          name: this.currentChain.name,
        },
        contract: {
          name: this.contractName,
          abi: this.currentABI,
          address: this.currentAddress,
        },
      });
    }

    return "";
  }

  toJSON(): any {
    if (this.currentChain) {
      return {
        chain: {
          id: this.currentChain.id,
          name: this.currentChain.name,
        },
        contract: {
          name: this.contractName,
          abi: this.currentABI,
          address: this.currentAddress,
        },
        publicClient: this.publicClient,
        walletClient: this.walletClient,
      };
    }

    return null;
  }

  getPublicClient(): void {
    return this.publicClient;
  }

  getWalletClient(): void {
    return this.walletClient;
  }

  async getWalletClientAccount(): Promise<`0x${string}`> {
    const [account] = await this.walletClient.getAddresses();

    return account;
   }

  async getBalance(
    address: `0x${string}`,
    formartted: boolean = false
  ): Promise<Array<any>> {
    const balance = await this.publicClient.getBalance({
      address: address,
    });

    return formartted ? formatEther(balance) : balance;
  }

  getCurrentChain(): any {
    return this.currentChain;
  }

  getCurrentWalletAddress(): any {
    return this.walletAddress;
  }

  isReady(): any {
    return (
      this.isInitialized &&
      this.currentAddress !== "0x0" &&
      this.walletAddress !== "0x0"
    );
  }

  async updateClient(
    abiJSON: any,
    addressJSON: any,
    chain: any,
    walletAddress: `0x${string}`
  ): Promise<any> {
    this.updateContracts(abiJSON, addressJSON);

    if (walletAddress !== `0x0`) {
      //console.log('UPDATING CLIENT::', chain, walletAddress)

      this.currentChain = chain;

      this.walletAddress = walletAddress;

      this.publicClient = createPublicClient({
        chain: chain,
        transport: http(),
      });

      // const alchemy = http('https://eth-mainnet.g.alchemy.com/v2/...')
      // const infura = http('https://mainnet.infura.io/v3/...')
      // transport: fallback([alchemy, infura]),

      const [account] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      this.walletClient = createWalletClient({
        account,
        chain: chain,
        transport: http(),
      });

      //await this.walletClient.switchChain({ id: chain.id });

      this.isInitialized = true;
    }
  }

  updateContracts(abiJSON: any, addressJSON: any): void {
    if (abiJSON && addressJSON) {
      try {
        if (abiJSON) {
          this.currentABI = abiJSON.abi;
        }

        if (addressJSON) {
          this.currentAddress = addressJSON.address as `0x${string}`;
        }

        //console.log('SUCCESS SETTING ARTIFACTS', this.currentAddress)
      } catch (err: any) {
        console.warn("ERROR SETTING ARTIFACTS", err);
      }

      // Todo:- Remove eventWatchers if any
    } else {
      console.error("INVALID ARTIFACTS", abiJSON, addressJSON);
    }
  }

  getContractABI(): any {
    return this.currentABI;
  }

  getContractAddress(): any {
    return this.currentAddress;
  }

  getChecksumAddress(address: `0x${string}`): `0x${string}` {
    if (isAddress(address)) {
      return getAddress(address);
    }

    return address;
  }

  isAddress(address: any): boolean {
    return isAddress(address);
  }

  hashMessage(message: string): any {
    hashMessage(message);
  }

  async sendTransaction(
    to: `0x${string}`,
    amount: number
  ): Promise<`0x${string}`> {
    const [account] = await this.walletClient.getAddresses();

    const hash: `0x${string}` = await this.walletClient.sendTransaction({
      account,
      to: to,
      value: parseEther(String(amount)),
    });

    return hash;
  }

  async signMessage(message: string): Promise<string> {
    const [account] = await this.walletClient.getAddresses();

    const signature = await this.walletClient.signMessage({
      account: account,
      message: message,
    });

    return signature;
  }

  async verifyMessage(
    message: string,
    signature: `0x${string}` | Uint8Array
  ): Promise<boolean> {
    const isValid: boolean = await verifyMessage({
      address: this.walletAddress,
      message: message,
      signature: signature,
    });

    return isValid;
  }

  async recoverMessageAddress(
    message: string,
    signature: `0x${string}` | Uint8Array
  ): Promise<`0x${string}`> {
    const address: `0x${string}` = await recoverMessageAddress({
      message: message,
      signature: signature,
    });

    return address;
  }

  async recoverHashAddress(
    hash: `0x${string}`,
    signature: `0x${string}` | Uint8Array
  ): Promise<`0x${string}`> {
    const address = await recoverAddress({
      hash: hash,
      signature: signature,
    });

    return address;
  }

  watchEvent(
    eventName: string,
    callbackSuccess: Function,
    callbackError: Function
  ): any {
    this.publicClient.watchContractEvent({
      address: this.currentAddress,
      abi: this.currentABI,
      eventName: eventName,
      onLogs: (logs: any) => {
        typeof callbackSuccess === "function" && callbackSuccess(logs);
      },
      onError: (error: any) => {
        typeof callbackError === "function" && callbackError(error);
      },
    });
  }

  async readContract(
    functionName: string,
    args: Array<any>,
    successCallback: Function,
    errorCallback: Function,
    finalCallback: Function
  ): Promise<any> {
    if (this.publicClient && functionName) {
      try {
        console.log("READ_CONTRACT :: 1", functionName, args);

        const result = await this.publicClient.readContract({
          address: this.currentAddress,
          abi: this.currentABI,
          functionName: functionName,
          args: args,
        });

        console.log("READ_CONTRACT :: 2", result);

        typeof successCallback === "function" && successCallback(result);
      } catch (error: any) {
        typeof errorCallback === "function" && errorCallback(error);
      }

      typeof finalCallback === "function" && finalCallback();
    }
  }

  async writeContract(
    functionName: string,
    args: Array<any>,
    successCallback: Function,
    errorCallback: Function,
    finalCallback: Function
  ): Promise<any> {
    if (this.publicClient && this.walletClient && functionName) {
      console.log("WRITE_CONTRACT::", functionName, args);

      const contractArgs: any = {
        address: this.currentAddress,
        abi: this.currentABI,
        functionName: functionName,
        args: args,
      };

      try {
        const { request } = await prepareWriteContract(contractArgs);
        const { hash } = await writeContract(request);

        typeof successCallback === "function" && successCallback(hash);
      } catch (err: any) {
        typeof errorCallback === "function" && errorCallback(err);
      }

      typeof finalCallback === "function" && finalCallback();
    }
  }

  async writeContractViem(
    functionName: string,
    args: Array<any>,
    successCallback: Function,
    errorCallback: Function,
    finalCallback: Function
  ): Promise<any> {
    if (this.publicClient && this.walletClient && functionName) {
      console.log("WRITE_CONTRACT::", functionName, args);

      const contractArgs: any = {
        address: this.currentAddress,
        abi: this.currentABI,
        functionName: functionName,
        args: args,
      };

      //const gas = await this.walletClient.estimateContractGas(contractArgs);

      //console.log('CONTRACT WRITE GAS', gas);

      //

      try {
        //const { request } = await this.walletClient.simulateContract(contractArgs)

        const hash = await this.walletClient.writeContract(contractArgs);

        typeof successCallback === "function" && successCallback(hash);
      } catch (err: any) {
        if (err instanceof BaseError) {
          console.log("CONTRACT WRITE ERROR 1", err);
          const revertError = err.walk(
            (err) => err instanceof ContractFunctionRevertedError
          );
          if (revertError instanceof ContractFunctionRevertedError) {
            const errorName = revertError.data?.errorName ?? "";
            console.log("CONTRACT WRITE ERROR 2", errorName, revertError.data);
            return typeof errorCallback === "function" && errorCallback(err);
          }
        }

        typeof errorCallback === "function" && errorCallback(err);
      }

      typeof finalCallback === "function" && finalCallback();
    }
  }
}

export { BaseFactoryClass };
