import ForgetPassword from '@/components/Auth/forget-password/forgetPass';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Forget Password  ',
}


const ForgetPAss = () => {
    return (
        <>
            <ForgetPassword />
        </>
    );
};

export default ForgetPAss;