"use client";
import brokenLinkIcon from "@/assets/brokenLinkIcon.svg";
import coins from "@/assets/coins.png";
import pdfIcon from "@/assets/pdfIcon.svg";
import { cn } from "@/lib/utils";
import {
  useApproveBookMutation,
  useRejectBookMutation,
  useSingleBookQuery,
} from "@/redux/features/book/bookApi";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import MyBreadcrumbs from "../ui/MyBreadcrumbs";
import MyLoading from "../ui/MyLoading";
import BreadCrumb from "../common/breadCrumb/BreadCrumb";
import { useApproveReviewMutation, useRejectReviewMutation } from "@/redux/features/review/reviewApi";

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

const BookDetailsComponent = ({
  breadcrumbLinks,
  buttonLayoutClassName,
  buttons,
}: BookDetailsComponentProps) => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams(); // Access URL query parameters
  const bookId = params?.bookId;
  const reviewId = searchParams.get('review');

  const { data, isLoading } = useSingleBookQuery(bookId);
  const pathName = usePathname();
  const [approveBookMutation] = useApproveBookMutation();
  const [approveReviewMutation] = useApproveReviewMutation();
  const [rejectBookMutation] = useRejectBookMutation();
  const [rejectReviewMutation] = useRejectReviewMutation();
  console.log(pathName);
  const handleButtonClick = async (buttonText: string) => {
    try {
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
          if (data?.data?.amazonBookUrl) {
            window.open(
              data.data.amazonBookUrl,
              "_blank",
              "noopener,noreferrer"
            );
          } else {
            console.error("Amazon book URL is not available.");
          }
          break;

        case "Approve":
          if (!data?.data?._id) {
            console.error("Book ID is missing. Approval cannot proceed.");
            return;
          }
          
          if (pathName?.includes("review")) {
            await handleAsyncWithToast(
              async () => approveReviewMutation(reviewId),
              "Approving...",
              "Review approved successfully!",
              "Approval failed. Please try again.",
              false, // No Redux user update
              null, // No dispatch needed
              "/admin-dashboard?tab=New+Reviews",
              router // Pass the router instance
            );
          }else{
            await handleAsyncWithToast(
              async () => approveBookMutation(data.data._id),
              "Approving...",
              "Book approved successfully!",
              "Approval failed. Please try again.",
              false, // No Redux user update
              null, // No dispatch needed
              "/admin-dashboard?tab=New+Books",
              router // Pass the router instance
            );
          }

          break;

        case "Deny":
          if (!data?.data?._id) {
            console.error("Book ID is missing. Denial cannot proceed.");
            return;
          }
          if (pathName?.includes("review")) {
            await handleAsyncWithToast(
              async () => rejectReviewMutation(reviewId),
              "Denying...",
              "Review denied successfully!",
              "Denial failed. Please try again.",
              false, // No Redux user update
              null, // No dispatch needed
              "/admin-dashboard?tab=New+Reviews", // Redirect URL
              router // Pass the router instance
            );
          }else {
            await handleAsyncWithToast(
              async () => rejectBookMutation(data.data._id),
              "Denying...",
              "Book denied successfully!",
              "Denial failed. Please try again.",
              false, // No Redux user update
              null, // No dispatch needed
              "/admin-dashboard?tab=New+Books", // Redirect URL
              router // Pass the router instance
            );
          }

         
          break;

        case "Verify Review now on amazon":
          if (data?.data?.amazonBookUrl) {
            console.log("Verifying the review on Amazon...");
            window.open(
              data?.data?.amazonBookUrl,
              "_blank",
              "noopener,noreferrer"
            );
          } else {
            console.error("Amazon review URL is not available.");
          }
          break;

        default:
          console.log(`Unknown action for button: ${buttonText}`);
      }
    } catch (error) {
      console.error(
        `Error in handling action for button: ${buttonText}`,
        error
      );
    }
  };

  // Handle PDF download
  const handleDownloadPdf = (pdfUrl: string) => {
    if (!pdfUrl) {
      alert("PDF not available");
      return;
    }
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  if (isLoading) {
    return <MyLoading />;
  }
  return (
    <div className="p-4 h-full max-h-[calc(100vh-70px)] flex flex-col">
      {/* <MyBreadcrumbs breadcrumbLinks={breadcrumbLinks} /> */}
      <BreadCrumb />
      <div className="  flex-grow flex flex-col">
        <Image
          src={data?.data?.bookCover}
          height={500}
          width={200}
          alt="image"
          className="mx-auto my-5"
        />
        <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col justify-between  gap-2 ">
          <div className="w-full ">
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xl font-medium">{data?.data?.title}</p>
              <div
                onClick={() => handleDownloadPdf(data?.data?.bookPdf)}
                className="border-2 cursor-pointer border-gray-300 text-primary rounded-full flex items-center gap-2 px-4 py-1 w-fit"
              >
                <p>Download as PDF</p>
                <Image src={pdfIcon} height={10} width={15} alt="image" />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xs font-medium">
                By: {data?.data?.authorName}
              </p>
              <div className="border border-gray-300 text-primary rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <Image src={coins} height={10} width={20} alt="image" />
                <p>{data?.data?.points}</p>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              {/* <p className="text-xs font-medium">Word count: 12000-20000</p> */}
              <p className="text-xs font-medium">
                Book type: {data?.data?.bookType}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3  mb-4 md:mb-8">
              <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>{data?.data?.genre}</p>
              </div>
              {/* <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>Romance</p>
              </div>
              <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>Mystery</p>
              </div> */}
            </div>
            <div
              className={cn(
                "grid gap-2 md:gap-5 mb-3  ",
                buttonLayoutClassName || "xs:grid-cols-3"
              )}
            >
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
                  className={cn(
                    `w-full py-5 font-normal flex items-center justify-center gap-2 text-xs md:text-sm lg:text-base`,
                    button.style
                  )}
                  onClick={() => handleButtonClick(button.text)}
                >
                  {button.text}
                  {button.icon && <span>{button.icon}</span>}
                  {button.svg && (
                    <span>
                      <Image
                        src={button.svg}
                        height={20}
                        width={22}
                        alt="image"
                      />
                    </span>
                  )}
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
