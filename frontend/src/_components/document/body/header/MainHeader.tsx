import { Layout, Affix } from "antd";
import { NavBar } from "./nav";
import "./header.scss";

const { Header } = Layout;

const MainHeader: React.FC = () => {
  return (
    <>
      <Affix offsetTop={0}>
        <Header className="dark" style={{ display: "flex", alignItems: "center" }}>
          <NavBar />
        </Header>
      </Affix>
    </>
  );
};

export { MainHeader };
