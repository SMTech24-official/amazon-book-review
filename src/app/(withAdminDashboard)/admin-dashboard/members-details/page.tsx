import TotalMembers from '@/components/AdminDashboard/TotalMembers/TotalMembers';
import { TBooksAndMembers } from '@/interface/globalType';
import React from 'react';
import memberImage from "@/assets/member.png";

const books: TBooksAndMembers[] = [
    {
      id: 1,
      name: "George R. R. Martin",
      date: "09-11-2024",
      image: memberImage, // Use your image path here
    },
    {
      id: 2,
      name: "George R. R. Martin",
      date: "09-11-2024",
      image: memberImage,
    },
    {
      id: 3,
      name: "George R. R. Martin",
      date: "09-11-2024",
      image: memberImage,
    },
  ];

const page = () => {
    return (
        <div>
          <TotalMembers books={books} title='Total members'/>
        </div>
    );
};

export default page;