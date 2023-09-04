import { DrawerIProps } from "_types";

interface LoginWidgetITypes {
    showLogo?: boolean;
    showTitle?: boolean;
    onLoggedIn?: () => void;
    children?: React.ReactNode;
};


type LoginDrawerT = {
    foo: boolean;
}

interface LoginDrawerITypes extends DrawerIProps {
    template?: Array<LoginDrawerT>;
    children?: React.ReactNode;
};


export type { LoginWidgetITypes, LoginDrawerT, LoginDrawerITypes };