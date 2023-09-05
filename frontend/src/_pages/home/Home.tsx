import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Space } from "antd";
import { Page } from "_components/document";

const { Content } = Layout;

const Home: React.FC = () => {

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

export { Home };
