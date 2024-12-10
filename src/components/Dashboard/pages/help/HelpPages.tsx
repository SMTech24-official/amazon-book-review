/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Communication from "@/components/communication/Communication";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUserDataQuery } from "@/redux/features/auth/authApi";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";


const socket = io("http://192.168.11.51:5005"); // Replace with your server URL

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
    if (userData) {
      socket.emit("join", { userId: userData?.data?._id, role: "user" }); // Join as admin
    }

    // Receive messages from the server

    socket.on("receive_message", (data) => {
      setShowMessage(data);
    });
  }, [userData]);



  const userMessage = showMessage?.filter((msg: any) => msg.role == "user")

  const adminMessage = showMessage?.filter((msg: any) => msg.role === "admin")


  console.log(userMessage, adminMessage);

  return (

    <div className="border rounded-xl md:mt-10 mt-5">
      <header className="flex items-center justify-between border-b px-4 py-2 bg-card">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold">Chat with Admin</h1>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
      </header>
      {
        <Communication
          message={message}
          messages={showMessage}
          setMessages={setMessage}
          handelSend={handelSend}
          userRole={"user"}
        />
      }
    </div>
  );
}
