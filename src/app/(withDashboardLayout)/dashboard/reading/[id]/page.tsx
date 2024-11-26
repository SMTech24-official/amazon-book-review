import BookReview from "@/components/Dashboard/pages/bookDetails/BookDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Book Details  ',
}



const BookReviewPage = () => {
  return (
    <>
      <BookReview />
    </>
  );
};

export default BookReviewPage;