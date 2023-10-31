import React, { useEffect } from "react";

import { Drawer } from "antd";
import { CartWidget } from "_components/widgets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";

import { CartDrawerITypes } from ".";
import "./CartWidget.scss";

const CartDrawer: React.FC<CartDrawerITypes> = ({
  children,
  ...props
}): any | null => {

  const { title, placement, size, openStateChange } = props;

  const { isCartDrawerOpen, setCartDrawerActiveStatus } = useDrawersDataContext();

  useEffect(() => {
    openStateChange(isCartDrawerOpen, props);
    return () => {
      openStateChange(false, props);
    }
  }, [isCartDrawerOpen])

  const onClose = () => {
    setCartDrawerActiveStatus(false);
  };

  return (
    <>
      <Drawer title={title} placement={placement} size={size} onClose={onClose} open={isCartDrawerOpen}>
        <CartWidget showLogo showTitle />
      </Drawer>
    </>
  );
};

export { CartDrawer };
