import React from "react";
import SubscriptionCard from "../cards/SubscriptionCard";
import bg_Pricing from "@/assets/bg_Pricing.png";

const Pricing = () => {
  return (
    <div
    id="pricing"
      className="bg-cover bg-top min-h-screen flex justify-center items-center pb-5"
      style={{
        backgroundImage: `url(${bg_Pricing.src})`, // Use `.src` if you're using Next.js Image Optimization
      }}
    >
      <div>
        <h5 className="text-center text-3xl font-medium mb-6">Pricing</h5>
        <SubscriptionCard />
      </div>
    </div>
  );
};

export default Pricing;
