import { NavLink } from "react-router-dom";
import { Layout, Row, Col, Space, Button, Input, Divider, Popover, QRCode, Typography } from "antd";
import {
  InstagramFilled,
  YoutubeFilled,
  TwitterOutlined,
  MediumOutlined,
  FacebookFilled,
  GithubOutlined,
} from "@ant-design/icons";
import "./footer.scss";
import { RecentCollections } from "./widgets";
import DownloadAppBtn from "_components/ui/buttons/download-app/DownloadAppBtn";

const { Footer } = Layout;

type FooterProps = {
  theme?: string;
  children?: React.ReactNode;
};

const downloadAppBtnAndroid = (
  <Row style={{width: '100%'}}>
    <Col span={8}>
      <QRCode
        value={'https://play.google.com/en/com.enftis.marketplace'}
        errorLevel="H"
        size={205}
        iconSize={205 / 4}
        icon="/assets/favicons/favicon-96x96.png"
      />
    </Col>
    <Col span={1}><Divider type="vertical" style={{height: '100%'}} /></Col>
    <Col span={15} className="download-app android">
      <Space direction="vertical" align="center" style={{ width: '100%' }}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Download on Google PlayStore
        </Typography.Title>
        <img src="" alt="" style={{width: "100%", margin: "auto"}} />
        <DownloadAppBtn
          fill={"#4f5182"}
          fillHover={"#614efa"}
          type={"android"}
        />
      </Space>
    </Col>
  </Row>
);

