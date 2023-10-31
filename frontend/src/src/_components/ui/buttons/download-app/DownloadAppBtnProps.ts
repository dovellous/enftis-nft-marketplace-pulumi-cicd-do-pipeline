
// Define a type using the `type` keyword
export type DownloadAppBtnType = "android" | "ios" | "huawei" | "windows";

// Define an interface for the component props
export interface DownloadAppBtnProps {
    fill: string;
    fillHover: string;
    type: DownloadAppBtnType;
    onClick?: () => void;
}