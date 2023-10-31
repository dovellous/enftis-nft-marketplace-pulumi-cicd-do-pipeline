import {
    Row,
    Col,
    Tooltip,
    Skeleton,
} from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";

import CountUp from 'react-countup';

interface StakingRewardsEarningsWrapperProps {
    nftxBalance: number | undefined;
    nftxMined: number | undefined;
    joinBonus: number | undefined;
    socialBonus: number | undefined;
    rewardPerInvite: number | undefined;
    totalInvites: number | undefined;
    rewardEarned: number | undefined;
    walletAddress?: `0x${string}` | undefined;
    className?: string;
    children?: React.ReactNode;
}

export const StakingRewardsEarningsWrapper: React.FC<StakingRewardsEarningsWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const {
        nftxBalance,
        nftxMined,
        joinBonus,
        socialBonus,
        rewardPerInvite,
        totalInvites,
        rewardEarned,
        className,
    } = props;

    return (
        <Row className={`earnings-card ${className || ''}`} >
            <Col span={12}>
                <div className="item-flex">
                    <div className="item-data">
                        <span className="value">
                            {nftxBalance ? <CountUp delay={1} redraw={true} useEasing  end={nftxBalance} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">Jouel Token ($JLX) Balance</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`Total amount of $JLX that has accumulated so far for both mined and tranfered tokens. The Jouel Token ($JLX) is the Governance token for the JewelDAO `} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
            <Col span={12}>
                <div className="item-flex no-br">
                    <div className="item-data">
                        <span className="value">
                            {nftxMined ? <CountUp delay={1} redraw={true} useEasing  end={nftxMined} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">$JLX Mined (Not Minted)</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`Total amount of $JLX earned so far through virtual mining. This depends on the amount of time you spend on this site.`} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
            <Col span={12}>
                <div className="item-flex">
                    <div className="item-data">
                        <span className="value">
                            {joinBonus ? <CountUp delay={1} redraw={true} useEasing  end={joinBonus} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">Join Bonus</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`Bonus received when you signed up on this site.`} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
            <Col span={12}>
                <div className="item-flex no-br">
                    <div className="item-data">
                        <span className="value">
                            {socialBonus ? <CountUp delay={1} redraw={true} useEasing  end={socialBonus} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">Social Bonus</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`Bonus received when you shared this site onto your social media networks.`} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
            <Col span={8}>
                <div className="item-flex no-bb">
                    <div className="item-data">
                        <span className="value">
                            {rewardPerInvite ? <CountUp delay={1} redraw={true} useEasing  end={rewardPerInvite} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">Reward Per Invite</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`The amount of $JLX that you will receive per each person invited.`} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
            <Col span={8}>
                <div className="item-flex no-bb">
                    <div className="item-data">
                        <span className="value">
                            {totalInvites ? <CountUp delay={1} redraw={true} useEasing  end={totalInvites} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">Total Invites</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`The total number of people that you have invited so far using your referal link.`} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
            <Col span={8}>
                <div className="item-flex no-br no-bb">
                    <div className="item-data">
                        <span className="value">
                            {rewardEarned ? <CountUp delay={1} redraw={true} useEasing  end={rewardEarned} separator="," /> : <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />}
                        </span>
                        <span className="label">Rewards Earned</span>
                    </div>
                    <div className="item-info">
                        <Tooltip title={`Total reward awarded from every successful invite. The invited individual must also sign up in order to get the reward.`} >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </div>
                </div>
            </Col>
        </Row>
    );
};
