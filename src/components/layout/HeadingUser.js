import React from "react";
import { NavLink } from "react-router-dom";
// import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="/thong-tin-ca-nhan">
        Thông tin cá nhân
      </a>
    ),
  },
];

const HeadingUser = () => {
  return (
    <div className=" w-full h-[60px] flex justify-between items-center px-8 bg-green-200">
      <div className="h-full flex items-center">
        <NavLink className="h-[60px]" to={"/"}>
          <img className="object-cover h-full" src="/logo.png" alt="" />
        </NavLink>
        <span className="pl-4 text-green-600 text-xl font-semibold">
          Goal Line Arena
        </span>
      </div>
      <div className="h-full flex items-center gap-x-7">
        <div className="flex gap-x-5 text-green-600  text-xl font-semibold">
          <NavLink className="hover:text-green-400" to={"/"}>
            Trang chủ
          </NavLink>
          <NavLink className="hover:text-green-400" to={"/about"}>
            Giới thiệu
          </NavLink>
          <NavLink className="hover:text-green-400" to={"/san"}>
            Đặt sân
          </NavLink>
          <NavLink className="hover:text-green-400" to={"/bang-gia"}>
            Bảng giá
          </NavLink>
        </div>
        <div className="h-full flex items-center">
          <span className="pr-4 text-green-600 text-xl font-semibold">
            Welcome
          </span>
          <div>
            {/* <img
              className="object-cover h-[40px] w-[40px] rounded-full"
              src="/avatar.jpg"
              alt=""
            /> */}
            <Dropdown menu={{ items }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <img
                    className="object-cover h-[40px] w-[40px] rounded-full"
                    src="/avatar.jpg"
                    alt=""
                  />
                  {/* <DownOutlined /> */}
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingUser;
