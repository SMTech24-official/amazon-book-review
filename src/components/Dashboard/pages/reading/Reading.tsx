"use client"

import { booksReview } from "@/lib/fakeData/BooksReview";
import LibraryBookCard from "../../components/cards/libraryBookCard/LibraryBooksCard";
import BreadCrumb from "@/components/shared/breadCrumb/BreadCrumb";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";


const Reading = () => {
    const router = useRouter()
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
                    {booksReview.slice(0, 10).map(data => (
                        <LibraryBookCard
                            key={data.id}
                            bookTitleOrTitle={data.bookTitle}
                            author={data.author}
                            publishedDate={new Date(data.publishedDate)}
                            coinsPerReview={data.coinsPerReview}
                            imageSrc={data.imageSrc}
                        >
                            <button onClick={() => router.push(`/dashboard/reading/${data.id}`)} className="w-full bg-primary text-white py-2 rounded-lg">
                                Book Details
                            </button>
                        </LibraryBookCard>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <h3 className="mb-2 font-semibold">
                    To be Reviewed
                </h3>
                <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                    {booksReview.slice(11, 25).map(data => (
                        <LibraryBookCard
                            key={data.id}
                            bookTitleOrTitle={data.bookTitle}
                            author={data.author}
                            publishedDate={new Date(data.publishedDate)}
                            coinsPerReview={data.coinsPerReview}
                            imageSrc={data.imageSrc}
                        >
                            <button onClick={() => router.push(`/dashboard/reading/${data.id}`)} className="w-full bg-primary text-white py-2 rounded-lg">
                                Book Details
                            </button>
                        </LibraryBookCard>
                    ))}
                </div>
            </div>
            <div className="mt-10">
                <h3 className="mb-2 font-semibold">
                    Submitted
                </h3>
                <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                    {booksReview.slice(26, 50).map(data => (
                        <LibraryBookCard
                            key={data.id}
                            bookTitleOrTitle={data.bookTitle}
                            author={data.author}
                            publishedDate={new Date(data.publishedDate)}
                            coinsPerReview={data.coinsPerReview}
                            imageSrc={data.imageSrc}
                        >
                            <Button   radius="sm" onClick={() => router.push(`/dashboard/reading/${data.id}`)} className="w-full bg-primary text-white py-2 rounded-lg">
                                Book Details
                            </Button>
                        </LibraryBookCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reading;
