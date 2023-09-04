import { WalletConnectors } from ".";

interface WalletConnectorProps {
    children?: React.ReactNode;
}

export const WalletConnectorWrapper: React.FC<WalletConnectorProps> = ({
    children,
    ...props
}): any | null => {

    const {} = props;

    return (
        <WalletConnectors />
    );
};
