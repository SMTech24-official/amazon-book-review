import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import HelpPages from '@/components/Dashboard/pages/help/HelpPages';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Help  ',
}


const page = () => {
    return (
        <div className='dashboard-containers'>
            <BreadCrumb />
            <HelpPages />
        </div>
    );
};

export default page;