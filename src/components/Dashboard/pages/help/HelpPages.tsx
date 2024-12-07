"use client";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Image from "next/image";
import {
  Camera,
  ImageIcon,
  Mic,
  MoreVertical,
  Phone,
  PlusCircle,
  Send,
  SmilePlus,
  Video,
} from "lucide-react";
import { useUserDataQuery } from "@/redux/features/auth/authApi";


const socket = io("http://localhost:5000"); // Replace with your server URL

export default function HelpPages() {
  const { data: userData } = useUserDataQuery(undefined);
  const [message, setMessage] = useState(""); // State for input value
  
  const [showMessage, setShowMessage] = useState([]);



  const handelSend = () => {
    if (message.trim()) {
      socket.emit("send_message", {
        senderId: userData?.data?._id, // Add sender ID
        role: "user", // Specify role
        message, // Send the message
      });
     
    }
 setMessage('')
  };

  useEffect(() => {
if(userData){
    socket.emit("join", { userId: userData?.data?._id, role: "user" }); // Join as admin
}

     // Receive messages from the server
 
     socket.on("receive_message", (data) => {
        setShowMessage(data);
      });
  }, [userData]);



const userMessage=showMessage?.filter((msg:any)=>msg.role=="user")
 
const adminMessage=showMessage?.filter((msg:any)=>msg.role==="admin")


console.log(userMessage,adminMessage);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-[81vh] w-[700px] relative bg-slate-300">
      {/* Header */}
      <header className="flex items-center justify-between border-b px-4 py-2 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
       
          </div>
          <div>
            <h1 className="font-medium">Chat With Admin</h1>
           
          </div>
        </div>
     
      </header>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto mt-4 space-y-4">
            {showMessage.map((msg: any, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    msg.role === "admin"
                      ? "bg-gray-200 text-black ms-2"
                      : "bg-blue-500 text-black me-2"
                  }`}
                >
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex items-center gap-2">
        
          <input
            className="flex-1 rounded-full bg-gray-100 px-4 py-2 focus:outline-none"
            placeholder="Aa"
            value={message} // Bind input value to state
            onChange={(e) => setMessage(e.target.value)} // Update state on input
          />
          <button
            onClick={handelSend}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
