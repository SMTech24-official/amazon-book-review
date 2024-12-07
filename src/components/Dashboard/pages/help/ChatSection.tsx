'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import { useUserDataQuery } from '@/redux/features/auth/authApi';
import { io } from "socket.io-client";


const ChatSection = () => {
    const [showMessage, setShowMessage] = useState([]);
    const { data: userData } = useUserDataQuery(undefined);
    const socket = io("http://localhost:5000");
  useEffect(() => {
    if(userData){
        socket.emit("join", { userId: userData?.data?._id, role: "admin" }); // Join as admin
    }
    
         // Receive messages from the server
     
         socket.on("receive_message", (data) => {
            setShowMessage(data);
          });
      }, [userData]);
    
    
    
    
      console.log(showMessage)

  return (
    <div className="flex-1 h-full hidden-scrollbar overflow-y-scroll p-4 space-y-4">
    {/* Add chat message rendering here */}
    <div className="flex items-start gap-2">
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          className="rounded-full"
          fill
        />
      </div>
      <div className="rounded-2xl bg-gray-100 px-4 py-2 max-w-[70%]">
        <p className="text-sm">হাজ্জের মাসেলা রকিফুজ্জামান</p>
      </div>
    </div>

    <div className="flex items-start justify-end gap-2">
      <div className="rounded-2xl bg-blue-500 px-4 py-2 text-white max-w-[70%]">
        <p className="text-sm">#abulkalamazadb...</p>
      </div>
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          className="rounded-full"
          fill
        />
      </div>
    </div>

    <div className="flex items-start gap-2">
      <div className="relative h-8 w-8 flex-shrink-0">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          className="rounded-full"
          fill
        />
      </div>
      <div className="rounded-2xl bg-gray-100 px-4 py-2 max-w-[70%]">
        <p className="text-sm">অ্যাটাচমেন্ট উন্নত নয়</p>
      </div>
    </div>
  </div>
  )
}

export default ChatSection