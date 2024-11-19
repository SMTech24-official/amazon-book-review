'use client';
import starIcon from "@/assets/add_books.png";
import getReward from "@/assets/getReward.png";
import bg from "@/assets/getting_started_bg.png";
import reviewBookIcon from "@/assets/reviewBookIcon.png";
import { ContextProvider } from "@/lib/providers/MyContextProvider";
import Image from "next/image";
import React, { useContext } from "react";

const cardDetails = [
  {
    title: "Add your books",
    description: "Add your books to Booksy.buzz \n in five minutes or less.",
    icon: starIcon,
  },
  {
    title: "Review books to earn BuzzPoints",
    description: "Support other authors to \n earn BuzzPoints and get reviewed.",
    icon: reviewBookIcon,
  },
  {
    title: "Get reviews",
    description: "Use your BuzzPoints to get reviewed \n quickly and hassle-free.",
    icon: getReward,
  },
];

const GettingStarted = () => {
  const context = useContext(ContextProvider);

  // If the context is null, handle the case gracefully
  const windowWidth = context ? context.windowWidth : 0;

  // Check if screen size is large using the windowWidth from context
  const isLargeScreen = windowWidth >= 640; // 768px corresponds to 'md' breakpoint in Tailwind

  return (
    <div className="relative mb-10 xs:mb-20">
      {/* Background Image */}
      <div className="hidden lg:block absolute top-0 left-0 z-0">
        <Image src={bg} height={250} width={250} alt="background image" />
      </div>

      {/* Top area content */}
      <div className="relative z-10">
        <h3 className="text-center text-2xl sm:text-3xl font-medium pt-0 md:pt-20 pb-5 md:pb-10">
          Getting started on Booksy.buzz
        </h3>
        <div className="max-w-3xl mx-auto flex flex-col gap-3 md:gap-7 w-full px-5">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className="max-w-2xl mx-auto w-full bg-primary-light p-4 md:p-6 rounded-xl"
            >
              <div className="flex flex-col xs:flex-row items-center gap-y-2 gap-x-6">
                {/* Icon */}
                <div className="rounded-full flex items-center justify-center">
                  <Image src={card.icon} alt="icon" width={90} height={90} />
                </div>

                {/* Text Section */}
                <div>
                  <h2 className="text-xl font-medium text-gray-800 mb-2 md:mb-4">
                    {card.title}
                  </h2>
                  <p className="text-gray-600 leading-[24px]">
                    {/* For small screens: Render without split */}
                    <span className="block sm:hidden">
                      {card.description}
                    </span>

                    {/* For large screens: Split by \n */}
                    {isLargeScreen && card.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
