import { Row, Col, Carousel } from "antd";
import {
    CaretDownOutlined,
    CaretUpOutlined,
    DollarCircleOutlined,
    GoldFilled,
    RocketFilled,
    SketchOutlined,
    TrophyOutlined,
    WalletOutlined,
} from "@ant-design/icons";

import { snippets } from "_helpers";
import { useWeb3DataContext } from "_services/providers";
import { useEffect, useState } from "react";
import { CarouselEffect, DotPosition } from "antd/es/carousel";
import CountUp from "react-countup";

const contentStyle: React.CSSProperties = {
    height: 200,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    margin: 0,
};

interface StakingRewardsCardWrapperProps {
    autoplay?: boolean;
    effect?: CarouselEffect | undefined;
    dotPosition?: DotPosition | undefined;
    children?: React.ReactNode;
}

export const StakingRewardsCardWrapper: React.FC<StakingRewardsCardWrapperProps> = ({
    children,
    ...props
}): any | null => {

    const {
        autoplay, effect, dotPosition
    } = props;

    const [isReady, setIsReady] = useState<boolean>(false);

    const calculateUSDAmount: any = (): void => {

    };

    useEffect(() => {

        setTimeout(() => {

            setIsReady(true);

        }, 3000);

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
            <Row className="slider-wrapper">
                <Col span={24}>
                    {isReady ? (
                        <>
                            <Carousel
                                autoplay={autoplay || true}
                                effect={effect || 'scrollx'}
                                autoplaySpeed={10000}
                                arrows={true}
                                dotPosition={dotPosition || 'bottom'}>
                                <div className="mining-slide ">
                                    <h4 className="slide-title">Virtual Mining Rate</h4>
                                    <span className="slide-value ">
                                        <CaretUpOutlined /> 
                                        <strong>
                                            0.00
                                            <CountUp 
                                                delay={1} 
                                                redraw={true} 
                                                useEasing  
                                                end={425} 
                                                separator="," 
                                                easingFn={snippets.easingFunctions.easeInCubic}
                                            /> 
                                            <sup>$JLX/hr</sup></strong>
                                    </span>
                                    <div className="slide-footer flex up">
                                        <div>
                                            <GoldFilled />&nbsp;&nbsp;Change:<span className="change"> +4.52%</span>
                                        </div>
                                        <div>
                                            <RocketFilled />&nbsp;&nbsp;Boosters:<span className="change"> x5</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mining-slide">
                                    <h4 className="slide-title">Total Mined $JLX Tokens</h4>
                                    <span className="slide-value">
                                        <SketchOutlined /> 
                                        <strong>
                                            <CountUp delay={1} redraw={true} useEasing  end={589001} separator="," / >
                                                <sup>$JLX</sup>
                                                </strong>
                                    </span>
                                    <span className="slide-footer up">Base Earning Rate: <span className="value"><CountUp delay={1} redraw={true} useEasing  end={2} separator="," />.<sup><u><CountUp delay={1} redraw={true} useEasing  end={325} separator="," /></u></sup></span> $JLX/hr </span>
                                </div>
                                <div className="mining-slide">
                                    <h4 className="slide-title">Global Ranking</h4>
                                    <span className="slide-value down">
                                        <TrophyOutlined /> 
                                        <strong>
                                        <CountUp delay={1} redraw={true} useEasing  end={932432} separator="," / >
                                        </strong>
                                    </span>
                                    <span className="slide-footer">Out of <CountUp delay={1} redraw={true} useEasing  end={23445672} separator="," /> total users.</span>
                                </div>
                                <div className="mining-slide">
                                    <h4 className="slide-title">Engagement</h4>
                                    <div className="slide-value  flex">
                                        <span className="streak">
                                            <strong>
                                            <CountUp delay={1} redraw={true} useEasing  end={14} separator="," / >
                                            </strong><br />
                                            <small>STREAK</small>
                                        </span>
                                        <span className="streak">
                                            <strong>
                                            <CountUp delay={1} redraw={true} useEasing  end={2} separator="," / >
                                            </strong><br />
                                            <small>DAYS OFF</small>
                                        </span>
                                    </div>
                                    <span className="slide-footer">Concecutive number of days checking in.</span>
                                </div>
                            </Carousel>
                        </>
                    ) : (
                        <div className="wallet-not-connected">
                            <img alt="" src={'/assets/images/loaders/ripple.svg'} width={132} height={132} />
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
};
