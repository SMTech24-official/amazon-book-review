import Settings from '@/components/Dashboard/pages/settings/Settings';
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Settings  ',
}

const page = () => {
    return (
        <div className='dashboard-containers'>
            <div className='lg:mb-4'>
                <BreadCrumb />
            </div>
            <Settings />
        </div>
    );
};

export default page;