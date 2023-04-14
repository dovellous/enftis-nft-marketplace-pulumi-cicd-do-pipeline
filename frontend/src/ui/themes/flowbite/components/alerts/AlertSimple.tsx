import React from "react";

import { Alert } from "flowbite-react";

type AlertProps = {
    children?: React.ReactNode;
    title: string;
    titleClassName?: string;
    message: string;
    color?: string;
    rounded?: boolean;
    onDismiss?: () => void;
    withBorderAccent?: boolean;
    icon: any;
}
 
export const AlertSimple:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    const {title, titleClassName, message, color, rounded, onDismiss, withBorderAccent, icon}: any = props;
    
    return (

        <>
        
        <Alert 
            color={color}
            icon={icon}
            rounded={rounded}
            withBorderAccent={withBorderAccent}
            onDismiss={onDismiss}
        >
            <span>
                <span className={titleClassName || 'font-medium'}>
                {title}
                </span>
                {' '}{message}
            </span>
            {children}
        </Alert>
        
        </>

    )

}
 
export default AlertSimple;