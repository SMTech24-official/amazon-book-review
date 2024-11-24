import { IconType } from "react-icons";




export type NavLink = {
  name: string;
  href: string;
  icon: IconType; // The type for an icon component
};

export type PlanFeature = {
  label: string;
  variant: "outline" | "solid";
  style: string;
};

export type SubscriptionPlan = {
  type: "monthly" | "yearly";
  name: string;
  price: string;
  description: string;
  features: string[];
  button: PlanFeature;
  image: string; // Path to the image
};

export type User = {
  _id: string;
  fullName: string;
  reviewerName: string;
  amazonCountry: string;
  image: string | null; 
  email: string;
  password: string;
  role: string;
  points: number;
  otp: string | null;
  otpExpires: string | null;
  isVerified: boolean;
  isSubscribed: boolean;
  subscriptionPlane: string;
  invitedFriends: number;
  termsAccepted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Metadata = {
  createdAt: string;
  updatedAt: string;
};

export type Book = {
  _id: string;
  title: string;
  readers: number | null
  status: string;
  publishedDate: string;
  coinsPerReview: number;
  reviewCount: number;
  bookCover: string;
  authorName: string;
  genre: string;
  bookFormate: string;
  userId: User; // Link to the `User` type
  bookPdf: string;
  isReadyForReview: boolean;
  amazonBookUrl: string;
  bookType: string;
};
