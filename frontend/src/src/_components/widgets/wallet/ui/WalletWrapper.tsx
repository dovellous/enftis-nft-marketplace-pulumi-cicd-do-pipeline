import { Space } from "antd";
import { WalletCardWrapper, WalletConnectorWrapper } from ".";
import { useAccount } from "wagmi";

interface WalletCardWrapperProps {
    children?: React.ReactNode;
}

export const WalletWrapper: React.FC<WalletCardWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const { } = props;

    const { isConnected } = useAccount();

    return (
        <>
            <Space direction="vertical" size={10}>
                {isConnected ? (
                    <WalletCardWrapper />
                ) : (
                    <div className="wallet-not-connected">
                        <img src={'/assets/images/item-background/wallet.webp'} />
                    </div>
                )}
                <WalletConnectorWrapper />
            </Space>
        </>
    );
};
