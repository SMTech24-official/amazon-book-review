import TabPage from '@/components/Shared/tabPage/TabPage';
import Activity from '../../components/userDashBoard/Activity';
import ReviewHistory from '../../components/userDashBoard/ReviewHistory';
import UDBookReview from '../../components/userDashBoard/UDBookReview';

const UserDashboard = () => {

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
        </div>
    );
};

export default UserDashboard;