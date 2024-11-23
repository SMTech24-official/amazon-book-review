import SignUp from '@/components/Auth/SignUp/SignUp';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'SignUp  ',
}

const SignUpPage = () => {
    return (
        <>
            <SignUp/>
        </>
    );
};

export default SignUpPage;