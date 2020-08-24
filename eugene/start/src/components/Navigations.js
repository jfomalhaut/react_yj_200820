import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

const Navigation = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link to="./pages/intro">회사소개</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="./pages/business">사업소개</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="performance">사업실적</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navigation;
