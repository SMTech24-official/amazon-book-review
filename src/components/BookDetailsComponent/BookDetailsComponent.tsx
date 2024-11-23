"use client";
import { BreadcrumbItem, Breadcrumbs, Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import bookCoverImage from "@/assets/Book Cover Image.png";
import pdfIcon from "@/assets/pdfIcon.svg";
import brokenLinkIcon from "@/assets/brokenLinkIcon.svg";
import coins from "@/assets/coins.png";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import MyBreadcrumbs from "../ui/MyBreadcrumbs";



interface BreadcrumbLink {
    name: string;
    href?: string | null;
  }
  
  interface ButtonConfig {
    text: string;
    style: string;
    icon?: React.ReactNode;
    svg?: string | null | StaticImageData;
  }
  
  interface BookDetailsComponentProps {
    breadcrumbLinks?: BreadcrumbLink[];
    buttons?: ButtonConfig[];
    buttonLayoutClassName?: string;
  }


const BookDetailsComponent = ({ breadcrumbLinks, buttonLayoutClassName, buttons }: BookDetailsComponentProps) => {
  const params = useParams();
  const bookId = params.bookId;
  console.log(bookId);

  const handleButtonClick = (buttonText: string) => {
    switch (buttonText) {
      case "View the book on Amazon":
        console.log("Navigating to the book on Amazon...");
        break;
      case "Review now on Amazon":
        console.log("Starting the review process on Amazon...");
        break;
      case "Reviewed":
        console.log("The book has already been reviewed.");
        break;
      case "Verify Amazon Link":
        console.log("Verifying the Amazon link...");
        break;
      case "Approve":
        console.log("The book has been approved.");
        break;
      case "Deny":
        console.log("The book has been denied.");
        break;
      case "Verify Review now on amazon":
        console.log("Verifying the review on Amazon...");
        break;
      default:
        console.log(`Unknown action for button: ${buttonText}`);
    }
  };

  return (
    <div className="p-4 h-full max-h-[calc(100vh-70px)] flex flex-col">
      <MyBreadcrumbs breadcrumbLinks={breadcrumbLinks}/>
      <div className="  flex-grow flex flex-col">
        <Image
          src={bookCoverImage}
          height={500}
          width={200}
          alt="image"
          className="mx-auto my-5"
        />
        <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col justify-between  gap-2 ">
          <div className="w-full ">
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xl font-medium">Fire & Blood</p>
              <div className="border-2 border-gray-300 text-primary rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>Download as PDF</p>
                <Image src={pdfIcon} height={10} width={15} alt="image" />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xs font-medium">By: George R. R. Martin</p>
              <div className="border border-gray-300 text-primary rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <Image src={coins} height={10} width={20} alt="image" />
                <p>500</p>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xs font-medium">Word count: 12000-20000</p>
              <p className="text-xs font-medium">Book type: Fiction</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3  mb-4 md:mb-8">
              <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>Action</p>
              </div>
              <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>Romance</p>
              </div>
              <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>Mystery</p>
              </div>
            </div>
            <div className={cn("grid gap-2 md:gap-5 mb-3  ", buttonLayoutClassName || "xs:grid-cols-3")}>
              {/* <div className="w-full">
                <Button
                  radius="sm"
                  className="bg-black text-white w-full py-5 text-base font-normal"
                >
                  Verify Amazon Link
                </Button>
              </div>
              <div className="w-full flex items-center gap-2 md:gap-5">
                <div className="w-full">
                  <Button
                    radius="sm"
                    className="bg-primary text-white w-full py-5 text-base font-normal"
                  >
                    Approve
                  </Button>
                </div>{" "}
                <div className="w-full">
                  <Button
                    radius="sm"
                    className="bg-red-500 text-white w-full py-5 text-base font-normal"
                  >
                    Deny
                  </Button>
                </div>
              </div> */}
              {buttons?.map((button, index) => (
                <Button
                  key={index}
                  radius="sm"
                  className={cn(`w-full py-5 font-normal flex items-center justify-center gap-2 text-xs md:text-sm lg:text-base`, button.style)}
                  onClick={() => handleButtonClick(button.text)}
                >
                  {button.text}
                  {button.icon && <span>{button.icon}</span>}
                  {button.svg && <span><Image src={button.svg} height={20} width={22} alt="image"/></span>}
                </Button>
              ))}
            </div>
          </div>
          <div className=" flex justify-end">
            <div className="border-2 border-red-500 text-red-500 rounded-full flex items-center gap-2 px-4 py-1 w-fit ">
              <p className="text-xs">Amazon link not working</p>
              <Image src={brokenLinkIcon} height={10} width={25} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsComponent;
