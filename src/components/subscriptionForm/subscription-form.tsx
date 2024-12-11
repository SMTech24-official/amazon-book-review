'use client'

import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { SubscriptionsPlan } from '@/lib/fakeData/subscriptionPlans'
import { SubscriptionPlan } from '@/lib/types/type'
import { usePaymentMutation } from '@/redux/features/payment/payMent'
import { useRouter } from 'next/navigation'
import { Icons } from '../icons/Icons'
import { countries } from '@/lib/fakeData/countery'

export function SubscriptionForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [payment] = usePaymentMutation()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [coupon, setCoupon] = useState('')
  const selectPlan = localStorage.getItem("plan")

  const router = useRouter()

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
        coupon: coupon,
      }

      if (paymentMethod.id) {
        try {
          const res = await payment(data)
          if (res?.data) {
            toast.success("Subscription successful")
            router.push("/login")
          } else {
            toast.error("Subscription failed")
          }
        } catch (error) {
          console.error(error)
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
              <Button type="button" disabled={!coupon}>
                Apply
              </Button>
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
    </Card>
  )
}

