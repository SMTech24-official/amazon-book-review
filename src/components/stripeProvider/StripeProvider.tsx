'use client'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51QA6IkFGNtvHx4Utors1CsfYp1LbR9PTTt44T7xcMGtlSZgIIONjBnr3EnUzj4Cq81OEwReXoOlc8IUVeq8QzwRw00PQaoaLGa')

export function StripeProvider({ children }: { children: React.ReactNode }) {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  )
}

