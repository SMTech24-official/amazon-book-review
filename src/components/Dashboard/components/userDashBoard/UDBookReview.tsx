import React from 'react';
import BooksCards from '../cards/booksCard/BooksCards';

const UDBookReview = () => {
    const bookData = {
        bookTitle: "Dune",
        status: "Live",
        readers: 2,
        publishedDate: "14-08-2024",
        coinsPerReview: 10,
        reviewCount: 12,
        avgRating: 5.4,
        imageSrc: "/placeholder.svg?height=180&width=120",
    };

    return (
        <div>
            <BooksCards
                bookTitle={bookData.bookTitle}
                status={bookData.status}
                readers={bookData.readers}
                publishedDate={bookData.publishedDate}
                coinsPerReview={bookData.coinsPerReview}
                reviewCount={bookData.reviewCount}
                avgRating={bookData.avgRating}
                imageSrc={bookData.imageSrc}
            />
        </div>
    );
};

export default UDBookReview;