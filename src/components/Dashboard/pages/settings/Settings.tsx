import TabPage from "@/components/common/tabPage/TabPage";
import { SubscriptionsPlan } from "@/lib/fakeData/subscriptionPlans";
import { FaClipboardList, FaUserCog } from "react-icons/fa";
import General from "../../components/settings/General";
import ManagePlans from "../../components/settings/MangePlans";
import { user } from "@/lib/fakeData/user";


export default function Settings() {


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
            component: <ManagePlans subscriptionsPlan={SubscriptionsPlan} plans={user.subscriptionPlane} />
        }
    ];

    // demo link for breadcrumb 
    // http://localhost:3000/admin-dashboard/settings?tab=general/subtab1/subtab2
    return (
        <TabPage defaultTab="general" tabs={tabs} />
    )
}