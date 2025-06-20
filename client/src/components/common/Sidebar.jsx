import { setOpenSidebar } from "@/redux/slices/authSlice";
import clsx from "clsx";
import {
  ChartLine,
  CheckCheck,
  CircleCheck,
  CircleCheckBig,
  LayoutDashboard,
  ListChecks,
  ListTodo,
  Settings,
  Trash2,
  Users,
} from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";

const linkData = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <LayoutDashboard />,
  },
  {
    label: "Tasks",
    link: "tasks",
    icon: <ListChecks />,
  },
  {
    label: "Completed",
    link: "completed",
    icon: <CircleCheckBig />,
  },
  {
    label: "In Progress",
    link: "in-progress",
    icon: <ChartLine />,
  },
  {
    label: "To Do",
    link: "todo",
    icon: <ListTodo />,
  },
  {
    label: "Team",
    link: "team",
    icon: <Users />,
  },
  {
    label: "Status",
    link: "status",
    icon: <CheckCheck />,
  },
  {
    label: "Trash",
    link: "trashed",
    icon: <Trash2 />,
  },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();

  const path = location.pathname.split("/")[1];

  const sidebarLinks = user?.isAdmin ? linkData : linkData.slice(0, 9);

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  const NavLink = ({ el }) => {
    return (
      <Link
        to={el.link}
        onClick={closeSidebar}
        className={clsx(
          "w-full lg:w-full flex gap-2 px-3 py-2 rounded-full text-center text-gray-800 text-base hover:bg-[#2564ed2d]",
          path === el.link.split("/")[0] ? "bg-blue-700 text-white" : ""
        )}
      >
        {el.icon}<span className="hover:text-[#2564ed]">
          {el.label}
        </span>
      </Link>
    );
  };

  return (
    <div className="w-full h-full flex flex-col gap-6 p-5 bg-white">
      <h1 className="flex gap-1 items-center">
        <p className="bg-blue-600 p-2 rounded-full">
          <CircleCheck className="text-white text-2xl font-black" />
        </p>
        <span className="text-2xl font-bold text-black">Task Me</span>
      </h1>
      <div className="flex-1 flex flex-col gap-y-5 py-8">
        {sidebarLinks.map((link) => (
          <NavLink el={link} key={link.label} />
        ))}
      </div>
      <div className="w-full flex gap-2 p-2 items-center text-lg text-gray-800">
        <Settings /><span>Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
