import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import { MailOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme , MenuProps, MenuTheme,Switch} from "antd";
const { Header, Content, Sider } = Layout;



function getItem(label, key, icon, children, theme) {
    return {
      key,
      icon,
      children,
      label,
      theme,
    };
  }

const items = [
    getItem(<Link to="/catagories">Catogory</Link>, '5'),
    getItem(<Link to="/">Dashboard</Link>, '6'),
  ];

const Sidebar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider
      width={200}
      style={{
        background: colorBgContainer,
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100vh",
          borderRight: 0,
        }}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;





