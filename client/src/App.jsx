import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/login";
import { Routes, Route, Navigate, useLocation, Outlet } from "react-router-dom";
import Task from "./pages/Task";
import TaskDetails from "./pages/TaskDetails";
import Trash from "./pages/Trash";
import Users from "./pages/Users";
import Sidebar from "./components/common/Sidebar";
import Navbar from "./components/common/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useRef } from "react";
import { setOpenSidebar } from "./redux/slices/authSlice";
import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { X } from "lucide-react";

function Layout() {
  const user = "test";

  const location = useLocation();

  return user ? (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/5 h-screen bg-white sticky top-0 hidden md:block">
        <Sidebar />
      </div>
      <MobileSidebar />
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };
  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700 ease-in"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-0"
      >
        {/* {(ref) => ( */}
        <div
          ref={(node) => (mobileMenuRef.current = node)}
          className={clsx(
            "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform",
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={() => closeSidebar()}
        >
          <div className="bg-white w-3/4 h-full">
            <div className="w-full flex justify-end px-5 pt-5">
              <button
                onClick={() => closeSidebar()}
                className="flex justify-end items-end"
              >
                <X w-6 h-6 />
              </button>
            </div>
            <div className="mt-10">
              <Sidebar />
            </div>
          </div>
        </div>
        {/* )} */}
      </Transition>
    </>
  );
};

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6]">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/completed/:status?" element={<Task />} />
          <Route path="/in-progress/:status?" element={<Task />} />
          <Route path="/todo/:status?" element={<Task />} />
          <Route path="trashed" element={<Trash />} />
          <Route path="/tasks/:id" element={<TaskDetails />} />
          <Route path="/team" element={<Users />} />
          <Route path="/status" />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
