import { Row, Col } from "antd";
import {
    DollarCircleOutlined,
    SketchOutlined,
    WalletOutlined,
} from "@ant-design/icons";

import { snippets } from "_helpers";
import { useWeb3DataContext } from "_services/providers";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { apiRequestGET } from "_services";

interface WalletCardWrapperProps {
    oraclePollingSeconds?: number;
    children?: React.ReactNode;
}

export const WalletCardWrapper: React.FC<WalletCardWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const {
        oraclePollingSeconds
    } = props;

    const [walletAddress, setWalletAddress] = useState<`0x${string}` | string | undefined>(snippets.constants.ZERO_ADDRESS);
    const [walletBalanceETH, setWalletBalanceETH] = useState<number | undefined>(0);
    const [walletBalanceUSD, setWalletBalanceUSD] = useState<number | undefined>(0);
    const [walletBalanceUnits, setWalletBalanceUnits] = useState<string | undefined>('');

    const [etherPrice, setEtherPrice] = useState<number | undefined>(0);

    const { address, isConnecting, isConnected, isDisconnected } = useAccount();

    const { data, isError, isLoading } = useBalance({
        address: address,
    });

    const calculateUSDAmount: any = (): void => {

        if (etherPrice && walletBalanceETH) {

            const usdAmount: number = etherPrice * walletBalanceETH;

            setWalletBalanceUSD(usdAmount);

        }

    };

    useEffect(() => {

        if (isError) {
            
        }

    }, [isError]);

    useEffect(() => {

        calculateUSDAmount();

    }, [walletBalanceETH, etherPrice]);

    useEffect(() => {

        setWalletAddress(address);

    }, [address])

    useEffect(() => {

        const ethBalance: string = data?.formatted || "0";

        setWalletBalanceETH(parseFloat(ethBalance));
        setWalletBalanceUnits(data?.symbol);

    }, [data])

    useEffect(() => {

        const fetchData: any = async () => {
            try {
              const response = await apiRequestGET('',null,'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
              console.log(response.data);
              setEtherPrice(parseFloat(`${response?.data?.ethereum?.usd}`));
            } catch (error) {
              console.error(error);
            }

        };

        const timer = setInterval(() => {
            fetchData();
        }, (oraclePollingSeconds || 600) * 1000);

        return () => {
            clearTimeout(timer);
        };

    }, []);

    return (
        <div className={`wallet-card`}>
            <Row className="video">
                <Col span={24}>
                    <video autoPlay muted loop className="video-el" width="100%" >
                        <source src="/assets/videos/wallet-card.mp4" type="video/mp4" />
                    </video>
                    <SketchOutlined size={64} />
                </Col>
            </Row>
            <Row className="info">
                <Col span={24}><img src="/images/logo-white.png" alt="" className="image" /></Col>
                <Col span={24}><h1><strong>{String(walletBalanceETH).slice(0, 12)} {walletBalanceUnits}</strong></h1></Col>
                <Col span={12}><WalletOutlined /> {snippets.formatAddress(walletAddress)}</Col>
                <Col span={12}><DollarCircleOutlined /> ~ USD {parseFloat(String(walletBalanceUSD)).toFixed(2)}</Col>
            </Row>
        </div>
    );
};
