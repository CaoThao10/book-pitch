import React from "react";
import ListSan from "./page/AdminDashboard/ListSan";

import OderManagement from "./page/AdminDashboard/OderManagement";
import OwnerManagement from "./page/AdminDashboard/OwnerManagement";
import RevenueManagement from "./page/AdminDashboard/RevenueManagement";
import HistoryManagement from "./page/AdminDashboard/HistoryManagement";

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
];

export default routers;
