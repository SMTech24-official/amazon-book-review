"use client"

import BreadCrumb from "@/components/common/breadCrumb/BreadCrumb";
import MyLoading from "@/components/ui/MyLoading";
import { ReviewedBook } from "@/lib/types/type";
import { useGetAllReadingBooksQuery } from "@/redux/features/book/bookApi";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import LibraryBookCard from "../../components/cards/libraryBookCard/LibraryBooksCard";


const Reading = () => {
    const router = useRouter()
    const { data: BookReview, isLoading: isloading1 } = useGetAllReadingBooksQuery("to-be-reviewed")
    const { data: BookReviewDue, isLoading: isloading2 } = useGetAllReadingBooksQuery("review-overdue")
    const { data: BookReviewSubmitted, isLoading: isloading3 } = useGetAllReadingBooksQuery("review-finished")

    if (isloading1 || isloading2 || isloading3) {
        return <div className="h-screen"><MyLoading /></div>
    }

    const handleDetails = (id: string) => {
        localStorage.setItem("id", JSON.stringify(id))
        router.push(`/dashboard/reading/bookDetails`)
    }
    return (
        <div>
            {/* heading */}
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start  justify-between mb-4'>
                <BreadCrumb />
            </div>

            {/* Books Grid */}
            <div className="mt-10">
                <h3 className="mb-2 font-semibold">
                    Review Overdue
                </h3>
                <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>

                    {BookReviewDue?.data && BookReviewDue?.data.length > 0 ? BookReviewDue?.data?.map((data: ReviewedBook, idx: number) => (
                        <LibraryBookCard
                            key={data.bookId?._id ?? idx}
                            bookTitleOrTitle={data.bookId?.title ?? "Book Title"}
                            author={data.bookId?.authorName ?? "Author Name"}
                            publishedDate={data.bookId?.createdAt ? new Date(data.bookId?.createdAt) : "No Data Found"}
                            coinsPerReview={data.bookId?.points ?? 0}
                            imageSrc={data.bookId?.bookCover ?? "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"}
                        >
                            <Button radius="sm" onClick={() => handleDetails(data._id)} className="w-full bg-primary text-white py-2 rounded-lg">
                                Book Details
                            </Button>
                        </LibraryBookCard>
                    )) : <p>No Book To Show</p>
                    }
                </div>
            </div>
            <div className="mt-10">
                <h3 className="mb-2 font-semibold">
                    To be Reviewed
                </h3>
                <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                    {BookReview?.data && BookReview?.data.length > 0 ? BookReview?.data?.map((data: ReviewedBook, idx: number) => (
                        <LibraryBookCard
                            key={data.bookId?._id ?? idx}
                            bookTitleOrTitle={data.bookId?.title ?? "Book Title"}
                            author={data.bookId?.authorName ?? "Author Name"}
                            publishedDate={data.bookId?.createdAt ? new Date(data.bookId?.createdAt) : "No Data Found"}
                            coinsPerReview={data.bookId?.points ?? 0}
                            imageSrc={data.bookId?.bookCover ?? "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"}
                        >
                            <Button radius="sm" onClick={() => handleDetails(data._id)} className="w-full bg-primary text-white py-2 rounded-lg">
                                Book Details
                            </Button>
                        </LibraryBookCard>
                    )) : <p>No Book To Show</p>
                    }
                </div>
            </div>
            <div className="mt-10">
                <h3 className="mb-2 font-semibold">
                    Submitted
                </h3>
                <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                    {BookReviewSubmitted?.data && BookReviewSubmitted?.data.length > 0 ? BookReviewSubmitted?.data?.map((data: ReviewedBook, idx: number) => (
                        <LibraryBookCard
                            key={data.bookId?._id ?? idx}
                            bookTitleOrTitle={data.bookId?.title ?? "Book Title"}
                            author={data.bookId?.authorName ?? "Author Name"}
                            publishedDate={data.bookId?.createdAt ? new Date(data.bookId?.createdAt) : "No Data Found"}
                            coinsPerReview={data.bookId?.points ?? 0}
                            imageSrc={data.bookId?.bookCover ?? "https://img.freepik.com/premium-vector/photo-icon-picture-icon-image-sign-symbol-vector-illustration_64749-4409.jpg"}
                        >
                            <Button radius="sm" onClick={() => handleDetails(data._id)} className="w-full bg-primary text-white py-2 rounded-lg">
                                Book Details
                            </Button>
                        </LibraryBookCard>
                    )) : <p>No Book To Show</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Reading;
