"use client"
import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";
import MyLoading from "@/components/ui/MyLoading";
import { useGetSinglePendingReviewsQuery } from "@/redux/features/review/reviewApi";

export default function VerifyReview() {
    
    const id = JSON.parse(localStorage.getItem("id") ?? "")
    const { data, isLoading } = useGetSinglePendingReviewsQuery(id)


    const buttons = [
        {
            text: "Verify Review now on amazon",
            style: "bg-black text-white",
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


    if (isLoading) {
        return <div className=""><MyLoading /></div>
    }

    if (!data) {
        return <div className="h-screen w-full flex items-center justify-center "><span className="text-red-500 border border-red-400 p-3 rounded-full">Sorry Something error happened Form our end</span></div>
    }


    return (
        <div className="dashboard-containers">
            <BookDetailsComponent
                mainId={data?.data?._id}
                buttons={buttons}
                bookTitle={data?.data?.bookId?.title}
                id={data?.data?.bookId?._id}
                coinsPerReview={data?.data?.bookId?.points}
                author={data?.data?.bookId?.authorName}
                amznLink={data?.data?.bookId?.amazonBookUrl}
                bookLink={data?.data?.bookId?.bookPdf}
                bookType={data?.data?.bookId?.bookType}
                imageSrc={data?.data?.bookId?.bookCover ?? "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"}
                genre={data?.data?.bookId?.genre}
                status={data?.data?.bookId?.status}
            >
            </BookDetailsComponent>
        </div>
    )
}