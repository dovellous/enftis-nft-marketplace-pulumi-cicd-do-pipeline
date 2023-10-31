export interface IWeb3WalletState {
    walletLoading: boolean;
    walletConnected: boolean;
    walletAddress: string | null;
    walletBalance: number | null;
    walletErrors: string | null;
    networkName?: string | null;
    networkId?: number | null;
    chainId?: number | null;
}
