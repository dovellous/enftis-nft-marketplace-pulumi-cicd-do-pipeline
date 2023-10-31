import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space } from "antd";
import { Page } from "_components/document";

import {
  DesktopOutlined,
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const Portal: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageKeywords, setPageKeywords] = useState<any>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<any>("");
  const [pageAuthor, setPageAuthor] = useState<string>("");
  const [pageThumbnail, setPageThumbnail] = useState<string>("");
  const [pageTheme, setPageTheme] = useState<string>("");

  useEffect(() => {}, []);

  return (
    <Page
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageKeywords={pageKeywords}
      pageBreadcrumbs={pageBreadcrumbs}
      pageAuthor={pageAuthor}
      pageThumbnail={pageThumbnail}
      theme={pageTheme}
      hideHeaderAndFooter={false}
    >
      <Space className="main" direction="vertical" style={{ padding: 0 }}>
        <Row>
          <Col span={24}>
            <Content
              style={{
                padding: 0,
                margin: 0,
                minHeight: 500,
                background: "transparent",
              }}
            >
              {/*         */}

              <Layout style={{ minHeight: "100vh" }}>
                <Sider
                  collapsible
                  collapsed={collapsed}
                  onCollapse={(value) => setCollapsed(value)}
                >
                  <div className="demo-logo-vertical" />
                  <Menu
                    theme="light"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                  />
                </Sider>
                <Layout>
                  <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                      type="text"
                      icon={
                        collapsed ? (
                          <MenuUnfoldOutlined />
                        ) : (
                          <MenuFoldOutlined />
                        )
                      }
                      onClick={() => setCollapsed(!collapsed)}
                      style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                      }}
                    />
                  </Header>
                  <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                      <Breadcrumb.Item>User</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                      style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                      }}
                    >
                      Bill is a cat.
                    </div>
                  </Content>
                  <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2023 Created by Ant UED
                  </Footer>
                </Layout>
              </Layout>

              {/*         */}
            </Content>
          </Col>
        </Row>
      </Space>
    </Page>
  );
};

export { Portal };
