import TabPage from "@/components/common/tabPage/TabPage";
import { SubscriptionsPlan } from "@/lib/fakeData/subscriptionPlans";
import { FaClipboardList, FaUserCog } from "react-icons/fa";
import General from "../../components/settings/General";
import ManagePlans from "../../components/settings/MangePlans";
import { User } from "@/lib/types/type";


export default function Settings() {
    const dummyUser: User = {
        _id: "6742aea7251ae2fcb0d12fbc",
        fullName: "John Doe",
        reviewerName: "johnnydoe",
        amazonCountry: "USA",
        profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        email: "john.doe@example.com",
        role: "author",
        points: 150,
        otp: null,
        otpExpires: null,
        isVerified: true,
        isSubscribed: true,
        subscriptionPlane: "Premium",
        invitedFriends: 5,
        termsAccepted: true,
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-11-01T12:45:00Z",
        __v: 0,
        amazonAuthorPageLink: "https://www.amazon.com/author/johndoe"
    };

    const tabs = [
        {
            label: "General",
            value: "general",
            icon: <FaUserCog className="min-w-6 min-h-6 mr-2" />,
            component: <General user={dummyUser} />
        },
        {
            label: "Manage Plans",
            value: "manage-plans",
            icon: <FaClipboardList className="min-w-6 min-h-6 mr-2" />,
            component: <ManagePlans subscriptionsPlan={SubscriptionsPlan} plans={dummyUser.subscriptionPlane} />
        }
    ];

    // demo link for breadcrumb 
    // http://localhost:3000/admin-dashboard/settings?tab=general/subtab1/subtab2
    return (
        <TabPage defaultTab="general" tabs={tabs} />
    )
}