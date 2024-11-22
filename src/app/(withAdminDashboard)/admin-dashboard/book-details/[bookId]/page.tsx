"use client";
import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";
import { useParams } from "next/navigation";

const BookDetailsPage = () => {
    const breadcrumbLinks = [
        { name: "Verification", href: "/admin-dashboard" },
        { name: "New books", href: "/admin-dashboard?tab=New+Books" },
        { name: "Book details", href: null }, // Last breadcrumb is static
      ];
      const buttons = [
        // {
        //   text: "View the book on Amazon",
        //   style: "bg-black text-white",
      
        // },
        // {
        //   text: "Review now on Amazon",
        //   style: "border border-black text-black bg-white",
        // },
        // {
        //   text: "Reviewed",
        //   style: "bg-purple-500 text-white bg-primary",
        // },
        {
          text: "Verify Amazon Link",
          style: "bg-black text-white col-span-2",
        },
        {
          text: "Approve",
          style: "bg-primary text-white",
        },
        {
          text: "Deny",
          style: "bg-red-500 text-white",
        },
        // {
        //   text: "Verify Review now on amazon",
        //   style: "bg-black text-white",
        // },
      ];
  return (
   <>
   <BookDetailsComponent breadcrumbLinks={breadcrumbLinks} buttons={buttons} buttonLayoutClassName="grid-cols-1 xs:grid-cols-2 sm:grid-cols-4"/>
   </>
  );
};

export default BookDetailsPage;
