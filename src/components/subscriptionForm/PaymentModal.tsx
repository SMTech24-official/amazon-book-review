'use client'

// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SubscriptionModal({ subscriptionData, isOpen, setIsOpen }: { subscriptionData: any, isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    const router = useRouter()
    const formatDate = (timestamp: number) => {
        return new Date(timestamp * 1000).toLocaleDateString()
    }

    const formatCurrency = (amount: number, currency: string) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount / 100)
    }
    console.log(subscriptionData);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {/* <Button variant="outline">View Subscription</Button> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle>Subscription Details</DialogTitle>
                </DialogHeader>
                <Card>
                    <CardHeader>
                        <CardTitle>Subscription Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Status:</span>
                            <span className="capitalize">{subscriptionData?.status}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Plan:</span>
                            <span>{subscriptionData?.plan.amount && formatCurrency(subscriptionData?.plan?.amount, subscriptionData?.plan?.currency)} / {subscriptionData?.plan.interval}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Current Period Ends:</span>
                            <span>{formatDate(subscriptionData?.current_period_end)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Subscription ID:</span>
                            <span className="text-sm">{subscriptionData?.id}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Customer ID:</span>
                            <span className="text-sm">{subscriptionData?.customer}</span>
                        </div>


                        <div className="flex justify-center items-center mt-8">
                            <button onClick={() => router.push("/login")} className=" border p-2 rounded-lg bg-primary text-white">
                                Go to LogIn
                            </button>
                        </div>

                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}

