import {
    Row,
    Col,
    Avatar,
    Typography,
    Button,
    MenuProps,
    Dropdown,
    Tooltip,
    message
} from "antd";

import {
    CopyOutlined,
    FacebookFilled,
    InstagramOutlined,
    LinkedinOutlined,
    MediumOutlined,
    ShareAltOutlined,
    TwitterOutlined,
    WhatsAppOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import { useCopyToClipboard } from 'usehooks-ts'

import { snippets } from "_helpers";

interface StakingRewardsInviteProps {
    className?: string;
    walletAddress?: string;
    children?: React.ReactNode;
}

export const StakingRewardsInvite: React.FC<StakingRewardsInviteProps> = ({
    children,
    ...props
}): any | null => {

    const { className, walletAddress } = props;

    const [messageApi, contextHolder] = message.useMessage();

    const [referalLink, setReferalLink] = useState<string>("");

    const [clipboardReferalLink, copyReferalLinkToClipboard] = useCopyToClipboard();

    const [referalLinkWhatsApp, setReferalLinkWhatsApp] = useState<string>("");
    const [referalLinkTwitter, setReferalLinkTwitter] = useState<string>("");
    const [referalLinkFacebook, setReferalLinkFacebook] = useState<string>("");
    const [referalLinkInstagram, setReferalLinkInstagram] = useState<string>("");
    const [referalLinkLinkedIn, setReferalLinkLinkedIn] = useState<string>("");
    const [referalLinkMedium, setReferalLinkMedium] = useState<string>("");

    const copyReferalLink: any = (): void => {

        copyReferalLinkToClipboard(referalLink);

        messageApi.info('Your Referal link has been copied to your clipboard');

        console.log('clipboardReferalLink', clipboardReferalLink);

    }

    useEffect(() => {

        const referalLink: string = "https://ant.design/components/message/" + walletAddress;
        const referalTitle: string = "";
        const referalDescription: string = "";

        setReferalLink(referalLink);

        setReferalLinkWhatsApp(snippets.share.whatsAppLink(referalLink, referalTitle, referalDescription));
        setReferalLinkTwitter(snippets.share.twitterLink(referalLink, referalTitle, referalDescription));
        setReferalLinkFacebook(snippets.share.facebookLink(referalLink, referalTitle, referalDescription));
        setReferalLinkInstagram(snippets.share.instagramLink(referalLink, referalTitle, referalDescription));
        setReferalLinkLinkedIn(snippets.share.linkedInLink(referalLink, referalTitle, referalDescription));
        setReferalLinkMedium(snippets.share.mediumLink(referalLink, referalTitle, referalDescription));

    }, [walletAddress]);

    const items: MenuProps["items"] = [
        {
            label: <span ><strong>SHARE INVITE LINK</strong></span>,
            key: "11",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={referalLinkWhatsApp}
                >
                    Invite via WhatsApp
                </a>
            ),
            icon: <WhatsAppOutlined />,
            key: "12",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={referalLinkTwitter}
                >
                    Invite via Twitter
                </a>
            ),
            icon: <TwitterOutlined />,
            key: "13",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={referalLinkFacebook}
                >
                    Invite via Facebook
                </a>
            ),
            icon: <FacebookFilled />,
            key: "14",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={referalLinkMedium}
                >
                    Invite via Medium
                </a>
            ),
            icon: <MediumOutlined />,
            key: "15",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={referalLinkInstagram}
                >
                    Invite via Instagram
                </a>
            ),
            icon: <InstagramOutlined />,
            key: "16",
        },
        {
            label: (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={referalLinkLinkedIn}
                >
                    Invite via Linked In
                </a>
            ),
            icon: <LinkedinOutlined />,
            key: "17",
        },

        {
            type: "divider",
        },
        {
            label: (
                <span onClick={() => { }} >
                    Copy invite link
                </span>
            ),
            icon: <CopyOutlined />,
            key: "18",
        },
    ];

    return (

        <>
        {contextHolder}
        <Row className={`wallet-connector-card supported ${className || ''}`} onClick={copyReferalLink} >
            <Col flex={"64px"}>
                <Avatar
                    src={`/assets/images/web3/friends.png`}
                    size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 64, xxl: 64 }}
                />
            </Col>
            <Col flex={"auto"}>
                <Row className="ml-2">
                    <Col flex={"auto"} className="wallet-header">
                        <Typography.Title level={5} className="wallet-connector">
                            Invite Friends
                        </Typography.Title>
                        <div className="wallet-status">
                            <span className="wallet-info">
                                Invite your friends and earn more tokens. Click the share icon to begin.
                            </span>
                        </div>
                    </Col>
                    <Col flex={"32px"} className="wallet-header">
                        <Dropdown
                            menu={{ items }}
                            arrow
                            placement="bottomRight"
                            trigger={["click"]}
                        >
                            <Tooltip placement="bottomRight" title="Share your referal link to your friends. The more people you invite, the greater the reward nad the bonuses." >
                                <Button type="text" shape="circle" icon={<ShareAltOutlined />} />
                            </Tooltip>
                        </Dropdown>
                    </Col>
                </Row>
            </Col >
        </Row >
        </>
    );
};
