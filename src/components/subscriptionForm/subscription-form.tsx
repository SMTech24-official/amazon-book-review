'use client'

import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/icons/Icons'
import { toast } from 'sonner'
import { SubscriptionsPlan } from '@/lib/fakeData/subscriptionPlans'
import { SubscriptionPlan } from '@/lib/types/type'


export function SubscriptionForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const selectPlan = localStorage.getItem("plan")

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
      console.log(paymentMethod.id);
      const data = {
        planType: localStorage.getItem("plan"),
        userEmail: localStorage.getItem("verifyEmailByOTP"),
        paymentMethodId: paymentMethod.id,
      }
      if (paymentMethod.id) {
        try {
          const res = await fetch('https://traceylongfield.vercel.app/api/payment/subscribe', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          console.log(res);
          if (res?.status === 200) {
            toast.success("Subscription successful");
          } else {
            toast.error("Subscription failed");
          }
        } catch (error) {
          console.log(error);
          toast.error("Subscription failed");
        }
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Choose Your Subscription Plan</CardTitle>
          <CardDescription>Select a plan that works best for you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedPlan}
            onValueChange={(value) => setSelectedPlan(value as 'monthly' | 'yearly')}
            className="grid gap-4"
          >
            {
              SubscriptionsPlan?.map((plan: SubscriptionPlan, idx) => {
                return (
                  <div key={idx}>
                    <RadioGroupItem
                      value={plan.name}
                      id={plan.type}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={plan.type}
                      className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary ${selectPlan === plan.name ? "border-primary" : ""}`}
                    >
                      <div className="space-y-1">
                        <p className="text-lg font-medium leading-none">{plan.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {plan.price}/{plan.type}
                        </p>
                      </div>
                    </Label>
                  </div>
                )
              })
            }
          </RadioGroup>

          <div className="space-y-2">
            <Label>Card Details</Label>
            <div className={cn(
              "rounded-md border border-input bg-background px-3 py-2",
              error && "border-destructive"
            )}>
              <CardElement
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

