"use client"
import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";
import MyLoading from "@/components/ui/MyLoading";
import { useSingleBookReviewQuery } from "@/redux/features/book/bookApi";
import { useParams } from "next/navigation";
import ReviewedIcon from "@/assets/ReviewedIcon.svg";
import { AiOutlineAmazon } from "react-icons/ai";
import { Info } from "lucide-react";

export default function BookReview() {
  const params = useParams()
  console.log(params.id);
  const { data, isLoading } = useSingleBookReviewQuery(params.id)
  console.log(data);

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
    }]


  if (isLoading) {
    return <div className=""><MyLoading /></div>
  }

  if (!data) {
    return <div className="h-screen w-full flex items-center justify-center "><span className="text-red-500 border border-red-400 p-3 rounded-full">Sorry Something error happened Form our end</span></div>
  }


  return (
    <div className="dashboard-containers">
      <BookDetailsComponent
        buttons={buttons}
        bookTitle={data?.data.bookId.title}
        id={data?.data.bookId._id}
        coinsPerReview={data?.data.bookId.coinsPerReview}
        author={data?.data.bookId.authorName}
        amznLink={data?.data.bookId.amazonBookUrl}
        bookLink={data?.data.bookId.bookPdf}
        bookType={data?.data.bookId.bookType}
        imageSrc={data?.data.bookId.bookCover ?? "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"}
        genre={data?.data.bookId.genre}
        status={data?.data.bookId.status}
      >
        <div className="max-w-md mx-auto mt-20">
          <div className="flex flex-col text-center items-center space-x-2">
            <Info className="min-w-5 min-h-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              After posting your review on Amazon, click the Reviewed button to notify our admin team. Once your review is verified, your BuzzPoints will be credited to your account.
            </p>
          </div>
        </div>
      </BookDetailsComponent>
    </div>
  )
}