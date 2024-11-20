"use client"

import React from 'react';
import { Plus } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Image from "next/image"



const DnDInput = ({image}: {image? : string | null}) => {
    const [profileImage, setProfileImage] = useState<string | null>(image ?? null)

    // Handle drag and drop
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        const file = e.dataTransfer.files[0]
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setProfileImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    // Handle file selection
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setProfileImage(e.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }



    return (
        <div>
            <Label className="text-gray-500 mb-4 block">Profile photo (optional)</Label>
            <div
                className="border-2 border-dashed rounded-lg p-6 w-[256px] h-[322px] flex flex-col items-center justify-center cursor-pointer"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                {profileImage ? (
                    <div className="flex flex-col items-center md:items-start w-full">
                        <div className="w-36 h-36 md:w-44 md:h-44">
                            <Image
                                src={profileImage}
                                alt="Profile"
                                width={180}
                                height={180}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className=' w-full flex flex-col items-center justify-center gap-2'>
                            <p className="text-sm text-center md:text-left text-gray-500">Drag and drop</p>
                            <p className="text-sm text-center md:text-left text-gray-500">Or</p>
                            <label className="bg-[#8B4C84] text-white px-4 py-2 rounded-md cursor-pointer">
                                Select
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileSelect}
                                    accept="image/*"
                                />
                            </label>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='border p-2 rounded-full mb-2 text-white bg-primary '>
                            <Plus className="min-h-10 min-w-10  aspect-square" />
                        </div>
                        <p className="text-sm text-center text-gray-500">Drag and drop</p>
                        <p className="text-sm text-center text-gray-500 mb-2">Or</p>
                        <label className="bg-[#8B4C84] text-white px-4 py-2 rounded-md cursor-pointer">
                            Select
                            <input type="file" className="hidden" onChange={handleFileSelect} accept="image/*" />
                        </label>
                    </>
                )}
            </div>
        </div>

    );
};

export default DnDInput;