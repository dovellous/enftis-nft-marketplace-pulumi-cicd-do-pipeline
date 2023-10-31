import { Button, Space } from "antd";
import { useAccount } from "wagmi";

interface WalletCardWrapperProps {
    onConnectWallet: ()=>void,
    children?: React.ReactNode;
}

export const VotingWrapper: React.FC<WalletCardWrapperProps> = ({
  children,
  ...props
}): any | null => {
  const { onConnectWallet } = props;

  const { isConnected } = useAccount();

  return (
    <>
      {isConnected ? (
        <Space direction="vertical" size={5} align="center">
          <div className="jouel-token-voting">
            <img
              alt=""
              src={"/assets/images/web3/diamond.png"}
              width={300}
              height={300}
            />
            <h2>
              Vote with Jouel Token <a href="#">($JLX)</a>
            </h2>
            <p>
              Vote with your Jouel Tokens held in your wallet or delegated to
              you. Jouel Token ($JLX), is the official governance token for
              JouelDAO.
            </p>
            <Button type="primary" block size="large">
              Vote with $JLX
            </Button>
            <Button type="default" block size="large">
              Create a proposal
            </Button>
          </div>
        </Space>
      ) : (
        <div className="wallet-not-connected">
          <img src={"/assets/images/item-background/wallet.webp"} />
          <Button type="primary" size="large" onClick={onConnectWallet}>
            Please connect wallet
          </Button>
        </div>
      )}
    </>
  );
};
