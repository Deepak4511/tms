import { getInitials } from "@/utils";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { CircleUserRound, LogOut, UserLock } from "lucide-react";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./button";

const UserAvatar = () => {
  const [open, setOpen] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // const [logoutUser] = useLogoutMutation();

  const logoutHandler = () => {
    console.log("Logging out");
  };

  return (
    <>
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="w-10 h-10 rounded-full 2xl:w-12 2xl:h-12 items-center justify-center bg-blue-600">
              <span className="text-white font-semibold">
                {getInitials(user?.name)}
              </span>
            </MenuButton>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#1f1f1f] shadow-2xl ring-1 ring-black/5 focus:outline-none">
              
                <MenuItem>
                  {({ active }) => (
                    <Button
                      onClick={() => setOpen(true)}
                      className={`text-gray-700 dark:textgray-300 group flex w-full items-center justify-start rounded-md px-2 py-2 text-base`}
                    >
                       <CircleUserRound  className='mr-2' aria-hidden='true' />
                      Profile
                    </Button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Button
                      onClick={() => setOpen(true)}
                      className={`text-gray-700 dark:textgray-300 group flex w-full items-center justify-start rounded-md px-2 py-2 text-base`}
                    >
                       <UserLock  className='mr-2' aria-hidden='true' />
                      Change Password
                    </Button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <Button
                      onClick={() => setOpen(true)}
                      className={`text-gray-700 dark:textgray-300 group flex w-full items-center justify-start rounded-md px-2 py-2 text-base`}
                    >
                       <LogOut  className='mr-2' aria-hidden='true' />
                      Logout
                    </Button>
                  )}
                </MenuItem>
    
            </MenuItems>
          </Transition>
        </Menu>
      </div>
      
    </>
  );
};

export default UserAvatar;
