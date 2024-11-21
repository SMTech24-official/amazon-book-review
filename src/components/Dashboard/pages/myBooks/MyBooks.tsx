"use client"

import React, { useState } from 'react';
import BooksCards from '../../components/cards/booksCard/BooksCards';
import { booksReview } from '@/lib/fakeData/BooksReview';
import { RiStickyNoteAddFill } from 'react-icons/ri';
import Link from 'next/link';
import BreadCrumb from '@/components/Shared/breadCrumb/BreadCrumb';

const MyBooks = () => {
    const [filter, setFilter] = useState('All'); // State to manage filter

    // Filter books based on the selected filter
    const filteredBooks = booksReview.filter(book =>
        filter === 'All' || book.status === filter
    );

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
            <div className='sm:grid sm:grid-cols-2 flex flex-wrap items-center justify-center xl:gap-5 lg:gap-4 md:gap-3 gap-2'>
                {filteredBooks.map(data => (
                    <BooksCards
                        key={data.id}
                        bookTitle={data.bookTitle}
                        status={data.status}
                        readers={data.readers}
                        publishedDate={new Date(data.publishedDate)}
                        coinsPerReview={data.coinsPerReview}
                        reviewCount={data.reviewCount}
                        avgRating={data.avgRating}
                        imageSrc={data.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyBooks;
