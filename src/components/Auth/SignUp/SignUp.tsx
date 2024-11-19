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
import MyFormSelect from "@/components/ui/MyForm/MyFormSelect/MyFormSelect";
import { FaChevronRight } from "react-icons/fa";

const validationSchema = z.object({
  full_name: z
    .string({
      required_error: "User name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    ),
    amazon_reviewer_name: z
    .string({
      required_error: "User name is required",
    })
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name cannot exceed 50 characters")
    .regex(
      /^[A-Za-z\s\-,'.]+$/,
      "Name can only contain letters, spaces, hyphens, commas, apostrophes, and dots"
    ),
    country: z
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

const SignUp = () => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <AuthLayout backLink="/login">
        <div className=" w-full max-w-3xl px-5 mt-24 ">
            <div className="flex items-center gap-2 mb-2 md:mb-10 justify-center">
                <div className="bg-primary text-white px-[10px] py-1 text-sm rounded-full h-min w-min">1</div>
                <div className="bg-[#E0E0E0]  px-[10px] py-1 text-sm rounded-full h-min min-w-40"></div>
                <div className="text-primary border border-primary px-[10px] py-1 text-sm rounded-full h-min w-min">2</div>
            </div>
          <h5 className="text-xl md:text-3xl font-semibold mb-5 md:mb-10">
            Join <span className="text-primary">Booksy.buzz</span> and Boost{" "}
            <br />
            Your Book’s Reviews
          </h5>
          <MyFormWrapper
            className={"flex flex-col gap-6 w-full "}
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
          >
            <div className="w-full">
              <MyFormInput
                label="Full Name"
                labelClassName="mb-1 text-xs font-medium"
                name={"full_name"}
                placeHolder="Full name"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-full md:w-4/12">
                <MyFormInput
                  label="Amazon reviewer name"
                  labelClassName="mb-1 text-xs font-medium"
                  name={"amazon_reviewer_name"}
                  placeHolder="Amazon reviewer name"
                />
              </div>
              <div className="w-full md:w-8/12">
                <MyFormSelect
                  label="On which Amazon country site will your reviews be posted?"
                  labelClassName="mb-0 text-xs font-medium"
                  name={"country"}
                  placeHolder="Amazon.com"
                  options={[
                    { label: "Amazon.com", value: "Amazon" }
                  ]}
                />
              </div>
            </div>
            <div className="w-full">
              <MyFormInput
                label="Email"
                labelClassName="mb-1 text-xs font-medium"
                name={"email"}
                placeHolder="example@email.com"
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
        
            <Button
              className="w-fit mx-auto py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 md:mb-5"
              type="submit"
            >
              <div className="flex items-center gap-2">
                <p>Next</p>
                <FaChevronRight />
              </div>
            </Button>
            <div className="flex items-center justify-center gap-2 text-xs font-medium mb-5">
              <p className="text-[#5F7992]">Already have an account?</p>
              <Link href={"/login"}>
                <p className="text-primary">Login</p>
              </Link>
            </div>
          </MyFormWrapper>
        </div>
      </AuthLayout>
    </div>
  );
};

export default SignUp;