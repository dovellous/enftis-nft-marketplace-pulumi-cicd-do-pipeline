/* eslint-disable jsx-a11y/anchor-is-valid */

import { useAccount, useConnect, useNetwork } from "wagmi";
import { useSwitchNetwork } from "wagmi";
import {
  Row,
  Col,
  Badge,
  Avatar,
  Typography,
  Button,
  MenuProps,
  Dropdown,
  Skeleton,
} from "antd";

import Icon, {
  ApiOutlined,
  CheckCircleFilled,
  DeploymentUnitOutlined,
  InfoCircleOutlined,
  LoadingOutlined,
  PartitionOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { disconnect, switchNetwork } from "@wagmi/core";
import { BinanceSVG, EthereumSVG, PolygonSVG } from "_assets";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { useDrawersDataContext } from "_services/providers";

interface WalletConnectorButtonProps {
  connector: any;
  className?: string;
  children?: React.ReactNode;
}

enum BadgeStatus {
  SUCCESS = "success",
  WARNING = "warning",
  PROCESSING = "processing",
  ERROR = "error",
  DEFAULT = "default",
}

export const WalletConnectorButton: React.FC<WalletConnectorButtonProps> = ({
  children,
  ...props
}): any | null => {
  const { className, connector } = props;

  const { connector: activeConnector, isConnected } = useAccount();

  const { connect, error, isLoading, pendingConnector } = useConnect();

  const { chain } = useNetwork();

  const { switchNetwork } = useSwitchNetwork();

  const [statusBadge, setStatusBadge] = useState(BadgeStatus.DEFAULT);

  const [isReady, setIsReady] = useState(false);

  const [isProcessing, setIsProcessing] = useState(false);

  const [hasConnected, setHasConnected] = useState(false);

  const [readyState, setReadyState] = useState<boolean>(false);

  const onSwitchNetworkHandler: any = (chainId: number): void => {
    switchNetwork?.(chainId);
  };

  const onDisconnectWalletHandler: any = (): void => {
    disconnect();
    setIsReady(false);
    setIsProcessing(false);
    setHasConnected(false);
    setStatusBadge(BadgeStatus.DEFAULT);
  };

  useEffect(() => {
    if (connector.ready) {
      setIsReady(true);
      setStatusBadge(BadgeStatus.WARNING);
      setTimeout(() => {
        setReadyState(true);
      }, 3000)
    } else {
      setIsReady(false);
      setStatusBadge(BadgeStatus.DEFAULT);
    }

    if (isLoading && pendingConnector?.id === connector.id) {
      setIsProcessing(true);
      setStatusBadge(BadgeStatus.PROCESSING);
    } else {
      setIsProcessing(false);
      setStatusBadge(BadgeStatus.DEFAULT);
    }

    if (isConnected && connector?.name === activeConnector?.name) {
      setHasConnected(true);
      setStatusBadge(BadgeStatus.SUCCESS);
    } else {
      setHasConnected(false);
      setStatusBadge(BadgeStatus.DEFAULT);
    }

    if (error) {
      setStatusBadge(BadgeStatus.ERROR);
    }

    return () => {
      setIsReady(false);
      setIsProcessing(false);
      setHasConnected(false);
      setStatusBadge(BadgeStatus.DEFAULT);
    };
  }, [
    isLoading,
    pendingConnector,
    connector,
    isConnected,
    activeConnector,
    error,
  ]);

  const EthereumIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={EthereumSVG} {...props} />
  );

  const BinanceIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={BinanceSVG} {...props} />
  );

  const PolygonIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={PolygonSVG} {...props} />
  );

  const chainList: Array<any> = [
    {
      label: `${chain?.name} ( ${chain?.id} )`,
      key: "1",
      icon: <Badge className="badge-lh-1" color="green" status="processing" />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(1)}>
          Ethereum Chain - Mainnet
        </span>
      ),
      key: "2",
      icon: <EthereumIcon />,
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(5)}>
          Ethereum - Testnet (Goerli)
        </span>
      ),
      key: "3",
      icon: <EthereumIcon />,
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(11155111)}>
          Ethereum - Testnet (Sepolia)
        </span>
      ),
      key: "4",
      icon: <EthereumIcon />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(137)}>
          Polygon Chain - Mainnet
        </span>
      ),
      key: "5",
      icon: <PolygonIcon />,
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(80001)}>
          Polygon - Testnet (Mumbai)
        </span>
      ),
      key: "6",
      icon: <PolygonIcon />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(56)}>
          Binance Chain - Mainnet
        </span>
      ),
      key: "7",
      icon: <BinanceIcon />,
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(97)}>
          Binance Chain - Testnet
        </span>
      ),
      key: "8",
      icon: <BinanceIcon />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(1337)}>
          Localhost - Ganache
        </span>
      ),
      key: "9.1",
      icon: <EthereumIcon />,
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(31337)}>
          Localhost - Hardhat
        </span>
      ),
      key: "9.2",
      icon: <EthereumIcon />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={() => onSwitchNetworkHandler(80001)}>
          Show all supported chains
        </span>
      ),
      key: "10",
      icon: <PartitionOutlined />,
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: <span onClick={onSwitchNetworkHandler}>Switch Network</span>,
      key: "11",
      icon: <DeploymentUnitOutlined />,
      children: chainList,
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="/support/help/wallets/connection"
        >
          Connection Help
        </a>
      ),
      icon: <QuestionCircleOutlined />,
      key: "12",
    },

    {
      type: "divider",
    },
    {
      label: <span onClick={onDisconnectWalletHandler}>Disconnect Wallet</span>,
      key: "13",
      icon: <ApiOutlined />,
      disabled: false,
    },
  ];

  return (

    <>

      {readyState ? (

        <Row
          className={`wallet-connector-card ${className || ''} ${String(
            connector.id
          ).toLowerCase()} ${isReady ? "supported" : ""} ${isProcessing ? "processing" : ""
            } ${hasConnected ? "connected" : ""} `}
          onClick={() => {
            if (!hasConnected) {
              connect({ connector });
            }
          }}
        >
          <Col flex={"56px"}>
            <Badge dot status={statusBadge}>
              <Avatar
                src={`/images/cryptocurrency-icons-master/wallets/${String(
                  connector.id
                ).toLowerCase()}.svg`}
                size={{ xs: 48, sm: 48, md: 48, lg: 48, xl: 48, xxl: 48 }}
              />
            </Badge>
          </Col>
          <Col flex={"auto"}>
            <Row className="ml-2">
              <Col flex={"auto"} className="wallet-header">
                <Typography.Title level={5} className="wallet-connector">
                  {connector?.name}
                </Typography.Title>
                <div className="wallet-status">
                  {error ? (
                    <>
                      <span className="wallet-error">{error.message}</span>
                    </>
                  ) : (
                    <>
                      {hasConnected ? (
                        <>
                          <span className="wallet-network">{chain?.name}</span>
                          <span className="wallet-chain">
                            Chain ID: {chain?.id}
                          </span>
                        </>
                      ) : (
                        <>
                          {isProcessing ? (
                            <>
                              <span className="wallet-connecting">
                                <LoadingOutlined /> Connecting...
                              </span>
                            </>
                          ) : (
                            <span className="wallet-info">
                              <InfoCircleOutlined />
                              &nbsp;&nbsp;Connect via {connector.name}
                            </span>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </Col>
              <Col flex={"32px"} className="wallet-header">
                <Dropdown
                  menu={{ items }}
                  arrow
                  placement="bottomRight"
                  disabled={!hasConnected}
                  trigger={["click"]}
                >
                  <Button type="text" shape="circle" icon={<SettingOutlined />} />
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>

      ) : (

        <Row className={`wallet-connector-card`}>

          <Skeleton avatar active paragraph={{ rows: 1 }} />

        </Row>

      )}

    </>

  );

};
