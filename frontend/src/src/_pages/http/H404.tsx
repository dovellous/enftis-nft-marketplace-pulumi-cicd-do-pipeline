import React from "react";

import {
  Col,
  Row,
  Card
} from "antd";

import { PageRFCProps } from '../../_types';

import { HTTP404Widget } from "_components/widgets/http";

import "./http.scss";

const H404: React.FC<PageRFCProps> = ({
  children,
  ...props
}): any | null => {

  const { theme } = props;

  return (
    <>
      <Row className="w-100 my-10">
        <Col flex="auto" />
        <Col className="w-100 max-w-400" xs={23} sm={16} md={12} lg={10} xl={8} xxl={6} >
          <Card>
            <HTTP404Widget />
          </Card>
        </Col>
        <Col flex="auto" />
        </Row>
    </>
  );
};

export { H404 };
