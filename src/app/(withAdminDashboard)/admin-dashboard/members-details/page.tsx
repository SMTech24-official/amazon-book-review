import TotalMembers from '@/components/AdminDashboard/TotalMembers/TotalMembers';
import { TBooksAndMembers } from '@/interface/globalType';
import React from 'react';
import memberImage from "@/assets/member.png";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members Details',
}



const books: TBooksAndMembers[] = [
    {
      _id: 1,
      title: "George R. R. Martin",
      createdAt: "09-11-2024",
      bookCover: memberImage, // Use your image path here
    },
    {
      _id: 2,
      title: "George R. R. Martin",
      createdAt: "09-11-2024",
      bookCover: memberImage,
    },
    {
      _id: 3,
      title: "George R. R. Martin",
      createdAt: "09-11-2024",
      bookCover: memberImage,
    },
  ];

const page = () => {
    return (
        <div>
          <TotalMembers books={books} title='Total members'/>
        </div>
    );
};

export default MemberPage;
