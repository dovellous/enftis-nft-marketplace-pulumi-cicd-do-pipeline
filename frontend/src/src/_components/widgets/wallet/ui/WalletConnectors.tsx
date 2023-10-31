import { useConnect } from 'wagmi'
import { WalletConnectorButton } from '.';

interface WalletConnectorProps {
    className?: string;
    children?: React.ReactNode;
}

export const WalletConnectors: React.FC<WalletConnectorProps> = ({
    children,
    ...props
}): any | null => {

    const {
        className
    } = props;

    const {
        connectors,
        error,
    } = useConnect()

    return (
        <>
            
            {connectors.map((connector) => (
  
                <WalletConnectorButton key={connector.id} className={className} connector={connector} />
                
            ))}

            {error && <div>{error.message}</div>}

        </>
    );
};
