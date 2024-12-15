/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ManagePlans from "@/components/Dashboard/components/settings/MangePlans";
import AuthLayout from "../AuthLayout";

import { SubscriptionsPlan } from "@/lib/fakeData/subscriptionPlans";

const PlansComponent = () => {


  return (
    <div>
      <AuthLayout backLink="/signup">
        <div className=" w-full lg:mt-64 xl:mt-24">
          <ManagePlans subscriptionsPlan={SubscriptionsPlan} />
        </div>
      </AuthLayout>
    </div>
  );
};

export default PlansComponent;
