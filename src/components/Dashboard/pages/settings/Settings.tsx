"use client"

import TabPage from "@/components/common/tabPage/TabPage";
import { SubscriptionsPlan } from "@/lib/fakeData/subscriptionPlans";

import MyLoading from "@/components/ui/MyLoading";
import { useUserDataQuery } from "@/redux/features/auth/authApi";
import { FaClipboardList, FaUserCog } from "react-icons/fa";
import General from "../../components/settings/General";
import ManagePlans from "../../components/settings/MangePlans";


export default function Settings() {
    const { data: UserData, isLoading } = useUserDataQuery(undefined)

    console.log(UserData);
    if (isLoading) {
        return <MyLoading />
    }
    const tabs = [
        {
            label: "General",
            value: "general",
            icon: <FaUserCog className="min-w-6 min-h-6 mr-2" />,
            component: <General user={UserData?.data} />
        },
        {
            label: "Manage Plans",
            value: "manage-plans",
            icon: <FaClipboardList className="min-w-6 min-h-6 mr-2" />,
            component: <ManagePlans subscriptionsPlan={SubscriptionsPlan} plans={UserData?.data.subscriptionPlane} />
        }
    ];

    return (
        <TabPage defaultTab="general" tabs={tabs} />
    )
}