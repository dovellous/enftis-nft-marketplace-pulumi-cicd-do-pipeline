/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import { dotCase } from "dot-case";
import { useConnect, useDisconnect, useNetwork, useSwitchNetwork } from 'wagmi'

import {
  Row,
  Col,
  Badge,
  Avatar,
  Typography,
  Button,
  MenuProps,
  Dropdown,
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

import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { EthereumSVG, BinanceSVG, PolygonSVG } from "_assets";

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


  const {
    data,
    connect,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    pendingConnector
  } = useConnect()

  const { disconnect } = useDisconnect();

  const { chain } = useNetwork();
  
  const { chains, error: errorSwitchNetwork, isLoading: isSwitchingNetworks, switchNetwork } = useSwitchNetwork()


  const [statusBadge, setStatusBadge] = useState<BadgeStatus>(
    BadgeStatus.DEFAULT
  );

  const onSwitchNetworkHandler: any = (chainId:number): void => {
    switchNetwork?.(chainId);
  }

  const onDisconnectWalletHandler: any = (event: React.MouseEvent<HTMLElement>): void => {
    disconnect();
  }

  const EthereumIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={EthereumSVG} {...props} />
  );

  const BinanceIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={BinanceSVG} {...props} />
  );

  const PolygonIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={PolygonSVG} {...props} />
  );

  const [networkName, setNetworkName] = useState<string | undefined>('');
  
  const [networkChainId, setNetworkChainId] = useState<number | string | undefined>(0);

  const chainList: Array<any> = [
    {
      label: `Current Network: ${networkName} ( ${networkChainId} )`,
      key: "1",
      icon: <CheckCircleFilled />,
    },
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={()=>onSwitchNetworkHandler(1)} >
          Ethereum Chain - Mainnet
        </span>
      ),
      key: "2",
      icon: <EthereumIcon />,
    },
    {
      label: (
        <span onClick={()=>onSwitchNetworkHandler(5)} >
          Ethereum - Testnet (Goerli)
        </span>
      ),
      key: "3",
      icon: <EthereumIcon />,
    },
    {
      label: (
        <span onClick={()=>onSwitchNetworkHandler(11155111)} >
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
        <span onClick={()=>onSwitchNetworkHandler(137)} >
          Polygon Chain - Mainnet
        </span>
      ),
      key: "5",
      icon: <PolygonIcon />,
    },
    {
      label: (
        <span onClick={()=>onSwitchNetworkHandler(80001)} >
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
        <span onClick={()=>onSwitchNetworkHandler(56)} >
          Binance Chain - Mainnet
        </span>
      ),
      key: "7",
      icon: <BinanceIcon />,
    },
    {
      label: (
        <span onClick={()=>onSwitchNetworkHandler(97)} >
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
        <span onClick={()=>onSwitchNetworkHandler(80001)} >
          Show all supported chains
        </span>
      ),
      key: "9",
      icon: <PartitionOutlined />,
    },
  ];

  const items: MenuProps["items"] = [
  {
      label: (
        <span onClick={onSwitchNetworkHandler} >
          Switch Network
        </span>
      ),
      key: "1",
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
      key: "2",
    },
    
    {
      type: "divider",
    },
    {
      label: (
        <span onClick={onDisconnectWalletHandler} >
          Disconnect Wallet
        </span>
      ),
      key: "3",
      icon: <ApiOutlined />,
      disabled: false,
    },
  ];

  const [icon, setIcon] = useState('');
  
  const [isSupported, setIsSupported] = useState<boolean>(false);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined | null>('');

  const onClickHandler: any = (): void => {

    console.log({
      data,
      connect,
      error,
      isError,
      isIdle,
      isLoading,
      isSuccess,
      pendingConnector
    });

    if (isSuccess) {
      //console.log("ON CONNECT:: ALREADY_CONNECTED ... ::", isSuccess, connector)
    } else {
      if (isConnecting) {
        //console.log("ON CONNECT:: CXN IN PROGRESS ::", isSuccess, connector)
      } else {
        //console.log("ON CONNECT:: CONNECTING ... ::", isSuccess, connector)
        connect({ connector });
      }
    }

  }

  useEffect(() => {

    // console.log("CHECK ERROR:: isError ::", isError)

    // console.log("CHECK ERROR:: error ::", error)

    setHasError(isError);

    if (isError) {

      setErrorMessage(error?.message);

      setStatusBadge(BadgeStatus.ERROR);

    }

    return () => {

      setHasError(false);

    }

  }, [isError, error, connector])

  useEffect(() => {

    //console.log("CHECK ERROR:: isIdle ::", isIdle)

    setStatusBadge(BadgeStatus.DEFAULT);

    return () => {

      setStatusBadge(BadgeStatus.DEFAULT);

    }

  }, [isIdle])

  useEffect(() => {

    //console.log("CHECK CONNECTION:: isSuccess ::", isSuccess, data?.connector)

    if (connector.id === data?.connector?.id && isSuccess) {

      setIsConnected(true);

      setStatusBadge(BadgeStatus.SUCCESS);

    } else {

      setIsConnected(false);

    }

    return () => {

      setIsConnected(false);

    }

  }, [connector, pendingConnector, data, isSuccess])

  useEffect(() => {

    if ((isLoading && connector.id === pendingConnector?.id) || isSwitchingNetworks) {

      setIsConnected(false);

      setIsConnecting(true);

      setStatusBadge(BadgeStatus.PROCESSING);

    } else {

      setIsConnecting(false);

    }

    return () => {

      setIsConnected(false);

      setIsConnecting(false);

    }

  }, [connector, pendingConnector, isLoading, isSwitchingNetworks])

  useEffect(() => {

    setNetworkName(chain?.name);

    setNetworkChainId(chain?.id);

    return () => {

      setNetworkName('');

      setNetworkChainId(0);

    }

  }, [chain])

  useEffect(() => {

    setIcon(`${dotCase(connector.name)}.svg`);

    setIsSupported(connector.ready);

    return () => {

      setIcon('');

      setIsSupported(false);

    }

  }, [connector])

  return (
    
      <Row
        className={`wallet-connector-card ${className} ${connector.id} ${isSupported ? 'supported' : 'not-supported'} ${isConnected ? 'connected' : ''}`}
        onClick={onClickHandler} >
        <Col flex={"72px"}>
          <Badge dot status={statusBadge}>
            <Avatar
              src={`/images/cryptocurrency-icons-master/wallets/${icon}`}
              size={{ xs: 18, sm: 24, md: 30, lg: 48, xl: 60, xxl: 75 }}
            />
          </Badge>
        </Col>
        <Col flex={"auto"}>
          <Row className="ml-2">
            <Col flex={"auto"} className="wallet-header">
              <Typography.Title level={5} className="wallet-connector">
                {connector.name}
              </Typography.Title>
              <div className="wallet-status">
                {isConnecting ? (
                  <>
                    <span className="wallet-connecting"><LoadingOutlined />  Connecting...</span>
                  </>
                ) : (
                  <>
                    {hasError ? (
                      <>
                        <span className="wallet-error">{errorMessage}</span>
                      </>
                    ) : (
                      <>
                        {isConnected ? (
                          <>
                            <span className="wallet-network">{networkName}</span>
                            <span className="wallet-chain">Chain ID: {networkChainId}</span>
                          </>
                        ) : (
                          <>
                            <span className="wallet-info"><InfoCircleOutlined />&nbsp;&nbsp;Click to connect via {connector.name}</span>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </Col>
            <Col flex={"32px"} className="wallet-header">
              <Dropdown menu={{ items }} arrow placement="bottomRight" disabled={!isConnected} trigger={['click']} >
                <Button type="text" shape="circle" icon={<SettingOutlined />} />
              </Dropdown>
            </Col>
          </Row>
        </Col>
      </Row>
  );
};

