import General from '@/components/Dashboard/components/settings/General';
import ManagePlans from '@/components/Dashboard/components/settings/MangePlans';
import TabPage from '@/components/shared/tabPage/TabPage';
import { SubscriptionsPlan } from '@/lib/fakeData/subscriptionPlans';
import { user } from '@/lib/fakeData/user';
import React from 'react';
import { FaClipboardList, FaUserCog } from 'react-icons/fa';

const page = () => {

    const tabs = [
        {
            label: "General",
            value: "general",
            icon: <FaUserCog className="min-w-6 min-h-6 mr-2" />,
            component: <General user={user} />
        },
        {
            label: "Manage Plans",
            value: "manage-plans",
            icon: <FaClipboardList className="min-w-6 min-h-6 mr-2" />,
            component: <ManagePlans subscriptionsPlan={SubscriptionsPlan} plans={user.plans} />
        }
    ];

    // demo link for breadcrumb 
    // http://localhost:3000/admin-dashboard/settings?tab=general/subtab1/subtab2

    
    return (
        <TabPage defaultTab="general" tabs={tabs} />
    )
};

export default page;