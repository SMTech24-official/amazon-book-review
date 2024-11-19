import BooksCards from '@/components/Dashboard/components/cards/booksCard/BooksCards';
import UnderCOnstruction from '@/components/underConstruction/UnderConstruction';
import React from 'react';

const page = () => {
    return (
        <div>
            <UnderCOnstruction pageName='Add Books' />
            <BooksCards />
        </div>
    );
};

export default page;