import React, { MouseEventHandler, useEffect } from "react";
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

import { LoginWidgetITypes } from ".";
import "./LoginWidget.scss";
import { RootState, loginWithEmailAndPassword, loginWithGoogle, useAppDispatch } from "_services/providers/redux";
import { useDrawersDataContext } from "_services/providers";

export const LoginWidget: React.FC<LoginWidgetITypes> = ({
  children,
  ...props
}): any | null => {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  
  const { showLogo, showTitle } = props;

  const { authLoading, loggedIn, user, errors } = useSelector((state:RootState) => state.auth);

  // const {
  //   setLoginDrawerActiveStatus,
  // } = useDrawersDataContext()

  // redirect authenticated user to profile screen.
  useEffect(() => {

    if (loggedIn && user) {
      console.log("USER_LOGGED_IN", user);
      //navigate('/user/profile')
      //setLoginDrawerActiveStatus(false);
    }
    
  }, [loggedIn, navigate, user])

  const onFinish: any = (formData: any): void => {

    const email: string = formData?.email;
    const password: string = formData?.password;

    if (!email || email === null || email === "" || !password || password === null || password === "") {
      return;
    }

    signInWithPassword(formData);

  }

  const signInWithPassword: any = (formData: any): void => {

    dispatch(loginWithEmailAndPassword(formData));

  }

  const signInWithGoogle: any = (e: MouseEventHandler<HTMLElement>): void => {
    dispatch(loginWithGoogle(false));
  }

  const signInWithWallet: any = (e: MouseEventHandler<HTMLElement>): void => {

  }

  return (
    <>
      <Space direction="vertical" size={30} style={{ display: "flex" }}>
        {showLogo && (
        <Row>
          <Col flex="auto" />
          <Col>
            <img width={200} src="/images/logo.png" alt="" />
          </Col>
          <Col flex="auto" />
        </Row>
        )}
        {showTitle && (
        <Row>
          <Col flex="auto" />
          <Col>
            <h1 className="text-center">Login</h1>
          </Col>
          <Col flex="auto" />
        </Row>
        )}

        {errors && (

          <>
         
            <Alert
              message={errors}
              type="error"
              showIcon
              closable
            />
          
          </>
        
        )}
         

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Username!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="Username"
              type="text"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              size="large"
              placeholder="Password"
              type="password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <NavLink
              className="align-right"
              to="/auth/forgot-password"
            >
              Forgot password
            </NavLink>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={authLoading}
              disabled={authLoading}
              className="login-form-button"
              size="large"
            >
              {authLoading ? <>Please wait...</> : <>Log In</>}
            </Button>
          </Form.Item>
          <Divider>or continue with</Divider>
          <Row justify="space-evenly">
            <Col xs={24} sm={11} flex="auto">
              <Button
                size="middle"
                onClick={signInWithGoogle}
                className={`w-100`}
              >
                <GoogleOutlined />
                Google Signin
              </Button>
            </Col>
            <Col xs={24} sm={1} md={1} lg={1} xl={1} >&nbsp;</Col>
            <Col xs={24} sm={11} flex="auto">
              <Button
                loading={authLoading}
                size="middle"
                onClick={signInWithWallet}
                className={`w-100`}
              >
                <WalletOutlined />
                Connect Wallet
              </Button>
            </Col>
          </Row>
          <Divider />
          <Form.Item className="mt-2">
            <span>Don't have an account?</span>
            <NavLink
              className="align-right"
              to="/auth/sign-up"
            >
              Register Now
            </NavLink>
          </Form.Item>
          <Row>
            <Col span={24}>
              <span className="legal-small-print">
              By using Enftis you accept the Terms of Service and Privacy Policy
              </span>
            </Col>
          </Row>
        </Form>
      </Space>
    </>
  );
};
