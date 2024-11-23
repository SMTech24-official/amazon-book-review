import UserDashboard from '@/components/Dashboard/pages/userDashboard/UserDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard',
}


const page = () => {
    return (
        <div className='dashboard-containers'>
            <UserDashboard />
        </div>
    );
};

export default page;