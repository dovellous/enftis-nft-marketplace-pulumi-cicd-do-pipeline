/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Space, Badge, Button, Dropdown, message, Avatar } from "antd";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import Icon, {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
  WalletOutlined,
  AppstoreFilled,
  DeploymentUnitOutlined,
  PoweroffOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { BinanceSVG, EthereumSVG, PolygonSVG } from "_assets";
import { useDrawersDataContext } from "_services/providers/data/context/DrawersDataContext";
import { LoginDrawer } from "_components/widgets/login/LoginDrawer";
import { CartDrawer, WalletConnectDrawer } from "_components/widgets";
import { RootState, logoutUser, useAppDispatch } from "_services/providers";
import { userInfo } from "os";
import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { snippets } from "_helpers";

//import { RootState, logoutUser, useAppDispatch } from "_services/providers/redux";

const { Search } = Input;

const NavMenuRight: React.FC = () => {
  const dispatch = useAppDispatch();

  const { authLoading, loggedIn, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    //console.log("USER_INFO", user);

    return () => {
      console.log("NULL USER");
    };
  }, []);

  const [walletConnected, setWalletConnected] = React.useState<boolean>(false);

  const [searchActive, setSearchActive] = React.useState<boolean>(false);

  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const onSearch = (value: string) => {
    console.log("SEARCH", value);
    setSearchQuery(value);
  };

  const onSearchHandler = (value: any) => {
    console.log(value);

    if (searchActive) {
      if (searchQuery === "") {
        setSearchActive(false);
      } else {
        //Todo: do search
      }
    } else {
      setSearchActive(true);
    }
  };

  const {
    setCartDrawerActiveStatus,
    setLoginDrawerActiveStatus,
    setNFTDrawerActiveStatus,
    setNFTBiddingDrawerActiveStatus,
    setNFTHistoryDrawerActiveStatus,
    setNFTMetaDrawerActiveStatus,
    setPlatformDrawerActiveStatus,
    setRegisterDrawerActiveStatus,
    setSettingsDrawerActiveStatus,
    setWalletDrawerActiveStatus,
    setWalletConnectDrawerActiveStatus,
  } = useDrawersDataContext();

  const showCartDrawer: any = () => {
    setCartDrawerActiveStatus(true);
  };
  const showLoginDrawer: any = () => {
    setLoginDrawerActiveStatus(true);
  };
  const showNFTDrawer: any = () => {
    setNFTDrawerActiveStatus(true);
  };
  const showNFTBiddingDrawer: any = () => {
    setNFTBiddingDrawerActiveStatus(true);
  };
  const showNFTHistoryDrawer: any = () => {
    setNFTHistoryDrawerActiveStatus(true);
  };
  const showNFTMetaDrawer: any = () => {
    setNFTMetaDrawerActiveStatus(true);
  };
  const showPlatformDrawer: any = () => {
    setPlatformDrawerActiveStatus(true);
  };
  const showRegisterDrawer: any = () => {
    setRegisterDrawerActiveStatus(true);
  };
  const showSettingsDrawer: any = () => {
    setSettingsDrawerActiveStatus(true);
  };
  const showWalletDrawer: any = () => {
    setWalletDrawerActiveStatus(true);
  };
  const showWalletConnectDrawer: any = () => {
    setWalletConnectDrawerActiveStatus(true);
  };

  const logoutSession: any = () => {
    dispatch(logoutUser(false));
  };

  ///

  const handleMenuClickBlockChains: MenuProps["onClick"] = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "@Douglas",
      key: "1",
      icon: (
        <Avatar
          src={"https://xsgames.co/randomusers/avatar.php?g=pixel&key=0"}
          alt="DM"
        />
      ),
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "2",
      icon: <PoweroffOutlined />,
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "9",
      icon: <PoweroffOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClickBlockChains,
  };

  const openStateChangeHandler: any = (isOpen: boolean, modal: any) => {
    console.log("MODAL STATE", isOpen, modal);
  };

  // When logged in, hide the Login sidebar
  useEffect(() => {
    setLoginDrawerActiveStatus(false);

    return () => {
      setLoginDrawerActiveStatus(false);
    };
  }, [loggedIn, setLoginDrawerActiveStatus]);

  const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <>
      <Space className="ant-mega-menu ">
        <nav role="navigation">
          <Space direction="horizontal">
            <Button
              className="dark-white"
              type="text"
              icon={<AppstoreFilled />}
              size="large"
            />
            {searchActive ? (
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                className="w-100 line-height-initial"
                size="large"
              />
            ) : (
              <Button
                className="dark-white"
                type="text"
                icon={<SearchOutlined />}
                size="large"
                onClick={(e) => {
                  onSearchHandler(e);
                }}
              />
            )}
            {loggedIn ? (
              <Dropdown menu={menuProps} placement="bottomRight" arrow>
                <Avatar
                  src={
                    "https://xsgames.co/randomusers/avatar.php?g=pixel&key=0"
                  }
                  alt="DM"
                />
              </Dropdown>
            ) : (
              <Button
                className="dark-white"
                type="text"
                icon={<UserOutlined />}
                size="large"
                onClick={() => {
                  showLoginDrawer();
                }}
              />
            )}
            <Badge count={5}>
              <Button
                className="dark-white"
                type="text"
                icon={<ShoppingCartOutlined />}
                size="large"
                onClick={() => {
                  showCartDrawer();
                }}
              />
            </Badge>

            {walletConnected ? (
              <>
                <Button
                  icon={<WalletOutlined />}
                  size="large"
                  onClick={() => {
                    showWalletConnectDrawer();
                  }}
                >
                  {snippets.formatAddress(address)}
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="primary"
                  icon={<WalletOutlined />}
                  size="large"
                  onClick={() => {
                    showWalletConnectDrawer();
                  }}
                >
                  Connect Wallet
                </Button>
              </>
            )}

            <Web3Button />
          </Space>
        </nav>
      </Space>

      <CartDrawer
        title={"Cart"}
        placement={"right"}
        size={"default"}
        openStateChange={openStateChangeHandler}
      />

      <LoginDrawer
        title={"Login"}
        placement={"right"}
        size={"default"}
        openStateChange={openStateChangeHandler}
      />

      <WalletConnectDrawer
        title={"Please Connect Wallet"}
        placement={"right"}
        size={"default"}
        openStateChange={openStateChangeHandler}
      />
    </>
  );
};
export { NavMenuRight };
