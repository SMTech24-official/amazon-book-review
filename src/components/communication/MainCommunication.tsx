/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useEffect, useState } from 'react'
import Communication from './Communication'
import { io } from "socket.io-client"

const socket = io("http://192.168.11.51:5005");

export default function CommunicationComponent() {
    // const [messages, setMessages] = useState<Message[]>(conversations[0].messages)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // start from herer

    const [allUser, setAllUser] = useState([])
    const [message, setMessage] = useState(""); // State for input value
    const [id, setId] = useState("");
    const [showMessage, setShowMessage] = useState([]);

    const handelSend = () => {
        if (message.trim()) {
            socket?.emit("send_message", {
                senderId: id, // Add sender ID
                role: "admin", // Specify role
                message, // Send the message
            });
        }

        setMessage("");
    };

    useEffect(() => {
        if (id) {
            socket?.emit("join", { userId: id, role: "admin" }); // Join as admin
        }

        // Receive messages from the server

        socket?.on("receive_message", (data) => {
            setShowMessage(data);
        });


        return () => {
            socket?.off("receive_message");
        };
    }, [id]);

    const handelUserId = (user: any) => {
        setId(user._id);
    };

    socket.on("get_users", (data) => {
        console.log("Users:", data);
        setAllUser(data);

    })
    console.log(id, showMessage);


    // start from herer 

    const ConversationList = () => (
        <div className="w-full h-full">
            <div>
                <p className="font-semibold text-center py-[22px] text-secondary text-xl shadow-sm bg-section rounded-lr-md">Recent Chats</p>
            </div>
            <ScrollArea className="md:h-[calc(79vh-8rem)] h-full">
                {allUser.map((chat: any, index) => (
                    <div
                        onClick={() => handelUserId(chat)}
                        key={index} className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer">
                        <Avatar>
                            <AvatarFallback>dds</AvatarFallback>
                            {/* <AvatarFallback>{chat?.participants.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback> */}
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium">{chat.fullName}</p>
                            {/* <p className="text-sm text-gray-500 truncate">{chat.messages[0].content}</p> */}
                        </div>
                    </div>
                ))}
            </ScrollArea>
        </div>
    )

    return (
        <div className="dashboard-containers h-full md:max-h-[95vh] ">
            <div className="flex flex-col lg:flex-row rounded-lg ">
                <div className="lg:hidden mb-4">
                    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <Menu className="mr-2 h-4 w-4" />
                                View Conversations
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <ConversationList />
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden w-1/3  lg:block">
                    <ConversationList />
                </div>

                <div className="flex-1">
                    {showMessage ? (
                        <Communication
                            message={message}
                            messages={showMessage}
                            setMessages={setMessage}
                            handelSend={handelSend}

                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            Select a message to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
