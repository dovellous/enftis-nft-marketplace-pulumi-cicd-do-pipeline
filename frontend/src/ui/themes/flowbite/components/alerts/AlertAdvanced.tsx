import React from "react";

import { Alert } from "flowbite-react";

type AlertProps = {
    children: React.ReactNode;
    title: string;
    message: string;
    color: string;
    rounded: boolean;
    withBorderAccent: boolean;
    onDismiss: () => void;
    Icon: any;
    okLabel: string;
    okHandler: () => void;
    dismissLabel: string;
}
 
export const AlertAdvanced:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    const {title, message, color, rounded, withBorderAccent, onDismiss, Icon, okLabel, okHandler, dismissLabel}: any = props;

    const AdditionalContentHtml = (message: string) => {
        return (
            <React.Fragment>
                <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
                    {message}
                </div>
                <div className="flex">
                    <button type="button" className="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900" onClick={okHandler}>
                        <Icon />
                        {okLabel}
                    </button>
                    <button type="button" className="rounded-lg border border-blue-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-4 focus:ring-blue-300 dark:border-blue-800 dark:text-blue-800 dark:hover:text-white">
                        {dismissLabel || 'Cancel'}
                    </button>
                </div>
            </React.Fragment>
        )
    }
    
    return (

        <>
        
        <Alert 
            color={color}
            icon={Icon}
            rounded={rounded}
            withBorderAccent={withBorderAccent}
            onDismiss={onDismiss}
            additionalContent={AdditionalContentHtml(message)}
        >
            <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
                {title}
            </h3>
        </Alert>
        
        </>

    )

}
 
export default AlertAdvanced;