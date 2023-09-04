
import { Space } from "antd";
import { NavMenu, NavMenuRight } from "./";

const NavBar: React.FC = () => {
  return (
    <>
        <Space direction="horizontal" size={50} className="antx-navbar-wrapper">

          <img className="nav-logo" src="/images/logo-white.png" alt="" />

          <NavMenu />

          <NavMenuRight />

        </Space>
    </>
  );
};
export { NavBar };
