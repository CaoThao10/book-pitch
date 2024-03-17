import React, { useState } from "react";
import HeadingUser from "../../components/layout/HeadingUser";
import Footer1 from "../../components/layout/Footer1";
import { Space, Table } from "antd";

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
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address ",
    render: (address) => <span className="font-semibold">{address}</span>,
  },
  {
    title: "Kích thước",
    dataIndex: "size",
    key: "size ",
    render: (size) => <span className="font-semibold">{size}</span>,
  },
  {
    title: "Giá thuê / giờ",
    dataIndex: "price",
    key: "price ",
    render: (price) => <span className="font-semibold">{price}</span>,
  },
  {
    title: "Thao tác",
    render: (_, record) => (
      <Space size="middle">
        <button className="bg-green-400 px-2 py-1 rounded-md text-white hover:bg-green-200">
          Đặt ngay
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
    address: "Hà Đông - Hà Nội",
    size: "15*10",
    price: "350.000 vnđ/h",
  },
  {
    key: 2,
    createdId: "2",
    code: "Sân Sài Gòn",
    address: "Thanh Xuân - Hà Nội",
    size: "15*10",
    price: "350.000 vnđ/h",
  },
  {
    key: 3,
    createdId: "3",
    code: "Sân Sài Gòn",
    address: "Thanh Xuân - Hà Nội",
    size: "15*10",
    price: "350.000 vnđ/h",
  },
  {
    key: 4,
    createdId: "4",
    code: "Sân Sài Gòn",
    address: "Thanh Xuân - Hà Nội",
    size: "15*10",
    price: "350.000 vnđ/h",
  },
];

const PricePage = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 10,
  });
  const onTableChange = async (paginations) => {
    const { current, pageSize } = paginations;
    const paging = { ...pagination, pageIndex: current, pageSize };
    setPagination(paging);
  };
  return (
    <div>
      <HeadingUser></HeadingUser>
      <div className="mt-10  p-10">
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
      <Footer1></Footer1>
    </div>
  );
};

export default PricePage;
