import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const NavMenu = ({className} : {className?:string}) => {
  return (
    <div className={cn("flex md:items-center gap-6 text-lg font-normal", className)}>
      <Link href={"/features"}>
        <span className="hover:text-primary ">Features</span>
      </Link>
      <Link href={"/faqs"}>
        <span className="hover:text-primary ">FAQs</span>
      </Link>
      <Link href={"/pricing"}>
        <span className="hover:text-primary ">Pricing</span>
      </Link>
    </div>
  );
};

export default NavMenu;
