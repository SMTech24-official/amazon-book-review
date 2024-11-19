/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import AuthLayout from "../AuthLayout";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormOTP from "@/components/ui/MyForm/MyFormOTP/MyFormOTP";
import { Button } from "@nextui-org/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const validationSchema = z.object({
  user_name: z
    .string({
      required_error: "User name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    ),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, "Password must be at least 8 characters long")
    .max(30, "Password cannot exceed 30 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
  select: z.string({
    required_error: "select is required",
  }),
  otp: z.string({
    required_error: "select is required",
  }),
});

const LoginComponent = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <AuthLayout backLink="/login">
        <div className=" w-full max-w-3xl px-5 mt-24 md:mt-0">
          <p className="text-base font-normal mb-2">We missed you</p>
          <h5 className=" text-3xl font-semibold mb-10">
            <span className="text-primary">Welcome</span> back!
          </h5>
          <MyFormWrapper
            className={"flex flex-col gap-6 w-full "}
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
          >
            <div className="w-full">
              <MyFormInput
                label="User name"
                labelClassName="mb-1 text-xs font-medium"
                name={"user_name"}
                placeHolder="User name"
              />
            </div>
            <div className="w-full">
              <MyFormInput
                label="Password"
                labelClassName="mb-1 text-xs font-medium"
                name={"password"}
                isPassword={true}
                placeHolder="Password"
              />
            </div>
            <div className="flex items-center justify-end gap-2 text-xs font-medium">
              <p className="text-[#5F7992]">Forgot Password?</p>
              <p className="text-[#030B12]">Reset</p>
            </div>
            <Button
              className="w-fit mx-auto py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 mb-5"
              type="submit"
            >
              Login
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs font-medium mb-5">
              <p className="text-[#5F7992]">Don’t have an account?</p>
             <Link href={"/signup"}>
             <p className="text-primary">Signup now</p>
             </Link>
            </div>
          </MyFormWrapper>
        </div>
      </AuthLayout>
    </div>
  );
};

export default LoginComponent;
