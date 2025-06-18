import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { Menu, Search } from "lucide-react";
import { setOpenSidebar } from "@/redux/slices/authSlice";
import { Input } from "../ui/input";
import UserAvatar from "../ui/userAvatar";

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );

  //   useEffect(() => {
  //     updateURL({ searchTerm, navigate, location });
  //   }, [searchTerm]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     window.location.reload();
//   };

  return (
    <div className="flex justify-between items-center bg-white dark:bg-[#1f1f1f] px-4 py-3 2xl:py-4 sticky z-10 top-0">
      <div className="flex gap-4">
        <div className="">
          <Button
            onClick={() => {
              dispatch(setOpenSidebar(true));
            }}
            className="text-2xl text-gray-500 block md:hidden"
          >
            <Menu />
          </Button>
        </div>
        {/* {location?.pathname !== "/dashboard" && ( */}
        <form className="w-64 2xl:w-[400px] flex items-center py-2 px-3 gap-2 rounded-full bg-[#f3f4f6] dark:bg-[#1c1c1c]">
          <Search className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none bg-transparent placeholder:text-gray-500 text-gray-800 "
          />
        </form>
        {/* )} */}
      </div>

      <div className="flex gap-2 items-center">
      <UserAvatar/>

      </div>
    </div>
  );
};

export default Navbar;
