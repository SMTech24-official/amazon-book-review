import UserLibrary from '@/components/Dashboard/pages/library/UserLibrary';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Library  ',
}

const page = () => {
    return (
        <div className='dashboard-containers'>
            <UserLibrary />
        </div>
    );
};

export default page;