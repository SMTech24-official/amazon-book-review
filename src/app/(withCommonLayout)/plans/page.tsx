import PlansComponent from '@/components/Auth/PlansComponent/PlansComponent';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Plans  ',
}

const PlansPage = () => {
    return (
        <>
            <PlansComponent/>
        </>
    );
};

export default PlansPage;