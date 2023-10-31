import React, { useEffect, useState } from "react";
import { Button, Drawer, Space } from "antd";
import { WalletConnectWidget } from "_components/widgets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";

import { WalletDrawerITypes } from ".";
import "./WalletWidget.scss";
import { ApiOutlined, SettingOutlined } from "@ant-design/icons";
import { useAccount, useDisconnect } from "wagmi";

const WalletConnectDrawer: React.FC<WalletDrawerITypes> = ({
  children,
  ...props
}): any | null => {

  const { title, placement, size, openStateChange } = props;

  const { isWalletConnectDrawerOpen, setWalletConnectDrawerActiveStatus } = useDrawersDataContext();

  const { connector: activeConnector, isConnected } = useAccount();

  const { disconnect } = useDisconnect();

  const [drawerTitle, setDrawerTitle] = useState<string>("");

  useEffect(() => {
    openStateChange(isWalletConnectDrawerOpen, props);
    return () => {
      openStateChange(false, props);
    }
  }, [isWalletConnectDrawerOpen, props])

  const onClose = () => {
    setWalletConnectDrawerActiveStatus(false);
  };

  const onSettings = () => {
    console.log("ON SETTINGS");
  };

  useEffect(() => {

    setDrawerTitle(title);

    return () => setDrawerTitle("");

  }, [title])

  useEffect(() => {

    if (isConnected) {
      
      setDrawerTitle(`Connected via ${activeConnector?.name}`);

    } else {
      
      setDrawerTitle(title);

    }

    return () => setDrawerTitle(title);

  }, [isConnected, activeConnector])

  return (
    <>
      <Drawer
        title={drawerTitle}
        placement={placement}
        size={size}
        onClose={onClose}
        open={isWalletConnectDrawerOpen}
        className="antx-wallet-widget wallet-connect"
        extra={
          <Space>
            <Button type="text" onClick={() => { disconnect(); }} icon={<ApiOutlined />} />
            <Button type="text" onClick={onSettings} icon={<SettingOutlined />} />
          </Space>
        }
      >
        <WalletConnectWidget showLogo showTitle />
      </Drawer>
    </>
  );
};

export { WalletConnectDrawer };
