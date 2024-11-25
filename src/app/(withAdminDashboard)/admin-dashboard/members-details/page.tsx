"use client";
import TotalMembers from "@/components/AdminDashboard/TotalMembers/TotalMembers";
import { TBooksAndMembers } from "@/interface/globalType";
import React from "react";
import memberImage from "@/assets/member.png";
import { useGetAllMembersQuery } from "@/redux/features/member/memberApi";
import MyLoading from "@/components/ui/MyLoading";

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

const MemberPage = () => {
  const { data: memberData, isLoading: isMemberLoading } =
    useGetAllMembersQuery(undefined);
  console.log(memberData?.data);
  if (isMemberLoading) {
    return <MyLoading />;
  }
  return (
    <div>
      <TotalMembers items={memberData?.data} title="Total members" />
    </div>
  );
};

export default MemberPage;
