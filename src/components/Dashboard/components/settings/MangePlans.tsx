import { Button } from "@/components/ui/button";
import { SubscriptionPlan } from "@/lib/types/type";
import SubscriptionCards from "../cards/subscriptionCards/SubscriptionCards";

export default function ManagePlans({ subscriptionsPlan }: { plans: string, subscriptionsPlan: SubscriptionPlan[] }) {



    return (
        <div className="space-y-6">
            <div className="bg-white px-6 pb-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-6 border-b pb-2">Manage Plans</h2>
                <div className="grid xl:grid-cols-2 gap-6">
                    {subscriptionsPlan?.map((plan, index) => (<SubscriptionCards key={index} plan={plan} />))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    <Button variant="ghost" className="border">
                        Discard
                    </Button>
                    <Button
                        variant="ghost"
                        className="text-red-500 hover:text-red-600 border"
                    >
                        Unsubscribe
                    </Button>
                </div>
            </div>
        </div>
    );
}
