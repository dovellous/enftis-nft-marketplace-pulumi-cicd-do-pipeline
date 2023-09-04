import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Col,
  Row,
  Card
} from "antd";

import { PageRFCProps } from '../../_types';
import { LoginWidget } from "../../_components/widgets";

import "./login.scss";
import { Page } from "_components/document";

const Login: React.FC<PageRFCProps> = ({
  children,
  ...props
}): any | null => {

  const { } = props;

  const authUser = true; // useSelector((appSate: any) => appSate.auth.user);
  const navigate = useNavigate();

  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageDescription, setPageDescription] = useState<string>('');
  const [pageKeywords, setPageKeywords] = useState<any>('');
  const [pageBreadcrumbs, setPageBreadcrumbs] = useState<any>('');
  const [pageAuthor, setPageAuthor] = useState<string>('');
  const [pageThumbnail, setPageThumbnail] = useState<string>('');
  const [pageTheme, setPageTheme] = useState<string>('');

  const gotoHomepage: Function = (): void => {
    navigate('/');
  };

  useEffect(() => {
    if (authUser) {
      if(false){
        gotoHomepage();
      }
    }
  }, []);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <Page
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
        pageBreadcrumbs={pageBreadcrumbs}
        pageAuthor={pageAuthor}
        pageThumbnail={pageThumbnail}
        theme={pageTheme}
      >
      <Row className="w-100 my-10">
        <Col flex="auto" />
        <Col className="w-100 max-w-400" xs={23} sm={16} md={12} lg={10} xl={8} xxl={6} >
          <Card>
            <LoginWidget showLogo showTitle />
          </Card>
        </Col>
        <Col flex="auto" />
        </Row>
      </Page>
    </>
  );
};

export { Login };
