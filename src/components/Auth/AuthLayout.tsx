/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import authIcon from "@/assets/authIcon.png";
import RatingStars from "@/assets/RatingStars.png";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const AuthLayout = ({
  children,
  backLink,
}: {
  children: React.ReactNode;
  backLink: string;
}) => {
  return (
    <div className="flex gap">
      <div className="hidden w-5/12 h-screen md:flex justify-center items-center bg-gradient-to-b from-[#AF7A9C] to-[#9B5983] relative">
        <Image src={authIcon} height={200} width={200} alt="image" />
        <div className="absolute bottom-16">
          <Image src={RatingStars} height={200} width={300} alt="image" />
        </div>
      </div>

      <div className="w-full md:h-screen md:w-7/12 relative">
        <div className="absolute top-8 left-8">
          <Link
            href={backLink}
            className="flex items-center gap-3  cursor-pointer"
          >
            <FaArrowLeftLong size={20} />
            <p>Back</p>
          </Link>
        </div>
        <div className="flex justify-center items-center h-full w-full ">
          {children}
        </div>
 
        {/* {children} */}
      </div>
    </div>
  );
};

export default AuthLayout;
