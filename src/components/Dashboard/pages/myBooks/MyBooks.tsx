"use client"

import React, { useState } from 'react';
import BooksCards from '../../components/cards/booksCard/BooksCards';
import { RiStickyNoteAddFill } from 'react-icons/ri';
import Link from 'next/link';
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import { useGetAllBooksQuery } from '@/redux/features/book/bookApi';
import { Book, User } from '@/lib/types/type';
import MyLoading from '@/components/ui/MyLoading';
import { NoBooksFound } from '@/components/noBooksFound/NoFoundBooks';

const MyBooks = () => {
    const { data: BooksData, isLoading } = useGetAllBooksQuery(undefined)

    const [filter, setFilter] = useState('All'); // State to manage filter

    // Filter books based on the selected filter
    const filteredBooks = BooksData?.data.filter((book: User & Book) =>
        filter === 'All' || book?.status?.toLowerCase() === filter?.toLowerCase()
    );

    if (isLoading) {
        return <div className="h-screen"><MyLoading /></div>
    }

    return (
        <div>
            {/* heading */}
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start  justify-between mb-4 '>
                <BreadCrumb />

                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <button
                        className={`hover:bg-primary border rounded-full px-4 py-2 hover:text-white text-gray-500 text-sm font-semibold ${filter === 'All' ? 'bg-primary text-white' : ''
                            }`}
                        onClick={() => setFilter('All')}
                    >
                        All
                    </button>
                    <button
                        className={`hover:bg-primary border rounded-full px-4 py-2 hover:text-white text-gray-500 text-sm font-semibold ${filter === 'Live' ? 'bg-primary text-white' : ''
                            }`}
                        onClick={() => setFilter('Live')}
                    >
                        Live
                    </button>
                    <button
                        className={`hover:bg-primary border rounded-full px-4 py-2 hover:text-white text-gray-500 text-sm font-semibold ${filter === 'Pending' ? 'bg-primary text-white' : ''
                            }`}
                        onClick={() => setFilter('Pending')}
                    >
                        Pending
                    </button>
                    <Link href={"/dashboard/addBooks"} className="hover:bg-primary border rounded-lg px-4 py-2 group text-sm font-semibold flex items-center gap-2 border-primary">
                        <RiStickyNoteAddFill className='min-h-7 min-w-7 text-primary group-hover:text-white' />
                        <span className='text-primary group-hover:text-white'>Add Books</span>
                    </Link>
                </div>

            </div>

            {/* Books Grid */}
            {
                filteredBooks?.length > 0 ? <div className='sm:grid sm:grid-cols-2 flex flex-wrap items-center justify-center xl:gap-5 lg:gap-4 md:gap-3 gap-2'>
                    {filteredBooks?.map((data: User & Book) => (
                        <BooksCards

                            key={data._id}
                            id={data._id}
                            bookTitle={data.title}
                            status={data.status}
                            // readers={data.readers ?? 0}
                            publishedDate={new Date(data.publishedDate)}
                            coinsPerReview={data.coinsPerReview}
                            reviewCount={data.reviewCount}
                            imageSrc={data.bookCover}
                            isReadyForReview={data.isReadyForReview}
                        />
                    ))
                    }
                </div> : <NoBooksFound />
            }

        </div>
    );
};

export default MyBooks;
