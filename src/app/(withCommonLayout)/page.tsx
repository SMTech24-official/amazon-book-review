import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import GettingStarted from "@/components/home/GettingStarted";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import WhatOurCustomerThinks from "@/components/home/WhatOurCustomerThinks";
import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="">
      <Navbar/>
      <HeroSection />
      <GettingStarted />
      <WhatOurCustomerThinks />
      <Features />
      <FAQs />
      <Pricing />
      <Footer/>
    </div>
  );
};

export default HomePage;
