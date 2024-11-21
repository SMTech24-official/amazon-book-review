"use client"

import { booksReview } from '@/lib/fakeData/BooksReview';
import { useState } from 'react';
import BooksCards from '../../components/cards/booksCard/BooksCards';
import FilterDropdown from '../../components/filterButton/FilterButton';

const UserLibrary = () => {
    const [filter, setFilter] = useState('All'); // State to manage filter

    // Filter books based on the selected filter
    const filteredBooks = booksReview.filter(book =>
        filter === 'All' || book.status === filter
    );

    const genres = [
        "All",
        "Horror",
        "Drama",
        "Comedy",
        "Romance",
        "Science fiction",
        "Mystery",
        "Thriller"
    ]


    return (
        <div>
            {/* heading */}
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start xl:items-center justify-between mb-4 py-1'>
                <p className='font-bold text-2xl'>My Books</p>
                <FilterDropdown filter={filter} setFilter={setFilter} genres={genres} />
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

export default UserLibrary;
