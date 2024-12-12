'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { SubscriptionsPlan } from '@/lib/fakeData/subscriptionPlans'
import { SubscriptionPlan } from '@/lib/types/type'
import { cn } from '@/lib/utils'
import { useUserDataQuery } from '@/redux/features/auth/authApi'
import { usePaymentMutation, useUpdatePaymentMutation } from '@/redux/features/payment/payMent'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useState } from 'react'
import { toast } from 'sonner'
import { Icons } from '../icons/Icons'
import SubscriptionModal from './PaymentModal'

export function SubscriptionForm() {
  const { data: UserData } = useUserDataQuery(undefined)

  const stripe = useStripe()
  const elements = useElements()
  const [payment] = usePaymentMutation()
  const [updatePayment] = useUpdatePaymentMutation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modalData, setModalData] = useState<any | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [coupon, setCoupon] = useState('')
  const selectPlan = localStorage.getItem("plan")

  // console.log(UserData?.data);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)
    setError(null)

    try {
      const { error: cardError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      })

      if (cardError) {
        throw new Error(cardError.message)
      }

      const data = {
        planType: localStorage.getItem("plan"),
        email: localStorage.getItem("verifyEmailByOTP"),
        paymentMethodId: paymentMethod.id,
        couponId: coupon,
      }

      if (paymentMethod.id) {
        try {
          if (UserData?.data.subscriptionId) {

            const newData = {
              planType: localStorage.getItem("plan"),
              paymentMethodId: paymentMethod.id,
            }

            const res = await updatePayment({ data: newData })
            if (res?.data) {
              setModalData(res?.data.data)
              setIsOpen(true)
              toast.success("Subscription successful")
              // router.push("/login")
            } else {
              toast.error("Subscription failed")
            }
          }
          else {
            const res = await payment(data)
            if (res?.data) {
              setModalData(res?.data.data)
              setIsOpen(true)
              toast.success("Subscription successful")
              // router.push("/login")
            } else {
              toast.error("Subscription failed")
            }
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          // console.error(error)
          toast.error("Subscription failed")
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }


  return (
    <Card className="w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Choose Your Subscription Plan</CardTitle>
          <CardDescription>Select a plan that works best for you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectPlan ?? ""}
            className="grid gap-4 md:grid-cols-1"
          >
            {SubscriptionsPlan?.map((plan: SubscriptionPlan, idx) => (
              <div key={idx}>
                <RadioGroupItem
                  value={plan.type}
                  id={plan.type}
                  className="peer sr-only"
                  onChange={() => localStorage.setItem("plan", plan.type)}
                />
                <Label
                  htmlFor={plan.type}
                  className={cn(
                    "flex flex-col items-start justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary",
                    selectPlan === plan.type && "border-primary"
                  )}
                >
                  <div className="space-y-1 text-start">
                    <p className="text-lg font-medium leading-none">{plan.name}</p>
                    <p className="text-2xl font-bold">{plan.price}</p>
                    <p className="text-sm text-muted-foreground">per {plan.type}</p>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="space-y-2">
            <Label htmlFor="coupon">Coupon Code</Label>
            <div className="flex space-x-2">
              <Input
                id="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="card-element">Card Details</Label>
            <div className={cn(
              "rounded-md border border-input bg-background px-3 py-2",
              error && "border-destructive"
            )}>
              <CardElement
                id="card-element"
                options={{
                  style: {
                    base: {
                      fontSize: '16px',
                      color: '#030712',
                      '::placeholder': {
                        color: '#6b7280',
                      },
                    },
                  },
                }}
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={!stripe || loading}
          >
            {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Subscribe Now
          </Button>
        </CardFooter>
      </form>
      <SubscriptionModal subscriptionData={modalData} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Card>
  )
}

