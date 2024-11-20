import React from 'react';
import BooksCards from '../cards/booksCard/BooksCards';
import { booksReview } from '@/lib/fakeData/BooksReview';

const UDBookReview = () => {
    return (
        <div className='grid sm:grid-cols-1 grid-cols-2 xl:gap-5 lg;gap-4 md:gap-3 gap-2'>
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
    );
};

export default UDBookReview;