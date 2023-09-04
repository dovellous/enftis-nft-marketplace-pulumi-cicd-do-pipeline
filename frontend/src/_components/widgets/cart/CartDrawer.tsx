import React, { useEffect } from "react";

import { Button, Drawer, Modal, Space } from "antd";
import { CartWidget } from "_components/widgets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";

import { CartDrawerITypes } from ".";
import "./CartWidget.scss";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useAppDispatch } from "_services/providers/redux";

const CartDrawer: React.FC<CartDrawerITypes> = ({
  children,
  ...props
}): any | null => {

  const dispatch = useAppDispatch();

  const { isCartDrawerOpen, setCartDrawerActiveStatus } = useDrawersDataContext();

  const { title, placement, size, openStateChange } = props;

  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    openStateChange(isCartDrawerOpen, props);
    return () => {
      openStateChange(false, props);
    }
  }, [isCartDrawerOpen])

  const onClose = () => {
    setCartDrawerActiveStatus(false);
  };

  const onClearCartItems = () => {
    
    modal.confirm({
      title: 'Empty Cart',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to clear all cart items?',
      okText: 'Yes',
      cancelText: 'Cancel',
      onOk: () => {
        console.log("REMOVE CART ITEMS");
        //dispatch(emptyCartItemsAction());
      }
    });

  };

  return (
    <>
      <Drawer 
        title={title} 
        placement={placement}
        size={size}
        onClose={onClose}
        open={isCartDrawerOpen}
        className="antx-cart-widget" 
        extra={
          <Space>
            <Button type="text" onClick={onClearCartItems} icon={<DeleteOutlined />} />
          </Space>
        }
      >
        <CartWidget showLogo showTitle />
        {contextHolder}
      </Drawer>
    </>
  );
};

export { CartDrawer };
