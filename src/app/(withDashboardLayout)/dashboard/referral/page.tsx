import Referral from '@/components/Dashboard/pages/refarel/Referal';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Referral  ',
}

const page = () => {
    return (
        <div className='dashboard-containers'>
            <Referral />
        </div>
    );
};

export default page;