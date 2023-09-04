
export interface IWalletAddress {
    address: string | null;
    publicKey: string | null;
}

export interface IActivity {
    from: string;
    to: string;
    amount: number;
    activityType: string;
    timestamp: Date;
}

export interface INFTActivityHistoryArray {
    [index: number]: IActivity;
}

export interface IBid {
    bidder: string;
    amount: string;
    timestamp: Date;
}

export interface INFTBiddingHistoryArray {
    [index: number]: IBid;
}

export interface INFTMetadata {
    title: string;
    description: string;
    image: string;
    activityHistory?: INFTActivityHistoryArray,
    biddingHistory?: INFTBiddingHistoryArray,
}

export enum INFTInterface{
    ERC20 = "ERC20",
    ERC721 = "ERC721",
    ERC1155 = "ERC1155",
}

export interface ICartItem {
    title: string;
    description: string;
    address: string;
    price: number;
    interface?: INFTInterface,
    interfaceId?: string | null;
    networkId?: number;
    chainId?: number;
    metadata?: INFTMetadata | null
}

export interface ICartArray {
    [index: number]: ICartItem;
}

export enum ICurrency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
    AUD = "AUD",
    CAD = "CAD",
    YEN = "YEN",
    RUB = "RUB",
    ZAR = "ZAR",
}

export interface ICartState {
    cartLoading: boolean;
    items: ICartArray;
    ethTotalAmount: number;
    destinationWalletAddress: IWalletAddress | string | null;
    cartCurrency: ICurrency;
    cartErrors: string | any | null;
}
