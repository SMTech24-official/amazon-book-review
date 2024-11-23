import HelpPages from '@/components/Dashboard/pages/help/HelpPages';
import BreadCrumb from '@/components/Shared/breadCrumb/BreadCrumb';
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