/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { useResetPasswordMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import AuthLayout from "../AuthLayout";

const validationSchema = z.object({
    email: z
        .string({
            required_error: "Email is required",
        })
        .email("Invalid email address"),
    password: z.string({
        required_error: "Password is required",
    }),
    // .min(8, "Password must be at least 8 characters long")
    // .max(30, "Password cannot exceed 30 characters")
    // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    // .regex(/\d/, "Password must contain at least one digit")
    // .regex(
    //   /[!@#$%^&*(),.?":{}|<>]/,
    //   "Password must contain at least one special character"
    // ),
});

const ResetPassWord = () => {
    const dispatch = useAppDispatch();
    const [reset] = useResetPasswordMutation();
    const router = useRouter();
    // const handleSubmit = async (formData: FieldValues) => {
    //   try {
    //     const res = await login(formData).unwrap();
    //     if (res.success) {
    //       console.log("Login Successful:", res.data);

    //       const user = await verifyToken(res?.data?.accessToken);

    //       await dispatch(setUser({ user: user, token: res?.data?.accessToken }));

    //       // Show success message
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Login Successful",
    //         showConfirmButton: false,
    //         timer: 2500,
    //       });
    //       router.push("/");
    //     } else {
    //       console.log("Login Failed:", res.error);
    //       Swal.fire({
    //         position: "top-end",
    //         icon: "error",
    //         title: "Login Failed",
    //         text:
    //           (error as any)?.data?.success === false &&
    //           (error as any)?.data?.errorSources[0]?.message,
    //         showConfirmButton: true,
    //         // timer: 1500,
    //       });
    //     }
    //   } catch (error) {
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "error",
    //       title: "Failed",
    //       text:
    //         (error as any)?.data?.success === false &&
    //         (error as any)?.data?.errorSources[0]?.message,
    //       showConfirmButton: true,
    //     });
    //   }
    // };

    const handleSubmit = async (formData: any) => {
        // console.log(formData);
        const data = {
            email: formData.email,
            newPassword: formData.password
        }
        const res = await handleAsyncWithToast(

            async () => {
                return reset(data); // Replace with your actual login function
            },
            "Logging in...",
            "Login successful!",
            "Login failed. Please try again.",
            true,
            dispatch
        );
        // console.log(res);
        if (res?.data?.success) {
            router.push("/");
        }

    };

    return (
        <div>
            <AuthLayout backLink="/">
                <div className=" w-full max-w-3xl px-5 mt-24 md:mt-0">
                    <p className="text-base font-normal mb-2">Enter Email and Password</p>
                    <h5 className=" text-3xl font-semibold mb-10">
                        <span className="text-primary">Ready</span> To Go!
                    </h5>
                    <MyFormWrapper
                        className={"flex flex-col gap-6 w-full"}
                        onSubmit={handleSubmit}
                        resolver={zodResolver(validationSchema)}
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
                        <div className="w-full">
                            <MyFormInput
                                label="Enter New Password"
                                labelClassName="mb-1 text-xs font-medium"
                                name={"password"}
                                isPassword={true}
                                placeHolder="Password"
                            // value={"123456"}
                            />
                        </div>
                        <Button
                            className="w-fit mx-auto py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 mb-5"
                            type="submit"
                        >
                            Login
                        </Button>
                    </MyFormWrapper>
                </div>
            </AuthLayout>
        </div>
    );
};

export default ResetPassWord;
