/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useEffect, useState } from 'react'
import Communication from './Communication'
import { io } from "socket.io-client"
import BreadCrumb from '../common/breadCrumb/BreadCrumb'
import { DialogTitle } from '@radix-ui/react-dialog'

// const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}:${process.env.NEXT_PUBLIC_PORT}`);
const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);
export default function CommunicationComponent() {
    // const [messages, setMessages] = useState<Message[]>(conversations[0].messages)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    // start from herer

    const [allUser, setAllUser] = useState([])
    const [message, setMessage] = useState(""); // State for input value
    const [id, setId] = useState("");
    const [showMessage, setShowMessage] = useState([]);
    const [selectedUser, setSelectedUser] = useState<any>(null);
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
        setSelectedUser(user)
    };

    socket.on("get_users", (data) => {
        // console.log("Users:", data);
        setAllUser(data);

    })
    // console.log(selectedUser);


    // start from herer 

    const ConversationList = () => (
        <div className="w-full h-full">
            <div>
                <p className="font-semibold py-[22px] text-primary text-xl shadow-sm bg-section rounded-lr-md text-start">Recent Chats</p>
            </div>
            <ScrollArea className="md:h-[calc(79vh-8rem)] h-full">
                {allUser.map((chat: any, index) => (
                    <div
                        onClick={() => handelUserId(chat)}
                        key={index} className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer border rounded-md mx-2 my-2">
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
            <BreadCrumb />
            <div className="flex flex-col lg:flex-row rounded-lg  md:mt-10 mt-5">
                <div className="lg:hidden mb-4">
                    <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline">
                                <Menu className="mr-2 h-4 w-4" />
                                View Conversations
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                            <DialogTitle />
                            <ConversationList />
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="hidden w-1/3  lg:block border-r">
                    <ConversationList />
                </div>

                <div className="flex-1 ">
                    {selectedUser ? (
                        <div>
                            <header className="flex items-center justify-between border-b px-4 py-[16px] bg-card">
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={selectedUser?.profileImage} />
                                        <AvatarFallback>{selectedUser?.fullName?.slice(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h1 className="font-semibold">{selectedUser?.fullName}</h1>
                                    </div>
                                </div>
                            </header>
                            <Communication
                                message={message}
                                messages={showMessage}
                                setMessages={setMessage}
                                handelSend={handelSend}
                                userRole={"admin"}
                            />
                        </div>
                    ) : (
                        <div className="w-full min-h-[60vh] flex items-center justify-center text-gray-500">
                            Select a message to view details
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
