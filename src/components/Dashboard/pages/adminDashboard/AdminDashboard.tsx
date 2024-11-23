"use client"

import ReviewComponent from "@/components/AdminDashboard/ReviewComponent/ReviewComponent";
import BreadCrumb from "@/components/common/breadCrumb/BreadCrumb";
import TabPage from "@/components/common/tabPage/TabPage";
import { useGetAllPendingReviewsQuery } from "@/redux/features/review/reviewApi";
import { useEffect } from "react";
import { FaClipboardList, FaUserCog } from "react-icons/fa";



const AdminDashboardPAge = () => {
  const { data: reviewData, isLoading: isReviewDataLoading } =
    useGetAllPendingReviewsQuery(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (!url.searchParams.has("tab")) {
        url.searchParams.set("tab", "New Books");
        window.location.href = url.toString();
      }
    }
  }, []);

  const tabs = [
    {
      label: "New Books",
      value: "New Books",
      icon: <FaUserCog className="min-w-6 min-h-6 mr-2" />,
      component: (
        // <BooksComponent
        //   books={data?.data}
        //   isLoading={isLoading}
        //   title="New books pending"
        // />
        <>asd</>
      ),
    },
    {
      label: "New Reviews",
      value: "New Reviews",
      icon: <FaClipboardList className="min-w-6 min-h-6 mr-2" />,
      component: (
        <ReviewComponent
          items={reviewData?.data}
          isLoading={isReviewDataLoading}
          title="New review pending"
        />
      ),
    },
  ];

  // demo link for breadcrumb
  // http://localhost:3000/admin-dashboard/settings?tab=general/subtab1/subtab2

  return (
    <div className="dashboard-containers">
      <div className="mb-3">
        <BreadCrumb />
      </div>
      <TabPage defaultTab="New Books" tabs={tabs} />
    </div>
  );
};

export default AdminDashboardPAge;
