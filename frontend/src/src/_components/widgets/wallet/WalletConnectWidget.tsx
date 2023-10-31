/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import {
  VotingWrapper,
  StakingRewardsWrapper,
  WalletWidgetITypes,
  WalletWrapper,
} from ".";
import { Button, Space, Tabs, TabsProps, Typography } from "antd";
import {
  WalletOutlined,
  AuditOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

import "./WalletWidget.scss";
import { useWeb3DataContext } from "_services/providers";
import { useAccount } from "wagmi";

const WalletConnectWidget: React.FC<WalletWidgetITypes> = ({
  children,
  ...props
}): any | null => {
  const {} = props;

  const [activeKey, setActiveKey] = useState<string>("1");

  const { isConnected } = useAccount();

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const onConnectWalletHandler = () => {
    setActiveKey("1");
  };

  //// TABS

  const tabItems: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span>
          <WalletOutlined />
          My Wallet
        </span>
      ),
      children: <WalletWrapper />,
    },
    {
      key: "2",
      label: (
        <span>
          <TrophyOutlined />
          Virtual Mining & Rewards
        </span>
      ),
      children: (
        <StakingRewardsWrapper onConnectWallet={onConnectWalletHandler} />
      ),
    },
    {
      key: "3",
      label: (
        <span>
          <AuditOutlined />
          Voting
        </span>
      ),
      children: <VotingWrapper onConnectWallet={onConnectWalletHandler} />,
    },
  ];

  //// END TABS

  return (
    <>
      <Space
        direction="vertical"
        size={5}
        className="wallet-connect-spacer-wrapper"
      >
        <Tabs
          activeKey={activeKey}
          defaultActiveKey={activeKey}
          items={tabItems}
          onChange={onChange}
        />

        {!isConnected && (
          <Typography.Text>
            <span className="legal-text-foot-print">
              By connecting a wallet, you agree to Enftis Marketplace
              <a href="/legal/terms-of-service"> Terms of Service </a>
              and consent to our
              <a href="/legal/privacy-policy"> Privacy Policy </a>
              and
              <a href="/legal/cookie-policy"> Cookie Policy </a>
              last Updated : 23 Aug 2023
            </span>
          </Typography.Text>
        )}
      </Space>
    </>
  );
};

export { WalletConnectWidget };
