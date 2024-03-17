import React, { useEffect, useRef, useState } from "react";
import { Space, Table } from "antd";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const OderManagement = () => {
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const editMenu = (record) => {};
  const deleteMenu = (record) => {};
  const columns = [
    {
      title: "Mã sân",
      dataIndex: "createdId",
      key: "createdId",
      render: (createdId) => <span className="font-semibold">{createdId}</span>,
    },
    {
      title: "Tên sân",
      dataIndex: "code",
      key: "code ",
      render: (code) => <span className="font-semibold">{code}</span>,
    },
    {
      title: "Giờ thuê",
      dataIndex: "timer",
      key: "timer ",
      render: (timer) => <span className="font-semibold">{timer}</span>,
    },
    {
      title: "Ngày thuê",
      dataIndex: "date",
      key: "date ",
      render: (date) => <input type="date"></input>,
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
      code: "Sân Hà Nội",
      timer: "17h30",
      date: "15/02/2222",
    },
    {
      key: 2,
      createdId: "2",
      code: "Sân Sài Gòn",
      timer: "20h00",
      date: "15/02/2222",
    },
  ];
  const [pagination, setPagination] = useState({ pageIndex: 1, pageSize: 10 });
  const onTableChange = async (paginations) => {
    const { current, pageSize } = paginations;
    const paging = { ...pagination, pageIndex: current, pageSize };
    setPagination(paging);
  };
  const handleCancel = () => {
    setShowForm(false);
  };

  const handleAdd = () => {
    // Logic to add item
    setShowForm(false);
  };
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col bg-gray-100 w-full p-5 ">
        <div className=" bg-white w-full h-[50px] p-10 items-center rounded-lg flex justify-between">
          <span className="text-xl font-medium text-green-600">
            Danh sách đơn đặt
          </span>
          <div>
            <input
              className="outline-none px-2 py-1 border rounded-lg border-green-300"
              type="text"
              placeholder="Tìm kiếm"
            />
            {/* <button
            onClick={toggleForm}
            className="bg-green-600 text-white p-2 font-medium rounded-md hover:bg-green-300"
          >
            Tạo mới sân
          </button> */}
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

      {showForm && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center"
        >
          <form
            ref={formRef}
            className="w-[600px] bg-green-100 p-3 rounded-xl gap-5 flex flex-col "
          >
            <div className="flex flex-col ">
              <label htmlFor="id">Mã sân</label>
              <input
                type="text"
                name="id"
                className="border rounded-md p-1 outline-none"
                placeholder="Nhập mã sân"
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="name">Tên sân</label>
              <input
                type="text"
                name="name"
                className="border rounded-md p-1 outline-none"
                placeholder="Nhập tên sân"
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label htmlFor="name">Tình trạng sân</label>
              <input
                type="text"
                name="status"
                className="border rounded-md p-1 outline-none"
                placeholder="Nhập tình trạng sân"
              />
            </div>
            <div className="flex gap-x-3 items-center w-full justify-center">
              <button className="bg-red-500 text-white py-1 px-2 rounded-lg">
                Hủy
              </button>
              <button className="bg-green-500 text-white py-1 px-2 rounded-lg">
                Thêm
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OderManagement;
