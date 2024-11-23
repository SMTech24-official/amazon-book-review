"use client"

import { booksReview } from '@/lib/fakeData/BooksReview';
import { useState } from 'react';
import FilterDropdown from '../../components/filterButton/FilterButton';
import LibraryBookCard from '../../components/cards/libraryBookCard/LibraryBooksCard';
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';

const UserLibrary = () => {
    const [filter, setFilter] = useState('All'); // State to manage filter

    // Filter books based on the selected filter
    const filteredBooks = booksReview.filter(book =>
        filter === 'All' || book.genre == filter.toLocaleLowerCase() || book.bookFromet == filter.toLocaleLowerCase()
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
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start  justify-between mb-4 '>
                <BreadCrumb />
                <FilterDropdown filter={filter} setFilter={setFilter} genres={genres} />
            </div>

            {/* Books Grid */}
            <div className='flex flex-wrap md:grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-3 items-center justify-center'>
                {filteredBooks.map(data => (
                    <LibraryBookCard
                        key={data.id}
                        bookTitleOrTitle={data.bookTitle}
                        author={data.author}
                        publishedDate={new Date(data.publishedDate)}
                        coinsPerReview={data.coinsPerReview}
                        imageSrc={data.imageSrc}
                    >
                        <button className="w-full bg-primary text-white py-2 rounded-lg">
                            Start Reding
                        </button>
                    </LibraryBookCard>
                ))}
            </div>
        </div>
    );
};

export default UserLibrary;
