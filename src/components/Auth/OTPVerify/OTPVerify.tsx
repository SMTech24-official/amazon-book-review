/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormOTP from "@/components/ui/MyForm/MyFormOTP/MyFormOTP";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { z } from "zod";
import AuthLayout from "../AuthLayout";
import { useRouter } from "next/navigation";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useOtpMutation } from "@/redux/features/auth/authApi";

const validationSchema = z.object({
    // OTP field validation
    otp: z
      .string({
        required_error: "OTP is required",
      })
      .length(4, "OTP must be exactly 4 digits")
    //   .regex(/^\d{4}$/, "OTP must be a 4-digit number"), // Ensure it's exactly 4 digits
  });
  

const OTPVerify = () => {
  const [OTP] = useOtpMutation();
    const router = useRouter()
    const handleSubmit = async (formData: any) => {
      formData.otp = parseFloat(formData.otp)
      formData.email = localStorage.getItem("verifyEmailByOTP");
      console.log(formData);
      const res = await handleAsyncWithToast(
        async () => {
          return OTP(formData); // Replace with your actual login function
        },
        "Checking OTP...",
        "",
        ""
      );
      if (res?.data?.success) {
        localStorage.removeItem("verifyEmailByOTP");
        router.push("/plans");
      }
    };

  return (
    <div>
      <AuthLayout backLink="/signup">
        <div className=" w-full max-w-3xl px-5 mt-24 ">
          <div className="flex items-center gap-2 mb-2 md:mb-10 justify-center">
            <div className="bg-primary text-white px-[10px] py-1 text-sm rounded-full h-min w-min">
              1
            </div>
            <div className="bg-primary  px-[10px] py-1 text-sm rounded-full h-min min-w-40"></div>
            <div className="bg-primary text-white px-[10px] py-1 text-sm rounded-full h-min w-min">
              2
            </div>
          </div>
          <div className=" flex flex-col items-center">
            <p>Sent OTP to ex********ail.com</p>
            <h5 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8">
              <span className="text-primary">Verify</span> your email with
              <br />
              <span className="text-primary">OTP</span>
            </h5>
            <MyFormWrapper
              className={"flex flex-col gap-6 w-full "}
              onSubmit={handleSubmit}
              resolver={zodResolver(validationSchema)}
            >
              <div className="w-full flex justify-center ">
                <MyFormOTP
                  label="OTP"
                  labelClassName="mb-1 text-xs font-medium"
                  name={"otp"}
                  length={4}
                />
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-medium mb-">
              <p className="text-[#5F7992]">Didn&apos;t get the OTP?</p>

                <Link href={"/login"}>
                  <p className="text-primary">Resend</p>
                </Link>
              </div>
              <Button
                className="w-fit mx-auto py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 md:mb-5"
                type="submit"
              >
                <div className="flex items-center gap-2">
                  <p>Complete</p>
                  <FaChevronRight />
                </div>
              </Button>
            </MyFormWrapper>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default OTPVerify;
