
export type DrawerSize = "default" | "large";
export type DrawerPlacement = "right" | "left" | "top" | "bottom";

export interface DrawerIProps {
    title: string;
    placement: DrawerPlacement;
    size: DrawerSize;
    openStateChange: (isOpen: boolean, props: any) => void;
}