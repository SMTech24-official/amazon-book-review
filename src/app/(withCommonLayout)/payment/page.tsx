import { StripeProvider } from "@/components/stripeProvider/StripeProvider";
import { SubscriptionForm } from "@/components/subscriptionForm/subscription-form";


export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <StripeProvider>
        <SubscriptionForm />
      </StripeProvider>
    </div>
  )
}

