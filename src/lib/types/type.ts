import { IconType } from "react-icons";

type UserRole = "Reviewer" | "Author" | "Admin";

export type User = {
  image: string | null; // URL to the user's image
  name: string; // User's full name
  amazonAuthorPage: string; // Link to the Amazon author page
  email: string; // User's email address
  amazonReviewerName: string; // Amazon reviewer username
  reviewCountry: string | null; // Country associated with reviews
  password: string; // Hashed password (store securely, never plain text)
  role: UserRole; // Role of the user
  plans: string;
};
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
  imageBg: string;
};