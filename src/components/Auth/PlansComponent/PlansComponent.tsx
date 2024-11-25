/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ManagePlans from "@/components/Dashboard/components/settings/MangePlans";
import AuthLayout from "../AuthLayout";

import { SubscriptionsPlan } from "@/lib/fakeData/subscriptionPlans";
import { user } from "@/lib/fakeData/user";

const PlansComponent = () => {


  return (
    <div>
      <AuthLayout backLink="/signup">
        <div className=" w-full  px-5 mt-24 ">
        <ManagePlans subscriptionsPlan={SubscriptionsPlan} plans={user.plans} />
        </div>
      </AuthLayout>
    </div>
  );
};

export default PlansComponent;
