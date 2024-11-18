"use client";
import { Button } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import TestimonialCard from "../cards/TestimonialCard";
import ItemSwiper from "../ui/ItemSwiper/ItemSwiper";
import Marquee from "../ui/marquee";

const WhatOurCustomerThinks = () => {
  return (
    <div className="container mb-5">
      <div className="flex flex-col xs:flex-row gap-2 xs:items-center justify-between">
        <h5 className="text-3xl font-medium">What our customer thinks of us</h5>
        <div>
          <p>Books</p>
          <h4 className="text-primary text-4xl font-extrabold">500+</h4>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative hidden sm:block">
        {/* Gradient overlay on top of cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>

        {/* Marquee with testimonial cards */}
        <Marquee pauseOnHover className="[--duration:60s]">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index}>
              <TestimonialCard />
            </div>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:50s]">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index}>
              <TestimonialCard />
            </div>
          ))}
        </Marquee>

        <Marquee pauseOnHover className="[--duration:60s]">
          {Array.from({ length: 9 }, (_, index) => (
            <div key={index}>
              <TestimonialCard />
            </div>
          ))}
        </Marquee>

        {/* Button for 'See more' */}
        <div className="flex items-center justify-center absolute bottom-20 z-10 w-full">
          <Button radius="sm" className="bg-primary text-white">
            See more
          </Button>
        </div>
      </div>

      {/* Swiper for mobile start */}
      <ItemSwiper />
      {/* Swiper for mobile end */}
    </div>
  );
};

export default WhatOurCustomerThinks;