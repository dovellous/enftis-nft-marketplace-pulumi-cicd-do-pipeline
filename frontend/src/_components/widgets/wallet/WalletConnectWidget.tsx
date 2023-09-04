/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { WalletWidgetITypes, WalletWrapper } from ".";
import { Button, Space, Tabs, TabsProps, Typography } from "antd";
import { WalletOutlined, ThunderboltOutlined, SettingOutlined } from "@ant-design/icons";

import "./WalletWidget.scss";
import { useWeb3DataContext } from "_services/providers";

const WalletConnectWidget: React.FC<WalletWidgetITypes> = ({
  children,
  ...props
}): any | null => {

  const {} = props;

  //// TABS

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: (
        <span>
          <WalletOutlined />
          My Wallet
        </span>
      ),
      children: <WalletWrapper />,
    },
    {
      key: '2',
      label: (
        <span>
          <ThunderboltOutlined />
          Voting Power
        </span>
      ),
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: (
        <span>
          <SettingOutlined />
          Settings
        </span>
      ),
      children: 'Content of Tab Pane 3',
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  //// END TABS

  const { sendEthAmountToAddress } = useWeb3DataContext();

  const sendTXN: any = async () => {
    const hash = await sendEthAmountToAddress(0.0021111111, '0x53ab2056Ca70934d0e233E6b686EC20DE4101Ed9');
    console.log("HASH #2::", hash)
  }

  return (
    <>

      <Space direction="vertical" size={5}>

        <Tabs defaultActiveKey="1" items={tabItems} onChange={onChange} />

        <Button type={"text"} onClick={sendTXN} >{"Send Transaction"}</Button>

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

      </Space>

    </>
  );
};


export { WalletConnectWidget };
