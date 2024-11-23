import Settings from '@/components/Dashboard/pages/settings/Settings';
import BreadCrumb from '@/components/shared/breadCrumb/BreadCrumb';
import React from 'react';

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