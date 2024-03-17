import React, { useEffect, useRef, useState } from "react";
import { Space, Table, Button, Modal, Form, Input, Col, Row } from "antd";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const OwnerManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const [form] = Form.useForm();
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
  };
  const editMenu = (record) => {};
  const deleteMenu = (record) => {};
  const columns = [
    {
      title: "Mã số",
      dataIndex: "createdId",
      key: "createdId",
      render: (createdId) => <span className="font-semibold">{createdId}</span>,
    },
    {
      title: "Tên chủ sân",
      dataIndex: "code",
      key: "code ",
      render: (code) => <span className="font-semibold">{code}</span>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone ",
      render: (phone) => <span className="font-semibold">{phone}</span>,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity ",
      render: (quantity) => <span className="font-semibold">{quantity}</span>,
    },

    {
      title: "Thao tác",
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => editMenu(record)}>
            <EditOutlined className="text-[#263a29] text-2xl" />
          </button>
          <button onClick={() => deleteMenu(record)}>
            {" "}
            <DeleteOutlined className="text-red-500 text-2xl" />
          </button>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      key: 1,
      createdId: "1",
      code: "Nguyen Van A",
      phone: "021545848",
      quantity: "5",
    },
    {
      key: 2,
      createdId: "2",
      code: "Nguyen Van B",
      phone: "021545848",
      quantity: "5",
    },
  ];
  const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 10 });
  const onTableChange = async (paginations) => {
    const { current, pageSize } = paginations;
    const paging = { ...pagination, pageIndex: current, pageSize };
    setPagination(paging);
  };

  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col bg-gray-100 w-full p-5 ">
        <div className=" bg-white w-full h-[50px] p-10 items-center rounded-lg flex justify-between">
          <span className="text-xl font-medium text-green-600">
            Danh sách chủ sân
          </span>
          <div className="flex gap-x-3">
            <input
              className="outline-none px-2 py-1 border rounded-lg border-green-300"
              type="text"
              placeholder="Tìm kiếm"
            />
            <button
              onClick={showModal}
              className="bg-green-600 text-white p-2 font-medium rounded-md hover:bg-green-300"
            >
              Thêm mới chủ sân
            </button>
          </div>
        </div>
        <div className=" w-full">
          <Table
            columns={columns}
            dataSource={dataSource}
            pageIndex={pagination.pageIndex}
            pagination={{
              current: pagination.pageIndex,
              // total: listData?.result?.total,
              pageSize: pagination.pageSize,
            }}
            onChange={onTableChange}
            scroll={{ x: true }}
          />
        </div>
      </div>

      <div className="modal">
        <Modal
          className="headerModal"
          title="Tạo mới sân"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              ĐÓNG
            </Button>,
            <Button
              htmlType="submit"
              // type="primary"
              // loading={loading}
              form="form"
              name="form"
            >
              Tạo mới
            </Button>,
          ]}
        >
          <div className="ant_body">
            <Form layout="vertical" form={form} name="form" onFinish={onFinish}>
              <Row>
                <Col span={24}>
                  <Form.Item name="id" hidden>
                    <Input hidden />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label="Tên chủ sân"
                    name="name"
                    rules={[
                      { required: true, message: "Vui lòng nhập họ tên" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Địa chỉ" name="additionalAmount">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Số điện thoại" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default OwnerManagement;
