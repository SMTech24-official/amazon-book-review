import OTPVerify from '@/components/Auth/OTPVerify/OTPVerify';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Verify OTP',
}

const OTPPage = () => {
    return (
        <>
            <OTPVerify forgetPassword={true} />
        </>
    );
};

export default OTPPage;