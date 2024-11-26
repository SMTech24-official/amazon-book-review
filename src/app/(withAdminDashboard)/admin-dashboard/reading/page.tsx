import UnderCOnstruction from '@/components/underConstruction/UnderConstruction';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Reading',
  }
  

  

const page = () => {
    return (
        <div>
            <UnderCOnstruction pageName='Reading'/> 
        </div>
    );
};

export default page;