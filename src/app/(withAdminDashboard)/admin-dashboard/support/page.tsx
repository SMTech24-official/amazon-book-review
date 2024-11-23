import UnderCOnstruction from '@/components/underConstruction/UnderConstruction';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Support',
  }
  

  
const page = () => {
    return (
        <div>
            <UnderCOnstruction pageName='Support'/>
        </div>
    );
};

export default page;