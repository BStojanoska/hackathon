import DashboardStats from "./components/DashboardStats";
import AmountStats from "./components/AmountStats";
import PageStats from "./components/PageStats";

import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserChannels from "./components/UserChannels";
import LineChart from "./components/LineChart";
import LineChart2 from "./components/LineChart2";
import BarChart from "./components/BarChart";
import BarChart2 from "./components/BarChart2";
import DashboardTopBar from "./components/DashboardTopBar";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";
import DoughnutChart from "./components/DoughnutChart";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import PieChart from './components/PieChart';
import PieChart2 from './components/PieChart2';
import { useState } from "react";

const statsData = [
  {
    title: "Број на случаи",
    value: "34.700",
    icon: <DocumentDuplicateIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Волонтери",
    value: "23",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "Current month",
  },
  {
    title: "Pending Leads",
    value: "450",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "50 in hot leads",
  },
  {
    title: "Active Users",
    value: "5.6k",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
];

function Dashboard() {
  const dispatch = useDispatch();

  const updateDashboardPeriod = (newRange) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`,
        status: 1,
      })
    );
  };

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <LineChart />
        <PieChart2 />
        <BarChart />
      </div>

      {/** ---------------------- User source channels table  ------------------------- */}
      <div className="grid lg:grid-cols-3 mt-4 grid-cols-1 gap-6">
        <BarChart2 />
        <LineChart2 />
        <PieChart />
      </div>
    </>
  );
}

export default Dashboard;
