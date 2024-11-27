"use client"
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import MyLoading from '@/components/ui/MyLoading';
import { Book, User } from '@/lib/types/type';
import { useGetAllBooksQuery, useGetAllReadingBooksQuery } from '@/redux/features/book/bookApi';
import BooksCards from '../cards/booksCard/BooksCards';
import { useEffect, useState } from 'react';
import { NoBooksFound } from '@/components/noBooksFound/NoFoundBooks';

const UDBookReview = () => {
    const { data: BooksData, isLoading } = useGetAllBooksQuery(undefined)
    const { data: ReadingBooksData, isLoading: isLoading2 } = useGetAllReadingBooksQuery("to-be-reviewed")
    const [data, setData] = useState<typeof BooksData>(null)
    const [filter, setFilter] = useState("myBooks")

    useEffect(() => {
        setData(BooksData)
    }, [BooksData])

    if (isLoading || isLoading2) {
        return <div className="h-screen"><MyLoading /></div>
    }

    const handleFilter = (text: string) => {
        if (text == "myBooks") {
            setFilter("myBooks")
            setData(BooksData)
        }
        if (text == "reading") {
            setFilter("reading")
            setData(ReadingBooksData)
        }
    }

    return (
        <div>
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start xl:items-center justify-between mb-4 '>
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
            <div className='md:grid md:grid-cols-1 flex flex-wrap items-center justify-center xl:gap-5 lg;gap-4 md:gap-3 gap-2'>
                {
                  data?.data.length > 0 ?  data?.data.map((book: User & Book) => <BooksCards
                        key={book._id}
                        id={book._id}
                        bookTitle={book.title}
                        status={book.status}
                        // readers={book.readers ?? 0}
                        publishedDate={new Date(book.createdAt)}
                        coinsPerReview={book.coinsPerReview}
                        reviewCount={book.reviewCount}
                        imageSrc={book.bookCover}
                        isReadyForReview={book.isReadyForReview}
                    />) : <NoBooksFound/>
                }
            </div>
        </div>
    );
};

export default UDBookReview;