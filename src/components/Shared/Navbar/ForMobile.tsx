"use client";
import { Drawer, Space } from "antd";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavMenu from "./NavMenu";
import Image from "next/image";
import logo from "@/assets/logo.png";
const ForMobile = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="grid grid-cols-3 items-center md:hidden">
      <>
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
          <NavMenu className="flex-col" />
        </Drawer>
      </>
      <div className="-mb-3">
        <Image
          src={logo}
          height={180}
          width={180}
          alt="logo"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ForMobile;
