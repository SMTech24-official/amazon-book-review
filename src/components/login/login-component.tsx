/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { z } from "zod";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import MyFormOTP from "../ui/MyForm/MyFormOTP/MyFormOTP";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";

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

const handleSubmit = (data: any) => {
  console.log(data);
};
const LoginComponent = () => {
  return (
    <div className="flex ">
      <div className="w-5/12"></div>

      <div className="w-7/12">
        <MyFormWrapper
          className={"flex flex-col gap-5 w-full "}
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
        >
          <div className="w-full">
            <MyFormInput
              label="User name"
              name={"user_name"}
              placeHolder="User name"
            />
          </div>
          <div className="w-full">
            <MyFormInput
              label="Password"
              name={"password"}
              isPassword={true}
              placeHolder="Password"
            />
          </div>
          <div className="w-full">
            {/* <MyFormSelect
            label="select"
            name={"select"}
            placeHolder="select"
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
            ]}
          /> */}
          </div>
          <div className="w-full">
            <MyFormOTP
              name="otp"
              label="Enter OTP"
              // rules={{
              //   required: 'OTP is required', // Example validation rule
              //   minLength: { value: 6, message: 'OTP must be 6 characters' },
              // }}
            />
          </div>

          <Button
            className=" w-full py-3 rounded-lg bg-primary text-white text-base font-normal leading-6"
            type="submit"
          >
            Submit
          </Button>
        </MyFormWrapper>
      </div>
    </div>
  );
};

export default LoginComponent;
