"use client"
import BookDetailsComponent from "@/components/BookDetailsComponent/BookDetailsComponent";
import MyLoading from "@/components/ui/MyLoading";
import { useSingleBookQuery } from "@/redux/features/book/bookApi";
import { useParams } from "next/navigation";

export default function AdminBookDetails() {
    const params = useParams()
    const { data, isLoading } = useSingleBookQuery(params.bookId)




    const buttons = [
        {
            text: "Verify Amazon Link",
            style: "bg-black text-white ",
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
                bookTitle={data?.data?.title}
                id={data?.data?._id}
                coinsPerReview={data?.data?.coinsPerReview}
                author={data?.data?.authorName}
                amznLink={data?.data?.amazonBookUrl}
                bookLink={data?.data?.bookPdf}
                bookType={data?.data?.bookType}
                imageSrc={data?.data?.bookCover ?? "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"}
                genre={data?.data?.genre}
                status={data?.data?.status}
            >

            </BookDetailsComponent>
        </div>
    )
}