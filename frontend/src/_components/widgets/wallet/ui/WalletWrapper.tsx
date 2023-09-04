import { Space } from "antd";
import { WalletCardWrapper, WalletConnectorWrapper } from ".";

interface WalletCardWrapperProps {
    children?: React.ReactNode;
}

export const WalletWrapper: React.FC<WalletCardWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const { } = props;

    return (
        <>
            <Space direction="vertical" size={5}>
                <WalletCardWrapper />
                <WalletConnectorWrapper />
            </Space>
        </>

    );
};
