import Reading from '@/components/Dashboard/pages/reading/Reading';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Reading  ',
}


const page = () => {
    return (
        <div className='dashboard-containers'>
            <Reading />
        </div>
    );
};

export default page;