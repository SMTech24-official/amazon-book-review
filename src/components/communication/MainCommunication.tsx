'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Communication from './Communication'
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import Image from "next/image";
// import { useEffect, useState } from "react";
import { io } from "socket.io-client";


interface Conversation {
    conversationId: number
    participants: {
        sender: string
        receiver: string
    }
    messages: Message[]
}

interface Message {
    id: number
    content: string
    sender: 'sender' | 'receiver'
    timestamp: Date
}

const conversations: Conversation[] = [
    {
        conversationId: 1,
        participants: {
            sender: 'John Doe',
            receiver: 'Fast Fix Garage',
        },
        messages: [
            { id: 1, content: 'Hi, I need help with my car.', sender: 'sender', timestamp: new Date('2024-10-25T08:00:00') },
            { id: 2, content: 'Sure, what seems to be the problem?', sender: 'receiver', timestamp: new Date('2024-10-25T08:01:00') },
        ],
    },
    {
        conversationId: 2,
        participants: {
            sender: 'Jane Smith',
            receiver: 'Quick Repair Services',
        },
        messages: [
            { id: 1, content: 'Hello, my tire is flat.', sender: 'sender', timestamp: new Date('2024-10-25T09:00:00') },
            { id: 2, content: 'We can fix that. Bring it in.', sender: 'receiver', timestamp: new Date('2024-10-25T09:02:00') },
        ],
    },
    {
        conversationId: 3,
        participants: {
            sender: 'Alice Brown',
            receiver: 'Super Auto Repairs',
        },
        messages: [
            { id: 1, content: 'My engine is making noise.', sender: 'sender', timestamp: new Date('2024-10-25T10:00:00') },
            { id: 2, content: 'Bring it to our shop for an inspection.', sender: 'receiver', timestamp: new Date('2024-10-25T10:05:00') },
        ],
    },
    {
        conversationId: 4,
        participants: {
            sender: 'Mike Johnson',
            receiver: 'Auto Fix Mechanics',
        },
        messages: [
            { id: 1, content: 'Can I get a price quote for engine repair?', sender: 'sender', timestamp: new Date('2024-10-25T11:00:00') },
            { id: 2, content: 'Sure, let me check your car details.', sender: 'receiver', timestamp: new Date('2024-10-25T11:05:00') },
        ],
    },
    {
        conversationId: 5,
        participants: {
            sender: 'Sara White',
            receiver: 'Quick Tune Garage',
        },
        messages: [
            { id: 1, content: 'Do you have availability today for a tire change?', sender: 'sender', timestamp: new Date('2024-10-25T12:00:00') },
            { id: 2, content: 'Yes, we have an open slot at 3 PM.', sender: 'receiver', timestamp: new Date('2024-10-25T12:05:00') },
        ],
    },
    {
        conversationId: 6,
        participants: {
            sender: 'Tom Wilson',
            receiver: 'Fix My Car Garage',
        },
        messages: [
            { id: 1, content: 'How much for a brake inspection?', sender: 'sender', timestamp: new Date('2024-10-25T13:00:00') },
            { id: 2, content: 'It will cost around $50.', sender: 'receiver', timestamp: new Date('2024-10-25T13:10:00') },
        ],
    },
    {
        conversationId: 7,
        participants: {
            sender: 'Nancy Brown',
            receiver: 'Total Car Care',
        },
        messages: [
            { id: 1, content: 'Is there a discount for new customers?', sender: 'sender', timestamp: new Date('2024-10-25T14:00:00') },
            { id: 2, content: 'Yes, you can get 10% off on your first service.', sender: 'receiver', timestamp: new Date('2024-10-25T14:05:00') },
        ],
    },
    {
        conversationId: 8,
        participants: {
            sender: 'Adam Green',
            receiver: 'Auto Experts Garage',
        },
        messages: [
            { id: 1, content: 'I need to replace my car’s AC compressor.', sender: 'sender', timestamp: new Date('2024-10-25T15:00:00') },
            { id: 2, content: 'We can handle that. Bring your car in.', sender: 'receiver', timestamp: new Date('2024-10-25T15:10:00') },
        ],
    },
    {
        conversationId: 9,
        participants: {
            sender: 'Laura Black',
            receiver: 'Professional Auto Garage',
        },
        messages: [
            { id: 1, content: 'My car’s check engine light is on.', sender: 'sender', timestamp: new Date('2024-10-25T16:00:00') },
            { id: 2, content: 'We will diagnose it for you. Come by anytime today.', sender: 'receiver', timestamp: new Date('2024-10-25T16:10:00') },
        ],
    },
    {
        conversationId: 10,
        participants: {
            sender: 'Daniel Adams',
            receiver: 'Auto Pro Mechanics',
        },
        messages: [
            { id: 1, content: 'Do you do wheel alignment?', sender: 'sender', timestamp: new Date('2024-10-25T17:00:00') },
            { id: 2, content: 'Yes, we do. It costs $80 for a full alignment.', sender: 'receiver', timestamp: new Date('2024-10-25T17:10:00') },
        ],
    },
    {
        conversationId: 11,
        participants: {
            sender: 'Megan Turner',
            receiver: 'Speedy Auto Service',
        },
        messages: [
            { id: 1, content: 'Can you fix an oil leak?', sender: 'sender', timestamp: new Date('2024-10-25T18:00:00') },
            { id: 2, content: 'Yes, we can take care of that for you.', sender: 'receiver', timestamp: new Date('2024-10-25T18:10:00') },
        ],
    },
    {
        conversationId: 12,
        participants: {
            sender: 'Chris Lee',
            receiver: 'Master Auto Repair',
        },
        messages: [
            { id: 1, content: 'I need to schedule a transmission fluid change.', sender: 'sender', timestamp: new Date('2024-10-25T19:00:00') },
            { id: 2, content: 'We can schedule it for you tomorrow at 10 AM.', sender: 'receiver', timestamp: new Date('2024-10-25T19:05:00') },
        ],
    },
    {
        conversationId: 13,
        participants: {
            sender: 'Olivia Wright',
            receiver: 'Fix-It Garage',
        },
        messages: [
            { id: 1, content: 'Do you offer towing services?', sender: 'sender', timestamp: new Date('2024-10-25T20:00:00') },
            { id: 2, content: 'Yes, we do. Our towing service is available 24/7.', sender: 'receiver', timestamp: new Date('2024-10-25T20:05:00') },
        ],
    },
    {
        conversationId: 14,
        participants: {
            sender: 'Ben Taylor',
            receiver: 'Auto Repair Experts',
        },
        messages: [
            { id: 1, content: 'Can I bring my car for a full inspection tomorrow?', sender: 'sender', timestamp: new Date('2024-10-25T21:00:00') },
            { id: 2, content: 'Yes, we are available in the afternoon.', sender: 'receiver', timestamp: new Date('2024-10-25T21:10:00') },
        ],
    },
    {
        conversationId: 15,
        participants: {
            sender: 'Sophia Harris',
            receiver: 'Reliable Auto Repair',
        },
        messages: [
            { id: 1, content: 'I need new brake pads. Can you install them?', sender: 'sender', timestamp: new Date('2024-10-25T22:00:00') },
            { id: 2, content: 'Yes, bring your car in anytime this week.', sender: 'receiver', timestamp: new Date('2024-10-25T22:10:00') },
        ],
    },
    {
        conversationId: 16,
        participants: {
            sender: 'Ethan Morgan',
            receiver: 'The Auto Shop',
        },
        messages: [
            { id: 1, content: 'Do you sell used tires?', sender: 'sender', timestamp: new Date('2024-10-25T23:00:00') },
            { id: 2, content: 'Yes, we have used tires in good condition.', sender: 'receiver', timestamp: new Date('2024-10-25T23:05:00') },
        ],
    }
]

