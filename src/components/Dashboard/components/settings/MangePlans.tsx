"use client"
import { Button } from "@/components/ui/button";
import { SubscriptionPlan } from "@/lib/types/type";
import SubscriptionCards from "../cards/subscriptionCards/SubscriptionCards";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ManagePlans({ subscriptionsPlan }: { plans: string, subscriptionsPlan: SubscriptionPlan[] }) {

    const [plansTypes, setPlansTypes] = useState<string | null>(null)
    const router = useRouter()

    return (
        <div className="space-y-6">
            <div className="bg-white px-6 pb-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-6 border-b pb-2">Manage Plans</h2>
                <div className="grid xl:grid-cols-2 gap-6">
                    {subscriptionsPlan?.map((plan, index) => (<SubscriptionCards plansTypes={plansTypes} setPlansTypes={setPlansTypes} key={index} plan={plan} />))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    <Button onClick={() => setPlansTypes(null)} variant="ghost" className="border">
                        Discard
                    </Button>
                    {
                        plansTypes && <Button
                            onClick={() => router.push("/payment")}
                            variant="ghost"
                            className="text-red-500 hover:text-red-600 border"
                        >
                            Subscribe
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}
