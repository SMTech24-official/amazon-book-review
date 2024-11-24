import ReviewedIcon from "@/assets/ReviewedIcon.svg";
import BookDetailsComponent from '@/components/BookDetailsComponent/BookDetailsComponent';
import { Metadata } from "next";
import { AiOutlineAmazon } from "react-icons/ai";

export const metadata: Metadata = {
  title: 'Book Details  ',
}

const buttons = [
  {
    text: "View the book on Amazon",
    style: "bg-black text-white",
    icon: <div className='bg-white text-black p-1 rounded-full overflow-hidden'>
      <AiOutlineAmazon />
    </div>,
  },
  {
    text: "Review now on Amazon",
    style: "border border-black text-black bg-white",
  },
  {
    text: "Reviewed",
    style: "bg-purple-500 text-white bg-primary",
    svg: ReviewedIcon
  },
  // {
  //   text: "Verify Amazon Link",
  //   style: "bg-black text-white",
  // },
  // {
  //   text: "Approve",
  //   style: "bg-purple-500 text-white",
  // },
  // {
  //   text: "Deny",
  //   style: "bg-red-500 text-white",
  // },
  // {
  //   text: "Verify Review now on amazon",
  //   style: "bg-black text-white",
  // },
];


const BookReviewPage = () => {
  return (
    <>
      <BookDetailsComponent buttons={buttons} />
    </>
  );
};

export default BookReviewPage;