import React from "react";
import FeaturesCard from "../cards/FeaturesCard";
import { StaticImageData } from "next/image";
import starIcon from "@/assets/add_books.png";
import earnIcon from "@/assets/Earn.png";
import personalizedIcon from "@/assets/personalized.png";
import flexibleIcon from "@/assets/flexible.png";
import referralIcon from "@/assets/referral.png";
import reviewerIcon from "@/assets/reviewer.png";
import exclusiveIcon from "@/assets/exclusive.png";

type Feature = {
  title: string; // The title of the feature
  description: string; // A detailed description of the feature
  icon: string | StaticImageData; // URL or symbolic reference to the feature's icon
};

// Example: Array of features
const features: Feature[] = [
  {
    title: "Real Reviews from Verified Readers",
    description:
      "Gain genuine, verified Amazon reviews from active readers who are dedicated to providing meaningful feedback.",
    icon: starIcon,
  },
  {
    title: "Earn and Use BuzzPoints",
    description:
      "Easily earn BuzzPoints by reviewing other books and inviting friends. Redeem your points for reviews on your own books, creating a fair and supportive community.",
    icon: earnIcon,
  },
  {
    title: "Personalized Author Dashboard",
    description:
      "Track your book’s progress with an easy-to-use dashboard that displays reviews, BuzzPoints, and review request status in real time.",
    icon: personalizedIcon,
  },
  {
    title: "Flexible Review Options",
    description:
      "Request reviews for all types of books, from low-content to full-length novels, with adaptable BuzzPoint requirements to fit each format.",
    icon: flexibleIcon,
  },
  {
    title: "Referral Rewards Program",
    description:
      "Grow the Booksy.buzz community by inviting fellow authors and earn bonus BuzzPoints with each successful referral.",
    icon: referralIcon,
  },
  {
    title: "Reviewer Recognition Program",
    description:
      "Top reviewers are celebrated monthly, with extra BuzzPoints and features, encouraging high-quality, thoughtful reviews across the platform.",
    icon: reviewerIcon,
  },
  {
    title: "Exclusive Resources for Authors",
    description:
      "Access guides and tips on topics like Amazon optimization, book marketing, and self-publishing, crafted to help you succeed.",
    icon: exclusiveIcon,
  },
];

const Features = () => {
  return (
    <div
     
      className="bg-primary mb-10 xl:mb-0 py-10 xl:py-48 xl:clip-path-desktop clip-path-mobile"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 xl:gap-10">
        {features.map((feature, index) => (
          <FeaturesCard
            key={index}
            {...feature}
            className={
              index === features.length - 1
                ? "lg:col-start-2 lg:justify-self-center" // Center the last card
                : ""
            }
           />
        ))}
      </div>
    </div>
  );
};

export default Features;
