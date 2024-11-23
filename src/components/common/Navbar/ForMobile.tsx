"use client";
import { Drawer, Space } from "antd";
import React, { useState } from "react";
import { IoClose, IoLogOut, IoMenu } from "react-icons/io5";
import NavMenu from "./NavMenu";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { logoutHandler } from "@/utils/handleLogout";
import { useRouter } from "next/navigation";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";
const ForMobile = () => {
  const user = useAppSelector(selectCurrentUser);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logoutHandler(dispatch, router);
  };
  return (
    <div className="flex justify-between items-center px-3 md:hidden">
            <Link href={"/"} className="-mb-3">
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Booksy.buzz"
                        width={200}
                        height={200}
                        className="rounded"
                    />
                </div>
            </Link>
      <div>
        <button onClick={showDrawer} className="mt-3 ml-3 p-1">
          <IoMenu size={25} />
        </button>
        <Drawer
          title="Menu"
          placement="left"
          width="85%"
          open={open}
          onClose={onClose}
          closeIcon={false}
          extra={
            <Space>
              <button onClick={onClose}>
                <IoClose className="hover:text-red-500 " size={25} />
              </button>
            </Space>
          }
        >
          <div className=" h-full flex flex-col justify-between  items-start">
            <div>
              <div onClick={onClose}>
                <NavMenu className="flex-col" />
              </div>
              {user?.role === "admin" ? (
                <Link href={"/admin-dashboard"}>
                  <p className="cursor-pointer hover:text-primary transition duration-200 text-lg font-normal mx-auto text-center mt-5 ps-3">
                    Dashboard
                  </p>
                </Link>
              ) : (
                <Link href={"/dashboard"}>
                  <p className="cursor-pointer hover:text-primary transition duration-200 text-lg font-normal mx-auto text-center mt-5 ps-3">
                    Dashboard
                  </p>
                </Link>
              )}
            </div>

            <div className="mb-8">
              {user?.email ? (
                <div
                  onClick={() => {
                    handleLogout();
                    onClose();
                  }}
                  className={`flex items-center gap-3 px-3 py-3 rounded-md cursor-pointer `}
                >
                  <IoLogOut className="min-w-6 min-h-6" />
                  Log Out
                </div>
              ) : (
                <div className="flex items-center gap-6">
                  <Link href={"/login"}>
                    <button onClick={onClose} className="text-lg font-normal">
                      Login
                    </button>
                  </Link>
                  <Link href={"/signup"}>
                    <button
                      onClick={onClose}
                      className="px-6 py-2  bg-white  border border-primary rounded-md hover:border-primary-light font-semibold text-lg text-primary"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default ForMobile;
