import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import AlertSimple from "./AlertSimple";

type AlertProps = {
    children: React.ReactNode;
    title: string;
    titleClassName?: string;
    message: string;
}
 
export const AlertSuccess:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    const {title, titleClassName, message}: any = props;
    
    return (

        <>
        
        <AlertSimple 
            title={title} 
            message={message} 
            titleClassName={titleClassName || 'font-medium'} 
            color="success"
            icon={HiInformationCircle} />
        
        </>

    )

}
 
export default AlertSuccess;