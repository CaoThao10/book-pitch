import React, { useState } from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from "antd";
import Footer1 from "../../components/layout/Footer1";
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const Pitch = () => {
  return (
    <div>
      <HeadingUser></HeadingUser>
      <div className="grid grid-cols-3 gap-5 mx-[100px] pt-10">
        <div className="col-span-2 w-[800px]">
          <Form
            className="bg-green-100 py-5 flex flex-col rounded-xl "
            {...formItemLayout}
            variant="filled"
            style={
              {
                //   maxWidth: 600,
              }
            }
          >
            <Form.Item>
              <span className="text-xl text-green-500 font-medium pl-[50%]">
                Thông tin sân
              </span>
            </Form.Item>
            <Form.Item
              label="Tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên sân!",
                },
              ]}
            >
              <Input className="bg-white" />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập địa chỉ!",
                },
              ]}
            >
              <Input className="bg-white" />
            </Form.Item>

            <Form.Item
              label="Ngày thuê"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập ngày thuê!",
                },
              ]}
            >
              <DatePicker className="w-full bg-white" />
            </Form.Item>

            <Form.Item
              label="Thời gian thuê"
              name="time"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập thời gian!",
                },
              ]}
            >
              <Input className="bg-white" />
            </Form.Item>
          </Form>
        </div>
        <div className="col-span-1">
          <Form
            className="bg-green-100 py-5 flex flex-col rounded-lg "
            {...formItemLayout}
            variant="filled"
            style={
              {
                //   maxWidth: 600,
              }
            }
          >
            <Form.Item>
              <span className="text-xl text-green-500 font-medium pl-5">
                Thông tin cá nhân
              </span>
            </Form.Item>
            <Form.Item
              label="Họ tên"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập họ tên!",
                },
              ]}
            >
              <Input className="bg-white" />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input className="bg-white" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                },
              ]}
            >
              <Input className="bg-white" />
            </Form.Item>

            <Form.Item
              label="Địa chỉ"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập địa chỉ!",
                },
              ]}
            >
              <Mentions className="bg-white" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16,
              }}
            >
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer1></Footer1>
    </div>
  );
};

export default Pitch;
