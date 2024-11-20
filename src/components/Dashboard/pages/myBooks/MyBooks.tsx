import React from 'react';
import BooksCards from '../../components/cards/booksCard/BooksCards';
import { booksReview } from '@/lib/fakeData/BooksReview';
import { RiStickyNoteAddFill } from 'react-icons/ri';

const MyBooks = () => {
    return (
        <div>
            {/* heading  */}
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start xl:items-center justify-between mb-4  py-1'>
                <p className='font-bold text-2xl'>My Books</p>

                <div className='flex flex-wrap items-center justify-center gap-4'>
                    <button className="hover:bg-primary  border rounded-full px-4  py-2 hover:text-white text-gray-500 text-sm font-semibold">
                        All
                    </button>
                    <button className="hover:bg-primary  border rounded-full px-4  py-2 hover:text-white text-gray-500 text-sm font-semibold">
                        Live
                    </button>
                    <button className="hover:bg-primary  border rounded-full px-4  py-2 hover:text-white text-gray-500 text-sm font-semibold">
                        Pending
                    </button>
                    <button className="hover:bg-primary  border rounded-lg px-4  py-2 group  text-sm font-semibold flex items-center gap-2 border-primary ">
                        <RiStickyNoteAddFill className='min-h-7 min-w-7 text-primary group-hover:text-white' />
                        <span className='text-primary group-hover:text-white'>Add Books</span>
                    </button>
                </div>
            </div>
            <div className='sm:grid sm:grid-cols-2 flex flex-wrap items-center justify-center xl:gap-5 lg;gap-4 md:gap-3 gap-2'>
                {
                    booksReview?.map(data => <BooksCards
                        key={data.id}
                        bookTitle={data.bookTitle}
                        status={data.status}
                        readers={data.readers}
                        publishedDate={new Date(data.publishedDate)}
                        coinsPerReview={data.coinsPerReview}
                        reviewCount={data.reviewCount}
                        avgRating={data.avgRating}
                        imageSrc={data.imageSrc}
                    />)
                }

            </div>
        </div>
    );
};

export default MyBooks;