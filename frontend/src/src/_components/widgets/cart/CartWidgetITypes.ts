import { DrawerIProps } from "_types";

interface CartWidgetITypes {
    showLogo?: boolean;
    showTitle?: boolean;
    onCartConnected?: () => void;
    children?: React.ReactNode;
};


type CartDrawerT = {
    foo: boolean;
}

interface CartDrawerITypes extends DrawerIProps {
    template?: Array<CartDrawerT>;
    children?: React.ReactNode;
};


export type { CartWidgetITypes, CartDrawerT, CartDrawerITypes };