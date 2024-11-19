import { Button } from "@/components/ui/button";
import { SubscriptionPlan } from "@/lib/types/type";
import { Check } from "lucide-react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

export default function ManagePlans({ plans, subscriptionsPlan }: { plans: string, subscriptionsPlan: SubscriptionPlan[] }) {
    return (
        <div className="space-y-6">
            <div className="bg-white px-6 pb-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-6 border-b pb-2">Manage Plans</h2>
                <div className="grid xl:grid-cols-2 gap-6">
                    {subscriptionsPlan?.map((plan, index) => (
                        <div
                            key={index}
                            className={`border rounded-lg p-6 space-y-6 flex flex-col items-center ${plans == plan.type ? "border border-primary" : ""}`}
                        >
                            <div className="flex items-center gap-4 flex-col">
                                <div className={` p-2 rounded-lg`}>
                                    <Image
                                        src={plan.image}
                                        alt={`${plan.type} Icon`}
                                        width={100}
                                        height={100}
                                        className="w-14 h-14"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl">{plan.name}</h3>
                                </div>
                            </div>
                            <button className={`p-3 border rounded-md text-[18px] ${plans == plan.type ? "bg-primary text-white" : "border border-primary text-primary"} flex items-center justify-center gap-3`}>
                                {plan.button.label}
                                <IoIosArrowForward  />
                            </button>
                            <div className="space-y-4">
                                <div className="font-bold">Plan Includes</div>
                                <div className="text-sm">{plan.price}</div>
                                <ul className=" grid lg:grid-cols-1 grid-cols-1 md:grid-cols-2 gap-2">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
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
