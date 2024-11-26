// import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";
import BookReview from "@/components/Dashboard/pages/bookDetails/BookDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Book Details',
}



const BookDetailsPage = () => {

  // const buttons = [
  //   {
  //     text: "Verify Amazon Link",
  //     style: "bg-black text-white col-span-2",
  //   },
  //   {
  //     text: "Approve",
  //     style: "bg-primary text-white",
  //   },
  //   {
  //     text: "Deny",
  //     style: "bg-red-500 text-white",
  //   },
  // ];
  return (
    <div>
      <BookReview />
    </div>
  );
};

export default BookDetailsPage;