const socket = io("http://192.168.11.51:5005");

export default function CommunicationComponent() {
    const [selectedMessage, setSelectedMessage] = useState<Conversation | null>(null)
    const [messages, setMessages] = useState<Message[]>(conversations[0].messages)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [socket, setSocket] = useState<WebSocket | null>(null) // WebSocket state

    useEffect(() => {
        // WebSocket connection
        const ws = new WebSocket('http://localhost:7000/') // Replace with your WebSocket server URL

        ws.onopen = () => {
            console.log('WebSocket connection established')
        }

        ws.onmessage = (event) => {
            const messageData = JSON.parse(event.data)
            console.log('Message received:', messageData)

            // Update the messages state with new message
            setMessages((prevMessages) => [...prevMessages, messageData])
        }

        ws.onclose = () => {
            console.log('WebSocket connection closed')
        }

        ws.onerror = (error) => {
            console.error('WebSocket error:', error)
        }

        setSocket(ws)

        return () => {
            ws.close()
        }
    }, [])

    const handleSendMessage = (messageContent: string) => {
        if (socket) {
            const newMessage = {
                id: Date.now(),
                content: messageContent,
                sender: 'sender',
                timestamp: new Date(),
            }

            socket.send(JSON.stringify(newMessage))
            // setMessages((prevMessages) => [...prevMessages, newMessage])
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsDrawerOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleMessageClick = (conversation: Conversation) => {
        setSelectedMessage(conversation)
        setMessages(conversation.messages)
        setIsDrawerOpen(false)
    }

    const latestMessage = (messages: Message[]) => {
        const lastMessage = messages[messages.length - 1]
        return lastMessage ? lastMessage.content : ''
    }

    const searchParams = useSearchParams(); // Use searchParams to get the query params

    const getConversationById = (id: number) => {
        return conversations.find(conversation => conversation.conversationId === id) || null;
    };

    useEffect(() => {
        const conversationId = searchParams.get('mes');

        if (conversationId) {
            const conversation = getConversationById(Number(conversationId));
            if (conversation) {
                setSelectedMessage(conversation);
                setMessages(conversation.messages);
            }
        } else if (!selectedMessage) {
            const firstConversation = conversations[0];
            setSelectedMessage(firstConversation);
            setMessages(firstConversation.messages);
        }
    }, [searchParams, selectedMessage]);


    // start from herer

    const [allUser, setAllUser] = useState([])
    const [message, setMessage] = useState(""); // State for input value
    const [id, setId] = useState("");
    const [showMessage, setShowMessage] = useState([]);
    const [selectedUser, setSelectedUser] = useState<any>({});

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
        setSelectedUser(user);
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
                {conversations.map((chat, index) => (
                    <div
                        onClick={() => handleMessageClick(chat)}
                        key={index} className="flex items-center gap-4 p-4 hover:bg-gray-100 cursor-pointer">
                        <Avatar>
                            <AvatarFallback>{chat?.participants.sender.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="font-medium">{chat.participants.sender}</p>
                            <p className="text-sm text-gray-500 truncate">{chat.messages[0].content}</p>
                        </div>
                        <span className="text-xs text-gray-400">{chat?.messages[0].timestamp.toDateString()}</span>
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
                    {selectedMessage ? (
                        <Communication
                            messages={messages}
                            setMessages={setMessages}
                            senderName={selectedMessage.participants.sender}
                            senderType="sender"
                            receiverType="receiver"
                            colorScheme={{
                                senderBg: 'bg-[#FF6600] text-white',
                                receiverBg: 'bg-gray-200 text-gray-800',
                            }}
                        // onSendMessage={handleSendMessage} // Send message via WebSocket
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
