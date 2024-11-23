import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import HelpPages from '@/components/Dashboard/pages/help/HelpPages';
import React from 'react';

const page = () => {
    return (
        <div className='dashboard-containers'>
            <BreadCrumb />
            <HelpPages />
        </div>
    );
};

export default page;