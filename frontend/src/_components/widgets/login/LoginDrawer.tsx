import React, { useEffect } from "react";

import { Drawer } from "antd";
import { LoginWidget } from "_components/widgets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";

import { LoginDrawerITypes } from ".";
import "./LoginWidget.scss";

const LoginDrawer: React.FC<LoginDrawerITypes> = ({
  children,
  ...props
}): any | null => {

  const { title, placement, size, openStateChange } = props;

  const { isLoginDrawerOpen, setLoginDrawerActiveStatus } = useDrawersDataContext();

  useEffect(() => {
    openStateChange(isLoginDrawerOpen, props);
    return () => {
      openStateChange(false, props);
    }
  }, [isLoginDrawerOpen])

  const onClose = () => {
    setLoginDrawerActiveStatus(false);
  };

  return (
    <>
      <Drawer title={title} placement={placement} size={size} onClose={onClose} open={isLoginDrawerOpen}>
        <LoginWidget showLogo showTitle />
      </Drawer>
    </>
  );
};

export { LoginDrawer };
