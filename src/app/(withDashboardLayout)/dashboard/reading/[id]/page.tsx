import BookReview from '@/components/Dashboard/pages/bookDetails/BookDetails';
import BreadCrumb from '@/components/Shared/breadCrumb/BreadCrumb';
import React from 'react';

const BookReviewPage = () => {
    return (
        <div className='dashboard-containers'>
            <BreadCrumb />
            <BookReview />
        </div>
    );
};

export default BookReviewPage;