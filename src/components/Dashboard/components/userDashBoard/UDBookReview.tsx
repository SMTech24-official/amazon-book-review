import React from 'react';
import BooksCards from '../cards/booksCard/BooksCards';
import { booksReview } from '@/lib/fakeData/BooksReview';
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';

const UDBookReview = () => {
    return (
        <div>
            <div className='flex xl:flex-row gap-2 md:gap-3 flex-col items-start xl:items-center justify-between mb-4 '>
                <BreadCrumb />

                <div className='flex items-center justify-center gap-4'>
                    <button className="text-primary text-sm font-semibold">
                        Your Books
                    </button>
                    <button className="text-primary text-sm font-semibold">
                        Reading
                    </button>
                </div>
            </div>
            <div className='md:grid md:grid-cols-1 flex flex-wrap items-center justify-center xl:gap-5 lg;gap-4 md:gap-3 gap-2'>
                {
                    booksReview?.map(data => <BooksCards
                        key={data.id}
                        bookTitle={data.bookTitle}
                        status={data.status}
                        readers={data.readers}
                        publishedDate={new Date(data.publishedDate)}
                        coinsPerReview={data.coinsPerReview}
                        reviewCount={data.reviewCount}
                        imageSrc={data.imageSrc}
                    />)
                }

            </div>
        </div>
    );
};

export default UDBookReview;