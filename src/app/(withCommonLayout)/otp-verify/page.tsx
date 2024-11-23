import OTPVerify from '@/components/Auth/OTPVerify/OTPVerify';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Verify  ',
}

const OTPPage = () => {
    return (
        <>
            <OTPVerify/>
        </>
    );
};

export default OTPPage;