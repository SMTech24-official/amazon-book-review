"use client"
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import { NoBooksFound } from '@/components/noBooksFound/NoFoundBooks';
import MyLoading from '@/components/ui/MyLoading';
import { useGetAllBooksQuery, useGetAllReadingBooksQuery } from '@/redux/features/book/bookApi';
import { useEffect, useState } from 'react';
import BooksCards from '../cards/booksCard/BooksCards';

const UDBookReview = () => {
    const { data: BooksData, isLoading } = useGetAllBooksQuery(undefined)
    const { data: ReadingBooksData, isLoading: isLoading2 } = useGetAllReadingBooksQuery("to-be-reviewed")
    const [data, setData] = useState<typeof BooksData>(null)
    const [filter, setFilter] = useState("myBooks")

    useEffect(() => {
        setData(BooksData?.data)
    }, [BooksData])

    if (isLoading && isLoading2) {
        return <div className="h-screen"><MyLoading /></div>
    }

    const handleFilter = (text: string) => {
        if (text == "myBooks") {
            setFilter("myBooks")
            setData(BooksData.data)
        }
        if (text == "reading") {
            setFilter("reading")
            setData(ReadingBooksData?.data)
        }
    }
    console.log(ReadingBooksData?.data);
    console.log(BooksData?.data);
    return (
        <div>
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start xl:items-center justify-between mb-4'>
                <BreadCrumb />

                <div className='flex items-center justify-center gap-4'>
                    <button onClick={() => handleFilter("myBooks")} className={`${filter === "myBooks" && "text-primary"} text-sm font-semibold`}>
                        Your Books
                    </button>
                    <button onClick={() => handleFilter("reading")} className={`${filter === "reading" && "text-primary"} text-sm font-semibold`}>
                        Reading
                    </button>
                </div>
            </div>
            {
                data?.length > 0 ? <div className='md:grid md:grid-cols-1 flex flex-wrap items-center justify-center xl:gap-5 lg;gap-4 md:gap-3 gap-2'>
                    {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        data?.map((book: any) => {
                            console.log(book?.points);
                            return (
                                <BooksCards
                                    key={filter === "myBooks" ? book?._id : book?.bookId?._id}
                                    id={filter === "myBooks" ? book?._id : book?.bookId?._id}
                                    bookTitle={filter === "myBooks" ? book?.title : book?.bookId?.title}
                                    status={filter === "myBooks" ? book?.status : book?.bookId?.status}
                                    // readers={book?.readers ?? 0}
                                    publishedDate={new Date(filter === "myBooks" ? book?.createdAt : book?.bookId?.createdAt)}
                                    coinsPerReview={filter === "myBooks" ? book?.points : book?.bookId?.points}
                                    reviewCount={filter === "myBooks" ? book?.reviewCount : book?.bookId?.reviewCount}
                                    imageSrc={filter === "myBooks" ? book?.bookCover : book?.bookId?.bookCover}
                                    isReadyForReview={filter === "myBooks" ? book?.isReadyForReview : book?.bookId?.isReadyForReview}
                                />
                            )
                        })
                    }
                </div> : <NoBooksFound />
            }

        </div>
    );
};

export default UDBookReview;