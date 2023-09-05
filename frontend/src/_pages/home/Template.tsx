import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Space, theme } from "antd";
import { NavBreadcrumb } from "_components/document/body/header/nav";
import { Page } from "_components/document";

const { Content } = Layout;

const Template: React.FC = () => {
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
      <Space className="main" direction="vertical" style={{ padding: "24px" }}>
        <Row>
          <Col span={24}>
            <NavBreadcrumb />
          </Col>
          <Col span={24}>
            <Content
              style={{
                padding: 24,
                marginTop: 24,
                minHeight: 500,
                background: colorBgContainer,
              }}
            >
              <div>
                <h1>HOME PAGE</h1>
              </div>
            </Content>
          </Col>
        </Row>
      </Space>
    </Page>
  );
};

export { Template };
