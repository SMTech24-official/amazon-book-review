import { IconType } from "react-icons/lib";

export type User = {
  _id: string;
  fullName: string;
  reviewerName: string;
  amazonCountry: string;
  profileImage: string | null;  // Adjusted to match the data (image -> profileImage)
  email: string;
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
  amazonAuthorPageLink: string;
  
};

export type Metadata = {
  createdAt: string;
  updatedAt: string;
};

export type Book = {
  _id: string;
  title: string;
  status: string;
  publishedDate: string;
  points: number;
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
  createdAt: string;
  updatedAt: string;
};

export type ReviewedBook = {
  _id: string;
  bookId: Book;  // The book details
  userId: User;  // The user details who reviewed
  readingStatus: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Button = {
  label: string;
  variant: "outline" | "solid";  // Can expand this based on button variants
  style: string;
};

export type SubscriptionPlan = {
  type: "monthly" | "yearly";  // Can expand this based on available types
  name: string;
  price: string;
  description: string;
  features: string[];
  button: Button;
  image: string;  // URL or path to image
};

export type NavLink = {
  name: string;
  href: string;
  icon: IconType;  // Using IconType from react-icons
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};