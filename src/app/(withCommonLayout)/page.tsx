import Features from '@/components/home/Features';
import GettingStarted from '@/components/home/GettingStarted';
import WhatOurCustomerThinks from '@/components/home/WhatOurCustomerThinks';
import React from 'react';

const HomePage = () => {
    return (
        <div>
           <GettingStarted/>
           <WhatOurCustomerThinks/>
           <Features/>
        </div>
    );
};

export default HomePage;