import ReviewedIcon from "@/assets/ReviewedIcon.svg";
import BookDetailsComponent from '@/components/BookDetailsComponent/BookDetailsComponent';
import { AiOutlineAmazon } from "react-icons/ai";


const breadcrumbLinks = [
    { name: "Reading", href: "/dashboard/reading" },
    { name: "Book details", href: null }, // Last breadcrumb is static
  ];

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
        // <div className='dashboard-containers'>
        //     <BreadCrumb />
        //     <BookReview />
        // </div>

        <>
        <BookDetailsComponent breadcrumbLinks={breadcrumbLinks} buttons={buttons} />
        </>
    );
};

export default BookReviewPage;