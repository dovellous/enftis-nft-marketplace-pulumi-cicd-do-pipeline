import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Layout, Row, Space, theme } from "antd";
import { NavBreadcrumb } from "_components/document/body/header/nav";
import { Page } from "_components/document";

const { Content } = Layout;

const Portal: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { userInfo } = useSelector((state: any) => state.auth);

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
      <Space className="main" style={{ padding: "0 24px 24px" }}>
        <Row>
          <Col span={12}>
            <NavBreadcrumb />
          </Col>
          <Col span={12}>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <div>
                <figure>{userInfo?.firstName.charAt(0).toUpperCase()}</figure>
                <span>
                  Welcome <strong>{userInfo?.firstName}!</strong> You can view
                  this page because you're logged in
                </span>
              </div>
            </Content>
          </Col>
        </Row>
      </Space>
    </Page>
  );
};

export { Portal };
