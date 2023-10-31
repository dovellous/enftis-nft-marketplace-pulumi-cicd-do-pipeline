import { IFirebaseUser } from "_services/firebase/converters/User";

export interface IAuthLogin {
    email: string;
    password: string;
    remember?: boolean;
}

export interface IAuthRegister extends IAuthLogin {
    firstName: string;
    lastName: string;
    phoneNumber?: boolean;
}

export interface IAuthState {
    authLoading: boolean;
    loggedIn: boolean;
    user: any | null;
    errors: any | null;
}

export interface IPerson {
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
}

export interface IWallet {
    walletSHA512: string;
}

export interface IWalletArray {
    [index: number]: IWallet;
}

export interface IUserWallets {
    wallets: IWalletArray
}

export enum IUserRole {
    SUBSCRIBER = "SUBSCRIBER",
    EDITOR = "EDITOR",
    MODERATOR = "MODERATOR",
    TENANT = "TENANT",
    ADMIN = "ADMIN",
    WATCHER = "WATCHER",
}

export interface IAppUser extends IPerson, IFirebaseUser {
    id: string;
    uuid: string;
    createdAt: Date;
    updatedAt: Date;
    userRole: IUserRole;
}

enum IAdminRole {
    ROOT = "ROOT",
    SUPER = "SUPER",
    ADMIN = "ADMIN",
    TENANT_ADMIN = "TENANT_ADMIN"
}

export interface IAdminUser extends IAppUser {
    adminRole: IAdminRole;
}
