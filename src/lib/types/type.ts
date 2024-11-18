import { IconType } from "react-icons";

export type User = {
  name: string;
  role: string;
  image: string;
};
export type NavLink = {
  name: string;
  href: string;
  icon: IconType; // The type for an icon component
}
