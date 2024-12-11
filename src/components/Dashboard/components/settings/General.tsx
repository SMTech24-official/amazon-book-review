"use client"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from '@/lib/types/type';
import DnDInput from '@/components/ui/DnDInput';
import { useAppDispatch } from '@/redux/hooks';
import { handleAsyncWithToast } from '@/utils/handleAsyncWithToast';
import { useChangePasswordMutation, useUpdateUserMutation } from '@/redux/features/auth/authApi';
import { toast } from 'sonner';



const General = ({ user }: { user: User }) => {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [image, setImage] = useState<File | null>(null)
    const dispatch = useAppDispatch();


    const [updateUser] = useUpdateUserMutation()
    const [ChangePass] = useChangePasswordMutation()

    const handlePersonalInfoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newFormData = new FormData(event.currentTarget);
        const data = Object.fromEntries(newFormData.entries());
        const formData = new FormData();
        if (image) {
            formData.append("image", image)
            const otherData = {
                fullName: data.name,
                amazonAuthorPageLink: data.authorLink,
                email: data.email,
                amazonCountry: data.country,
                reviewerName: data.reviewerName
            }
            console.log(otherData);
            formData.append("data", JSON.stringify(otherData))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const finishRes = await handleAsyncWithToast(
                async () => {
                    return updateUser(formData); // Replace with your actual login function
                },
                "Updating Profile...", // Toast message for the start of the process
                "User update Completed!", // Toast message for success
                `Please Check Your network`, // Toast message for failure
                true,
                dispatch
            );
        }
    };


    const handlePasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newFormData = new FormData(event.currentTarget);
        const getData = Object.fromEntries(newFormData.entries());

        if (getData['new-password'] !== getData['confirm-password']) {
            // You might want to use a toast or some other UI feedback here
            toast.error("New password and confirm password do not match");
            return;
        }

        console.log(getData);
        const data = {
            oldPassword: getData["old-password"],
            newPassword: getData["confirm-password"]

        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const finishRes = await handleAsyncWithToast(
            async () => {
                return ChangePass(data); // Replace with your actual login function
            },
            "Updating Profile...", // Toast message for the start of the process
            "User update Completed!", // Toast message for success
            `Please Check Your network`, // Toast message for failure
            true,
            dispatch
        );

    };




    return (
        <div className="space-y-6">
            {/* Personal Info Section */}
            <form onSubmit={handlePersonalInfoSubmit} className="bg-white sm:pb-6 sm:px-6 rounded-lg shadow-sm px-6 pb-6">
                <h2 className="text-lg font-semibold mb-6 border-b pb-2">Personal info</h2>
                <div className="space-y-6">
                    <div className='flex xl:flex-row flex-col items-center lg:items-end gap-10'>
                        <DnDInput
                            setNew={setImage}
                            width='w-[256px]'
                            initialFile={user?.profileImage}
                            id="profilePic"
                            label="profile Picture (Optional)"
                            acceptedTypes="image"
                        />
                        <div className="grid xl:grid-cols-2 gap-6 w-full">
                            <div className="space-y-2 xl:col-span-2">
                                <Label htmlFor="name">Name</Label>
                                <Input defaultValue={user?.fullName} className='w-full' id="name" name="name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="author-link">Amazon Author page link</Label>
                                <Input defaultValue={user?.amazonAuthorPageLink} className='w-full' id="authorLink" name="authorLink" placeholder="URL" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input defaultValue={user?.email} className='w-full' id="email" name="email" type="email" placeholder="Example@email.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reviewer-name">Amazon reviewer name</Label>
                                <Input defaultValue={user?.reviewerName} className='w-full' id="reviewerName" name="reviewerName" placeholder="Jhon max" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">Review Country</Label>
                                <Input defaultValue={user?.amazonCountry ?? ""} className='w-full' id="country" name="country" placeholder="America" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start gap-4">
                        <Button type="reset" variant="ghost">Discard</Button>
                        <Button type="submit" className="bg-[#8B4C84] hover:bg-[#8B4C84]/90">Save Change</Button>
                    </div>
                </div>
            </form>

            {/* Password Section */}
            <form onSubmit={handlePasswordSubmit} className="bg-white sm:p-6 rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-6">Password</h2>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="old-password">Old Password</Label>
                        <div className="relative">
                            <Input
                                id="old-password"
                                name="old-password"
                                type={showOldPassword ? "text" : "password"}
                                className="sm:pr-10"
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                onClick={() => setShowOldPassword(!showOldPassword)}
                            >
                                {showOldPassword ? (
                                    <EyeOff className="h-4 w-4 text-gray-400" />
                                ) : (
                                    <Eye className="h-4 w-4 text-gray-400" />
                                )}
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <div className="relative">
                                <Input
                                    id="new-password"
                                    name="new-password"
                                    type={showNewPassword ? "text" : "password"}
                                    className="sm:pr-10"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                >
                                    {showNewPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-400" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-400" />
                                    )}
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirm-password"
                                    name="confirm-password"
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="pr-10"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-4 w-4 text-gray-400" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-gray-400" />
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start gap-4">
                        <Button type="reset" variant="ghost">Discard</Button>
                        <Button type="submit" className="bg-[#8B4C84] hover:bg-[#8B4C84]/90">Save Change</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default General;

