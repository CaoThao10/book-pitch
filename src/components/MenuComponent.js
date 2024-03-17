import React, { useState } from "react";
import {
  // AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Flex, Menu } from "antd";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import routers from "../routers";
import Heading from "./layout/HeadingAd";
import "../index.css";
import HeadingAd from "./layout/HeadingAd";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MenuComponent = () => {
  const items = [
    getItem("Danh sách sân", "/danh-sach-san", <PieChartOutlined />),

    getItem("Quản lý đơn đặt", "/don-dat", <DesktopOutlined />),
    getItem("Quản lý chủ sân", "/quan-ly-chu-san", <ContainerOutlined />),
    getItem("Quản lý doanh thu", "/quan-ly-doanh-thu", <ContainerOutlined />),
    getItem("Lịch sử đơn đặt", "/lich-su-don-dat", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ];
  const navigate = useNavigate();
  const showContentMenu = (routes) => {
    let result = null;
    if (routes) {
      result = routes.map((item, index) => {
        return (
          <Route key={index} path={item.path} element={item.Conponent()} />
        );
      });
    }
    return result;
  };
  const onClick = (e) => {
    console.log("click ", e);
    navigate(e.key);
  };
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <HeadingAd></HeadingAd>
      <div
        className="content-body"
        // style={{
        //   width: 256,

        // }}
      >
        <Menu
          className="max-width"
          // style={{
          //   width: 256,
          // }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          onClick={onClick}
          inlineCollapsed={collapsed}
          items={items}
        />
        <Routes>{showContentMenu(routers)}</Routes>
      </div>
      <Button
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </>
  );
};

export default MenuComponent;
