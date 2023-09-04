import React, { useEffect } from "react";

import { Drawer } from "antd";
import { WalletWidget } from "_components/widgets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";

import { WalletDrawerITypes } from ".";
import "./WalletWidget.scss";

const WalletDrawer: React.FC<WalletDrawerITypes> = ({
  children,
  ...props
}): any | null => {

  const { title, placement, size, openStateChange } = props;

  const { isWalletDrawerOpen, setWalletDrawerActiveStatus } = useDrawersDataContext();

  useEffect(() => {
    openStateChange(isWalletDrawerOpen, props);
    return () => {
      openStateChange(false, props);
    }
  }, [isWalletDrawerOpen])

  const onClose = () => {
    setWalletDrawerActiveStatus(false);
  };

  return (
    <>
      <Drawer title={title} placement={placement} size={size} onClose={onClose} open={isWalletDrawerOpen} className="antx-wallet-widget">
        <WalletWidget showLogo showTitle />
      </Drawer>
    </>
  );
};

export { WalletDrawer };
