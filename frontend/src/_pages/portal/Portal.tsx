import React, { useEffect, useState } from "react";
import { Col, Row, Space } from "antd";
import { PortalEmbedded } from "_components/document";

const Portal: React.FC = () => {

  const [pageTitle, setPageTitle] = useState<string>("");
  const [pageDescription, setPageDescription] = useState<string>("");
  const [pageKeywords, setPageKeywords] = useState<any>("");
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<any>("");
  const [pageAuthor, setPageAuthor] = useState<string>("");
  const [pageThumbnail, setPageThumbnail] = useState<string>("");
  const [pageTheme, setPageTheme] = useState<string>("");

  useEffect(() => {}, []);

  return (
    <PortalEmbedded
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
              <h1>The Embedded Portal</h1>
              <p>Lorem Ipsum paragraph</p>
          </Col>
        </Row>
      </Space>
    </PortalEmbedded>
  );
};

export { Portal };
