"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaClipboardList, FaUserCog } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import General from '../../components/settings/General'
import { user } from "@/lib/fakeData/user";
import MangePlans from "../../components/settings/MangePlans";
import { SubscriptionsPlan } from "@/lib/fakeData/subscriptionPlans";
import { useState } from "react";


export default function Settings() {

    const [tab, setTab] = useState<string>("general") 




    return (
        <div className="min-h-screen bg-gray-50/50 dashboard-containers">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="py-2">
                    <div className="flex items-center gap-2 ">
                        <span className="text-gray-500">Settings</span>
                        <span className="text-gray-500">{'>'}</span>
                        <span className="uppercase">{tab}</span>
                    </div>
                </div>
            </div>

            <div className="border-t ">
                <Tabs defaultValue={tab} className="grid sm:grid-cols-6 xl:grid-cols-5 min-h-screen">
                    <div className='pt-4 col-span-2 xl:col-span-1 sm:border-r  w-full h-full sticky sm:block top-[49px]'>
                        <TabsList className="sm:flex sm:flex-col items-start justify-center sm:justify-start sm:pr-4 sm:sticky sm:top-20 top-16 bg-white xl:block min-h-14">
                            <TabsTrigger onClick={() => setTab("general")} className='sm:text-base w-full' value="general">
                                <FaUserCog className='min-w-6 min-h-6 mr-2' />
                                General
                            </TabsTrigger>
                            <TabsTrigger onClick={() => setTab("manage-plans")} className='  sm:text-base w-full' value="manage-plans">
                                <FaClipboardList className='min-w-6 min-h-6 mr-2' />
                                Manage Plans
                            </TabsTrigger>
                            <TabsTrigger onClick={() => setTab("verification")} className='  sm:text-base w-full' value="verification">
                                <MdVerified className='min-w-6 min-h-6 mr-2' />
                                Verification
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <div className='col-span-4  pt-4'>
                        <TabsContent value="general">
                            <General user={user} />
                        </TabsContent>
                        <TabsContent value="manage-plans">
                            <MangePlans subscriptionsPlan={SubscriptionsPlan} plans={user.plans} />
                        </TabsContent>
                        <TabsContent value="verification">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h2 className="text-lg font-semibold mb-6">Verification</h2>
                                <p>Page design does not exists on Figma</p>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}