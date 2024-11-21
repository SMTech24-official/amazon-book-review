'use client'
import { cn } from "@/lib/utils";
import React from "react";

const NavMenu = ({className} : {className?:string}) => {
  const handleFeatures = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + 150, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  const handleFAQ = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  const handlePricing = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop + 0, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={cn("flex md:items-center gap-6 text-lg font-normal ps-3", className)}>
      <div
            onClick={() => handleFeatures("features")}
            className="cursor-pointer hover:text-primary transition duration-200"
          >
            Features
          </div>
          <div
            onClick={() => handleFAQ("faqs")}
            className="cursor-pointer hover:text-primary transition duration-200"
          >
            FAQs
          </div>
          <div
            onClick={() => handlePricing("pricing")}
            className="cursor-pointer hover:text-primary transition duration-200"
          >
            Pricing
          </div>
    </div>
  );
};

export default NavMenu;
