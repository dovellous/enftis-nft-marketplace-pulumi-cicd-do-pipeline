import React, { useEffect } from "react";
import { Drawer } from "antd";
import { WalletConnectWidget } from "_components/widgets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";

import { WalletDrawerITypes } from ".";
import "./WalletWidget.scss";

const WalletConnectDrawer: React.FC<WalletDrawerITypes> = ({
  children,
  ...props
}): any | null => {

  const { title, placement, size, openStateChange } = props;

  const { isWalletConnectDrawerOpen, setWalletConnectDrawerActiveStatus } = useDrawersDataContext();

  useEffect(() => {
    openStateChange(isWalletConnectDrawerOpen, props);
    return () => {
      openStateChange(false, props);
    }
  }, [isWalletConnectDrawerOpen])

  const onClose = () => {
    setWalletConnectDrawerActiveStatus(false);
  };

  return (
    <>
      <Drawer title={title} placement={placement} size={size} onClose={onClose} open={isWalletConnectDrawerOpen} className="antx-wallet-widget wallet-connect">
        <WalletConnectWidget showLogo showTitle />
      </Drawer>
    </>
  );
};

export { WalletConnectDrawer };
