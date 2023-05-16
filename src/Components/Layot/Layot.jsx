import React from 'react'
import Navbar from "../Navbar/Navbar";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Sidebar from "../Sidebar/Sidebar";
//import Sidebar from "../../Components/Sidebar/Sidebar";
const { Content } = Layout;
const Layot = ({children}) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <div>
      <Layout>
        <Navbar />

        <Layout>
          <Sidebar />{" "}
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
                   {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}

export default Layot