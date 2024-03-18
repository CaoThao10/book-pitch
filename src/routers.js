import React from "react";
import ListSan from "./page/AdminDashboard/ListSan";

import OderManagement from "./page/AdminDashboard/OderManagement";
import OwnerManagement from "./page/AdminDashboard/OwnerManagement";
import RevenueManagement from "./page/AdminDashboard/RevenueManagement";
import HistoryManagement from "./page/AdminDashboard/HistoryManagement";
import Infomation from "./page/UserDashboard/Infomation";

import OderList from "./page/UserDashboard/OderList";

const routers = [
  {
    path: "/danh-sach-san",
    Conponent: () => <ListSan />,
  },
  {
    path: "/don-dat",
    Conponent: () => <OderManagement />,
  },
  {
    path: "/quan-ly-chu-san",
    Conponent: () => <OwnerManagement />,
  },
  {
    path: "/quan-ly-doanh-thu",
    Conponent: () => <RevenueManagement />,
  },
  {
    path: "/lich-su-don-dat",
    Conponent: () => <HistoryManagement />,
  },
  {
    path: "/thong-tin-ca-nhan",
    Conponent: () => <Infomation />,
  },
  {
    path: "/quan-ly-don-hang",
    Conponent: () => <OderList />,
  },
];

export default routers;
