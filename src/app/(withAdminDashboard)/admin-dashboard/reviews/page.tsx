import { AddReviewForm } from '@/components/AdminDashboard/reviews/Reviews';
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import React from 'react';

const page = () => {
    return (
        <div className='dashboard-containers'>
            <BreadCrumb />
            <AddReviewForm />
        </div>
    );
};

export default page;