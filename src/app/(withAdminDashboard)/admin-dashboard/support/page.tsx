// /* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Send
// } from "lucide-react";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://192.168.11.51:5005");

// export default function HelpPages() {
//   // const { data: allUser } = useGetAllUserQuery(undefined);
//   const [allUser, setAllUser] = useState([])
//   const [message, setMessage] = useState(""); // State for input value
//   const [id, setId] = useState("");
//   const [showMessage, setShowMessage] = useState([]);
//   const [selectedUser, setSelectedUser] = useState<any>({});

//   const handelSend = () => {
//     if (message.trim()) {
//       socket.emit("send_message", {
//         senderId: id, // Add sender ID
//         role: "admin", // Specify role
//         message, // Send the message
//       });
//     }

//     setMessage("");
//   };

//   useEffect(() => {
//     if (id) {
//       socket.emit("join", { userId: id, role: "admin" }); // Join as admin
//     }

//     // Receive messages from the server

//     socket.on("receive_message", (data) => {
//       setShowMessage(data);
//     });


//     return () => {
//       socket.off("receive_message");
//     };
//   }, [id]);

//   const handelUserId = (user: any) => {
//     setId(user._id);
//     setSelectedUser(user);
//   };

//   socket.on("get_users", (data) => {
//     console.log("Users:", data);
//     setAllUser(data);

//   })
//   console.log(id, showMessage);

//   return (
//     <div className="mt-32 grid md:grid-cols-2">
//       <div className=" h-[81vh] w-[400px]  rounded-lg p-4 relative bg-slate-300">
//         {allUser?.map((user: any, index: any) => (
//           <div key={index} className="flex  items-center gap-4">
//             <div className="relative h-10 w-10">
//               <Image
//                 src={user.profileImage ? user.profileImage : "/placeholder.svg"}
//                 alt="Profile"
//                 className="rounded-full"
//                 fill
//               />
//             </div>
//             <div>
//               <h1
//                 onClick={() => handelUserId(user)}
//                 className="font-medium cursor-pointer"
//               >
//                 {user.fullName}
//               </h1>
//             </div>
//           </div>
//         )) || <p>No users available</p>}
//       </div>

//       {/* Chat Box */}
//       {id ? (
//         <div className="h-[81vh] w-[700px] bg-slate-300 p-4 rounded-lg flex flex-col ">
//           {/* Chat Header */}
//           <div className="flex items-center gap-4 border-b pb-2">
//             <div className="relative h-10 w-10"></div>
//             <div>
//               {/* <Image src={selectedUser?.profileImage??"/placeholder.svg"} alt='profile image'></Image> */}
//               <h1 className="font-medium">{selectedUser?.fullName}</h1>
//             </div>
//           </div>

//           {/* Chat Messages */}
//           <div className="flex-1 overflow-y-auto mt-4 space-y-4">
//             {showMessage.map((msg: any, index) => (
//               <div
//                 key={index}
//                 className={`flex ${msg.role === "admin" ? "justify-end" : "justify-start"
//                   }`}
//               >
//                 <div
//                   className={`p-3 rounded-lg max-w-xs ${msg.role === "admin"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200 text-black"
//                     }`}
//                 >
//                   <p>{msg.message}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Chat Input */}
//           <div className="border-t pt-2">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//               }}
//               className="flex gap-2"
//             >
//               <Input
//                 placeholder="Type your message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 className="flex-1"
//               />
//               <Button onClick={handelSend} type="submit" size="icon">
//                 <Send className="h-5 w-5" />
//               </Button>
//             </form>
//           </div>
//         </div>
//       ) : (
//         <div className="h-[81vh] w-full bg-slate-300 rounded-lg flex items-center justify-center">
//           <p>Select a user to start chatting</p>
//         </div>
//       )}
//     </div>
//   );
// }

import CommunicationComponent from '@/components/communication/MainCommunication';

const page = () => {
  return (
    <div>
      <CommunicationComponent />
    </div>
  );
};

export default page;