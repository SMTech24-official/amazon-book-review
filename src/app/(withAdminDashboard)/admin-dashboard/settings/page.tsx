import Settings from '@/components/Dashboard/pages/settings/Settings';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Settings',
  }
  

  
const page = () => {
    return (
        <div className='dashboard-containers'>
            <Settings />
        </div> 
    );
};

export default page;