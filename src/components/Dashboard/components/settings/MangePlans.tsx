"use client"
import { Button } from "@/components/ui/button";
import { SubscriptionPlan } from "@/lib/types/type";
import { logout } from "@/redux/features/auth/authSlice";
import { useUnSubscribeMutation } from "@/redux/features/payment/payMent";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubscriptionCards from "../cards/subscriptionCards/SubscriptionCards";

export default function ManagePlans({ subscriptionsPlan, plans, payId }: { plans?: string, payId?: string, subscriptionsPlan: SubscriptionPlan[] }) {

    const [plansTypes, setPlansTypes] = useState<string | null>(plans ?? null)
    const router = useRouter()
    const dispatch = useAppDispatch();


    // console.log(payId);
    const [unSubscribe] = useUnSubscribeMutation()


    const handleUnSubscribe = async () => {
        const data = {
            subscriptionId: payId
        }
        const finishRes = await handleAsyncWithToast(
            async () => {
                return unSubscribe(data); // Replace with your actual login function
            },
            "UnSubscribing...", // Toast message for the start of the process
            "Unsubscribed!", // Toast message for success
            `Please Check Your network`, // Toast message for failure
            true,
            dispatch
        );

        // console.log(finishRes);
        if (finishRes?.data.status) {
            dispatch(logout())
        }
    }


    return (
        <div className="space-y-6">
            <div className="bg-white px-6 pb-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-6 border-b pb-2">Manage Plans</h2>
                <div className="grid xl:grid-cols-2 gap-6">
                    {subscriptionsPlan?.map((plan, index) => (<SubscriptionCards plansTypes={plansTypes} setPlansTypes={setPlansTypes} key={index} plan={plan} />))}
                </div>

                <div className="flex items-center justify-center gap-4 mt-6">
                    {
                        !plans && <Button onClick={() => setPlansTypes(null)} variant="ghost" className="border">
                            Discard
                        </Button>
                    }
                    {
                        plansTypes && <div>
                            {
                                plans === plansTypes ? <Button
                                    onClick={() => handleUnSubscribe()}
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-600 border"
                                >
                                    UnSubscribe
                                </Button> : <Button
                                    onClick={() => router.push("/payment")}
                                    variant="ghost"
                                    className="text-red-500 hover:text-red-600 border"
                                >
                                    Subscribe
                                </Button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
