/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useForgetMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import AuthLayout from "../AuthLayout";



const ForgetPassword = () => {
    const dispatch = useAppDispatch();
    const [forget, { isLoading }] = useForgetMutation();
    const router = useRouter();


    const handleSubmit = async (email: any) => {
        console.log(email);
        const res = await handleAsyncWithToast(
            async () => {
                return forget({ email }); // Replace with your actual login function
            },
            "Verifying...",
            "Sending OTP successful!",
            "Login failed. Please try again.",
            true,
            dispatch
        );
        // console.log(res);
        if (res?.data?.success) {
            router.push("/verify-otp");
        }
    };

    return (
        <div>
            <AuthLayout backLink="/">
                <div className=" w-full max-w-3xl px-5 mt-24 md:mt-0">
                    <p className="text-base font-normal mb-2">Please Enter your</p>
                    <h5 className=" text-3xl font-semibold mb-10">
                        <span className="text-primary">Verified</span> Email!
                    </h5>
                    <MyFormWrapper
                        className={"flex flex-col gap-6 w-full"}
                        onSubmit={handleSubmit}
                    >
                        <div className="w-full">
                            <MyFormInput
                                label="Email"
                                labelClassName="mb-1 text-xs font-medium"
                                name={"email"}
                                placeHolder="Email"
                            // value={"akonhasan6802@gmail.com"}
                            />
                        </div>
                        <Button
                            disabled={isLoading}
                            className="w-fit mx-auto py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 mb-5"
                            type="submit"
                        >
                            {isLoading ? "Sending..." : "Send OTP"}
                        </Button>

                    </MyFormWrapper>
                </div>
            </AuthLayout>
        </div>
    );
};

export default ForgetPassword;
