// import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";
import AdminBookDetails from "@/components/Dashboard/pages/adminbookReview/AdminBookReview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Book Details',
}



const BookDetailsPage = () => {


  return (
    <div>
      <AdminBookDetails />
    </div>
  );
};

export default BookDetailsPage;
