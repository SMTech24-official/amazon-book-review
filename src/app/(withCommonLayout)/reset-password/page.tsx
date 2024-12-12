import ResetPassWord from '@/components/Auth/reset-password/ResetPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reset Password  ',
}


const ForgetPAss = () => {
    return (
        <>
            <ResetPassWord />
        </>
    );
};

export default ForgetPAss;