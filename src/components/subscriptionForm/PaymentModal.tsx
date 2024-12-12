'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SubscriptionModal({ subscriptionData, isOpen, setIsOpen }: { subscriptionData: any, isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    const router = useRouter()

    const formatCurrency = (amount: number, currency: string = "USD") => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)
    }

    // console.log(subscriptionData?.items.data[0].plan);
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {/* Button to trigger dialog */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    {/* <DialogTitle>Subscription Details</DialogTitle> */}
                </DialogHeader>
                <Card>
                    <CardHeader>
                        <CardTitle>Subscription Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {/* Plan */}
                        <div className="flex justify-between">
                            <span className="font-medium">Plan:</span>
                            <span className="capitalize">{subscriptionData?.subscriptionPlane || "Migrated"}</span>
                        </div>
                        {/* Subtotal */}
                        <div className="flex justify-between">
                            <span className="font-medium">Subtotal:</span>
                            <span>{formatCurrency(subscriptionData?.subtotal / 100 || subscriptionData?.items.data[0].plan.amount / 100)}</span>
                        </div>
                        {/* Discount */}
                        <div className="flex justify-between">
                            <span className="font-medium">Discount:</span>
                            <span>-{formatCurrency(subscriptionData?.discount / 100 || 0)}</span>
                        </div>
                        {/* Discount Percent */}
                        <div className="flex justify-between">
                            <span className="font-medium">Discount Percent:</span>
                            <span>{subscriptionData?.discountPercent || 0}%</span>
                        </div>
                        {/* Total */}
                        <div className="flex justify-between">
                            <span className="font-medium">Total:</span>
                            <span>{formatCurrency(subscriptionData?.total / 100 || subscriptionData?.items.data[0].plan.amount / 100)}</span>
                        </div>

                        {/* Go to Login */}
                        <div className="flex justify-center items-center mt-8">
                            <button
                                onClick={() => router.push("/login")}
                                className="border p-2 rounded-lg bg-primary text-white"
                            >
                                Go to LogIn
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </DialogContent>
        </Dialog>
    )
}
