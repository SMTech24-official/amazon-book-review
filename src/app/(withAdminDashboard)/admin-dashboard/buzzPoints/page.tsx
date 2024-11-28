import BuzzPointComponent from '@/components/AdminDashboard/PointComponent/PointComponent';
import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import React from 'react';

const BuzzPointPage = () => {
  return (
    <div className='dashboard-containers'>
      <BreadCrumb/>
      <BuzzPointComponent/>
    </div>
  );
};

export default BuzzPointPage;