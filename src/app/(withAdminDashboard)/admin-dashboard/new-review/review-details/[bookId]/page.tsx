"use client";
import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";

const BookDetailsPage = () => {

  const buttons = [
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
  ];
  return (
    <>
      <BookDetailsComponent
        // breadcrumbLinks={breadcrumbLinks}
        buttons={buttons}
        buttonLayoutClassName="grid-cols-1 xs:grid-cols-2 sm:grid-cols-4"
      />
    </>
  );
};

export default BookDetailsPage;
