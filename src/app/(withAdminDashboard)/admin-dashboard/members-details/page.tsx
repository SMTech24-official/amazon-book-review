"use client";
import TotalMembers from "@/components/AdminDashboard/TotalMembers/TotalMembers";
import MyLoading from "@/components/ui/MyLoading";
import { useGetAllMembersQuery } from "@/redux/features/member/memberApi";


const MemberPage = () => {
  const { data: memberData, isLoading: isMemberLoading } = useGetAllMembersQuery(undefined);
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
