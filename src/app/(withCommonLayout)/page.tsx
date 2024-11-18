import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import GettingStarted from "@/components/home/GettingStarted";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import WhatOurCustomerThinks from "@/components/home/WhatOurCustomerThinks";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <GettingStarted />
      <WhatOurCustomerThinks />
      <Features />
      <FAQs />
      <Pricing />
    </div>
  );
};

export default HomePage;
