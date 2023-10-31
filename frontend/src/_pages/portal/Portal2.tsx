import React, { useEffect, useState } from "react";
import { Col, Row, Space } from "antd";
import { PortalStandalone } from "_components/document";

const Portal2: React.FC = () => {

  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageKeywords, setPageKeywords] = useState<any>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<any>("");
  const [pageAuthor, setPageAuthor] = useState<string>("");
  const [pageThumbnail, setPageThumbnail] = useState<string>("");
  const [pageTheme, setPageTheme] = useState<string>("");

  useEffect(() => { }, []);

  return (
    <PortalStandalone
      pageTitle={pageTitle}
      pageDescription={pageDescription}
      pageKeywords={pageKeywords}
      pageBreadcrumbs={pageBreadcrumbs}
      pageAuthor={pageAuthor}
      pageThumbnail={pageThumbnail}
      theme={pageTheme}
      hideHeaderAndFooter={false}
    >
      <Space className="main" direction="vertical">
        <Row>
          <Col span={24}>
            <h1>The Standalone Portal</h1>
            <p>Lorem Ipsum paragraph</p>
          </Col>
        </Row>
      </Space>
    </PortalStandalone>
  );
};

export { Portal2 };
