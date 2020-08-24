import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const Sidebar = () => {
  return (
    <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="소개">
            <Link to="intro"></Link>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="연혁">
            <Link to="history"></Link>
          </SubMenu>
          <SubMenu
            key="sub3"
            icon={<NotificationOutlined />}
            title="대표이사 메세지"
          />
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
    </Layout>
  );
};

export default Sidebar;
