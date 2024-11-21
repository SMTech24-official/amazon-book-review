"use client"
import { booksReview } from "@/lib/fakeData/BooksReview";
import BookDetailsComponents from "../../components/bookdetails/BookDetailsComponents";
import { useParams } from "next/navigation";

export default function BookReview() {
  const params = useParams()
  console.log(params);
  // Finding the post by slug
  const bookDetails = booksReview.find(book => book.id.toString() === params.id)
  console.log(bookDetails);

  return (
    <BookDetailsComponents 
    bookTitle={bookDetails?.bookTitle ?? "Book Title"}
    imageSrc={bookDetails?.imageSrc ?? "Book Title"}
    author={bookDetails?.author ?? "Author Name"}
    coinsPerReview={bookDetails?.coinsPerReview ?? 0}
    />
  )
}