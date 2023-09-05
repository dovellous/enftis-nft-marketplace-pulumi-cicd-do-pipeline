import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
const NavBreadcrumb: React.FC = () => {
  return (
    <Breadcrumb
      items={[
        {
          href: "",
          title: <HomeOutlined />,
        },
        {
          href: "",
          title: (
            <>
              <span>Application List</span>
            </>
          ),
        },
        {
          title: "Application",
        },
      ]}
    />
  );
};

export { NavBreadcrumb };
