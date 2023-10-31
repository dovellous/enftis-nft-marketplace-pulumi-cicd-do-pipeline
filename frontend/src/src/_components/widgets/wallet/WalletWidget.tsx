import React, { MouseEventHandler, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  LockOutlined,
  UserOutlined,
  WalletOutlined,
  GoogleOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone
} from "@ant-design/icons";

import {
  Button,
  Checkbox,
  Form,
  Input,
  Col,
  Row,
  Divider,
  Space,
  Alert,
} from "antd";


import { WalletWidgetITypes } from ".";
import "./WalletWidget.scss";

const WalletWidget: React.FC<WalletWidgetITypes> = ({
  children,
  ...props
}): any | null => {

  return (
    <>
    WALLET WIDGET
    </>
  );
};

export { WalletWidget };