const MainFooter: React.FC<FooterProps> = ({
  children,
  ...props
}): any | null => {
  const { theme } = props;

  return (
    <>
      <Footer className={theme || "dark"}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={8} xl={8}>
            <Space
              direction="vertical"
              size={25}
              style={{ display: "flex" }}
              className="pr-100px"
            >
              <img width={200} src="/images/logo.png" alt="" />
              <span className="">
                Enftis.com: The world’s modern and fastest growing digital
                marketplace for non-fungible tokens (NFTs), generative content,
                crypto collectibles, gaming, virtual worlds and all things
                digital. Create, List, Buy, sell, and discover exclusive digital
                items. Kindly subscribe to our monthly newsletter.
              </span>

              <Space.Compact style={{ width: "100%" }}>
                <Input defaultValue="Enter email address" size="large" />
                <Button type="primary" size="large" className="subscribe">
                  Subscribe
                </Button>
              </Space.Compact>
              
              <Row justify="space-between">
                <Col span={24}>
                  <h4>Follow us on social media platforms</h4>
                </Col>
                <Col span={4}>
                  <Button
                    className="follow-youtube"
                    type="primary"
                    shape="default"
                    icon={<YoutubeFilled />}
                    size={"large"}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    className="follow-twitter"
                    type="primary"
                    shape="default"
                    icon={<TwitterOutlined />}
                    size={"large"}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    className="follow-facebook"
                    type="primary"
                    shape="default"
                    icon={<FacebookFilled />}
                    size={"large"}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    className="follow-instagram"
                    type="primary"
                    shape="default"
                    icon={<InstagramFilled />}
                    size={"large"}
                  />
                </Col>
                <Col span={4}>
                  <Button
                    className="follow-medium"
                    type="primary"
                    shape="default"
                    icon={<MediumOutlined />}
                    size={"large"}
                  />
                </Col>
                <Col span={4}>
                  <Popover content={downloadAppBtnAndroid} title="Title" trigger="hover" placement="topRight">
                    <Button
                      className="follow-github"
                      type="primary"
                      shape="default"
                      icon={<GithubOutlined />}
                      size={"large"}
                    />
                  </Popover>
                </Col>
              </Row>

              <Row justify="space-between">
                <Col span={24}>
                  <h4>Download our mobile app</h4>
                </Col>
                <Col span={7}>
                  <Popover content={downloadAppBtnAndroid} trigger="hover" placement="topRight">
                    <Button className={`antx-btn antx-btn-download-app antx-transparent android`}>
                      <DownloadAppBtn
                        fill={"#4f5182"}
                        fillHover={"#614efa"}
                        type={"android"}
                        />
                    </Button>
                  </Popover>
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                  <DownloadAppBtn
                    fill={"#4f5182"}
                    fillHover={"#614efa"}
                    type={"ios"}
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                  <DownloadAppBtn
                    fill={"#4f5182"}
                    fillHover={"#614efa"}
                    type={"windows"}
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </Col>
              </Row>

            </Space>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={4} lg={4} xl={4}>
            <Space direction="vertical" size={15} style={{ display: "flex" }}>
              <h2>Marketplace</h2>
              <ul className="footer-links">
                <li>
                  <NavLink className="link-item" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Advanced Search
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Create an NFT
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Explore NFTs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Top Rated NFTs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Top Rated Buyers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Top Rated Sellers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    All Authors
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    NFT Ranking
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Live Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Normal Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Dutch Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Reverse Auction
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Smart Contracts
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Audit Reports
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    DAO & Governance
                  </NavLink>
                </li>
              </ul>
            </Space>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={4} lg={4} xl={4}>
            <Space direction="vertical" size={15} style={{ display: "flex" }}>
              <h2>Collections</h2>
              <ul className="footer-links">
                <li>
                  <NavLink className="link-item" to="/">
                    Generative / AI Content
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Art & Photoraphy
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    All Collectibles
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Domain Names
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Virtual Worlds
                  </NavLink>
                  ,{" "}
                  <NavLink className="link-item" to="/">
                    Gaming NFTs
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Real World Assets (RWA)
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Art
                  </NavLink>
                  ,{" "}
                  <NavLink className="link-item" to="/">
                    Music
                  </NavLink>
                  ,{" "}
                  <NavLink className="link-item" to="/">
                    Sports
                  </NavLink>
                </li>
              </ul>

              <h2>Resources</h2>
              <ul className="footer-links">
                <li>
                  <NavLink className="link-item" to="/">
                    Support Centre
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Developer Centre
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Download App
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Knowledge Base
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Our Community
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Platform Status
                  </NavLink>
                </li>
              </ul>
            </Space>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={4} lg={4} xl={4}>
            <Space direction="vertical" size={15} style={{ display: "flex" }}>
              <h2>Company</h2>
              <ul className="footer-links">
                <li>
                  <NavLink className="link-item" to="/">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Whitepaper
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Roadmap
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Our Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Help & FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Contact Us
                  </NavLink>
                </li>
              </ul>

              <h2>My Account</h2>
              <ul className="footer-links">
                <li>
                  <NavLink className="link-item" to="/">
                    My Wallet
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    My Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    My Collection
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    My Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink className="link-item" to="/">
                    Activity History
                  </NavLink>
                </li>
              </ul>
            </Space>
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={4} lg={4} xl={4}>
            <Space direction="vertical" size={20} style={{ display: "flex" }}>
              <h2>Recent NFT Drops</h2>
              <RecentCollections />
              <img src="/images/map.png" alt="" width="100%" className="footer-map" />
            </Space>
          </Col>
        </Row>
        <Divider dashed />
        <Row>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className="copyright-info"
          >
            &copy; {new Date().getFullYear()}. Enftis Marketplace. All Rights
            Reserved. Trademarks and brands are the property of their respective
            owners.
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="legal-links">
            <NavLink className="link-item" to="/">
              Terms
            </NavLink>
            <Divider type="vertical" />
            <NavLink className="link-item" to="/">
              Privacy
            </NavLink>
            <Divider type="vertical" />
            <NavLink className="link-item" to="/">
              Cookies
            </NavLink>
            <Divider type="vertical" />
            <NavLink className="link-item" to="/">
              Sitemap
            </NavLink>
          </Col>
        </Row>
      </Footer>
    </>
  );
};

export { MainFooter };
