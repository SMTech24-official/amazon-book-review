"use client"
import TabPage from '@/components/common/tabPage/TabPage';
import Activity from '../../components/userDashBoard/Activity';
import ReviewHistory from '../../components/userDashBoard/ReviewHistory';
import UDBookReview from '../../components/userDashBoard/UDBookReview';
import { useUserDataQuery } from '@/redux/features/auth/authApi';
import NotVerified from '../../components/notVerified/NotVerified';

const UserDashboard = () => {
    const { data: UserData } = useUserDataQuery(undefined)

    const tabs = [
        {
            label: "Books",
            value: "books",
            component: <UDBookReview />
        },
        {
            label: "Review History",
            value: "review-history",
            component: <ReviewHistory />
        },
        {
            label: "Your Activity",
            value: "your-activity",
            component: <Activity />
        }
    ];

    return (
        <div>
            {
                (UserData?.data.profileImage && UserData?.data.amazonAuthorPageLink) ? <div>
                    <div className='hidden sm:grid grid-cols-5 items-start justify-center'>
                        <div className='col-span-3 mr-10 '>
                            <UDBookReview />
                        </div>
                        <div className='grid grid-cols-1 col-span-2 '>
                            <ReviewHistory />
                            <Activity />
                        </div>
                    </div>
                    <div className='sm:hidden block'>
                        <TabPage defaultTab="books" tabs={tabs} />
                    </div>
                </div> : <div className='min-h-[70vh] flex items-center justify-center'>
                    <NotVerified />
                </div>
            }

        </div>
    );
};

export default UserDashboard;