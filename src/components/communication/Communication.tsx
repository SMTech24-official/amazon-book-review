/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send } from 'lucide-react'
import React, { useEffect, useRef } from 'react'



interface CommunicationProps {
  message: string
  userRole: string
  messages: any
  setMessages: React.Dispatch<React.SetStateAction<string>>
  handelSend: () => void
}

const Communication: React.FC<CommunicationProps> = ({
  message,
  messages,
  userRole,
  setMessages,
  handelSend
}
) => {

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);



  return (
    <div className="flex flex-col ">
      <div className="h-full">
        <ScrollArea className="p-4 h-[65vh] md:h-[60vh] overflow-y-auto">
          {messages.map((msg: any) => (
            <MessageBubble
              key={msg._id}
              message={msg.message}
              role={msg.role}
              colorScheme={msg.role !== userRole
                ? "bg-gray-200 text-black ms-2"
                : "bg-primary text-white me-2"
              }
              userRole={userRole}
            />
          ))}
          <div ref={containerRef} />
        </ScrollArea>

        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessages(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handelSend()}
              className="flex-1"
            />
            <Button
              onClick={handelSend}
              className="bg-primary text-white"
            >
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MessageBubbleProps {
  message: string
  role?: string // This should match the message sender
  colorScheme?: string
  userRole: string
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, role, colorScheme, userRole }) => {
  const isSender = role === userRole;
  // Determine if the message is from the sender or receiver

  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex items-start max-w-[70%] ${isSender ? 'flex-row-reverse' : 'flex-row'}`}>
        <Avatar className="w-10 h-10">
          <AvatarFallback>{isSender ? 'Me' : 'Ad'}</AvatarFallback>
        </Avatar>
        <div className={`mx-2 ${isSender ? 'text-right' : 'text-left'}`}>


          <div className={`p-3 rounded-lg inline-block ${colorScheme}`}>
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
