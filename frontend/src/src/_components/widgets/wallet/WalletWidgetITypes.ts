import { DrawerIProps } from "_types";

interface WalletWidgetITypes {
    showLogo?: boolean;
    showTitle?: boolean;
    onWalletConnected?: () => void;
    children?: React.ReactNode;
};


type WalletDrawerT = {
    foo: boolean;
}

interface WalletDrawerITypes extends DrawerIProps {
    template?: Array<WalletDrawerT>;
    children?: React.ReactNode;
};


export type { WalletWidgetITypes, WalletDrawerT, WalletDrawerITypes };