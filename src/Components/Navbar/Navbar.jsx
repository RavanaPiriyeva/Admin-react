import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="demo-logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
  </Header>
  );
};

export default Navbar;
