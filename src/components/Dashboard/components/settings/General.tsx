"use client"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from '@/lib/types/type';
import DnDInput from '@/components/ui/DnDInput';



const General = ({ user }: { user: User }) => {
    const [showOldPassword, setShowOldPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handlePersonalInfoSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Personal Info Form Data:", data);
    };


    const handlePasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Password Form Data:", data);
    };

    return (
        <div className="space-y-6">
            {/* Personal Info Section */}
            <form onSubmit={handlePersonalInfoSubmit} className="bg-white sm:pb-6 sm:px-6 rounded-lg shadow-sm px-6 pb-6">
                <h2 className="text-lg font-semibold mb-6 border-b pb-2">Personal info</h2>
                <div className="space-y-6">
                    <div className='flex xl:flex-row flex-col items-center lg:items-end gap-10'>
                        <DnDInput
        
                            initialFile={user.image}
                            id="profilePic"
                            label="profile Picture (Optional)"
                            acceptedTypes="image/*"
                        />
                        <div className="grid xl:grid-cols-2 gap-6 w-full">
                            <div className="space-y-2 xl:col-span-2">
                                <Label htmlFor="name">Name</Label>
                                <Input defaultValue={user?.name} className='w-full' id="name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="author-link">Amazon Author page link</Label>
                                <Input defaultValue={user?.amazonAuthorPage} className='w-full' id="authorLlink" name="authorLlink" placeholder="URL" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input defaultValue={user?.email} className='w-full' id="email" name="email" type="email" placeholder="Example@email.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="reviewer-name">Amazon reviewer name</Label>
                                <Input defaultValue={user?.amazonReviewerName} className='w-full' id="reviewerName" name="reviewerName" placeholder="Jhon max" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="country">Review Country</Label>
                                <Input defaultValue={user?.reviewCountry ?? ""} className='w-full' id="country" name="country" placeholder="America" />
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