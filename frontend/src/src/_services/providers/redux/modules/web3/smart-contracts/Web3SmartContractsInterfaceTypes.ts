export interface IWeb3SmartContractState {
    smartContractLoading: boolean;
    smartContractConnected: boolean;
    smartContractAddress: string | null;
    smartContractBalance: number | null;
    smartContractErrors: string | null;
    networkName?: string | null;
    networkId?: number | null;
    chainId?: number | null;
}
