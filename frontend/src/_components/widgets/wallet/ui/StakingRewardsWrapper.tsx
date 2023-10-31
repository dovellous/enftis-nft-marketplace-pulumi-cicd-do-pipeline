import { Button, Space } from "antd";
import { StakingRewardsCardWrapper, StakingRewardsEarningsWrapper, StakingRewardsInvite } from ".";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useWeb3DataContext } from "_services/providers";

interface StakingRewardsWrapperProps {
    onConnectWallet: ()=>void,
    children?: React.ReactNode;
}

export const StakingRewardsWrapper: React.FC<StakingRewardsWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const { onConnectWallet } = props;

    const { address, isConnected } = useAccount();
    
    const { } = useWeb3DataContext();

    const [walletAddress, setWalletAddress] = useState<`0x${string}` | undefined>(undefined);

    const [nftxBalance, setNFTXBalance] = useState<number | undefined>(1900543);
    const [nftxMined, setNFTXMined] = useState<number | undefined>(74322);
    const [joinBonus, setJoinBonus] = useState<number | undefined>(500);
    const [socialBonus, setSocialBonus] = useState<number | undefined>(700);
    const [rewardPerInvite, setRewardPerInvite] = useState<number | undefined>(100);
    const [totalInvites, setTotalInvites] = useState<number | undefined>(3);
    const [rewardEarned, setRewardEarned] = useState<number | undefined>(300);

    const getNFTXBalance: any = (): void => {
        


    }

    const getNFTXMined: any = () => { }
    const getJoinBonus: any = () => { }
    const getSocialBonus: any = () => { }
    const getRewardPerInvite: any = () => { }
    const getTotalInvites: any = () => { }
    const getRewardEarned: any = () => { }
    
    useEffect(() => {

        setWalletAddress(address);

        return () => {

            setWalletAddress(undefined);

        }
        
    },[ address ])

    return (
        <>
            <Space direction="vertical" align="center" size={10}>
                {isConnected ? (
                    <>
                        <StakingRewardsCardWrapper />
                        <StakingRewardsEarningsWrapper
                            walletAddress={walletAddress}
                            nftxBalance={nftxBalance}
                            nftxMined={nftxMined}
                            joinBonus={joinBonus}
                            socialBonus={socialBonus}
                            rewardPerInvite={rewardPerInvite}
                            totalInvites={totalInvites}
                            rewardEarned={rewardEarned}
                        />
                        <StakingRewardsInvite walletAddress={walletAddress} />
                    </>

                ) : (

                    <div className="wallet-not-connected">
                        <img src={'/assets/images/item-background/wallet.webp'} />
                            <Button type="primary" size="large" onClick={onConnectWallet}>Please connect wallet</Button>
                    </div>

                )}

            </Space>
        </>

    );
};
