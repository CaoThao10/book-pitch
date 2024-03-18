import React, { useState } from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import { Button, Flex, Menu } from "antd";
import {
  // AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import routers from "../../routers";
import { Route, Routes } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const Infomation = () => {
  const items = [
    getItem("Thông tin cá nhân", "/thong-tin-ca-nhan", <DesktopOutlined />),
    getItem("Quản lý đơn hàng", "/quan-ly-don-hang", <ContainerOutlined />),
  ];
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
    //  navigate(e.key);
  };
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <HeadingUser></HeadingUser>
      <div className="my-5">
        <span className="text-2xl font-semibold text-green-400 mx-[200px] ">
          Thông tin cá nhân
        </span>
      </div>
      <div className="grid grid-cols-3 mx-[200px]">
        <div className="col-span-1">
          <div className="">
            <Menu
              className="max-width"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              onClick={onClick}
              inlineCollapsed={collapsed}
              items={items}
            />
            <Routes>{showContentMenu(routers)}</Routes>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid-cols-2 grid gap-10">
            <div className="flex-col flex w-full gap-y-3">
              <span className="max-w-full">Họ tên</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full gap-y-3">
              <span className="">Email</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
          </div>
          <div className="grid-cols-2 grid gap-10">
            <div className="flex-col flex w-full gap-y-3">
              <span className="max-w-full">Điện thoại</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full gap-y-3">
              <span className="">Địa chỉ</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
          </div>
          <div className="grid-cols-3 grid gap-10">
            <div className="flex-col flex w-full gap-y-3">
              <span className="max-w-full">Tỉnh/Thành phố</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full gap-y-3">
              <span className="">Quận/huyện</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
            <div className="flex flex-col w-full gap-y-3">
              <span className="">Xã/phường</span>
              <input
                className="border w-full rounded-md outline-none py-1 px-2"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
