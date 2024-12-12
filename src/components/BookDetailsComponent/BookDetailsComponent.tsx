"use client";
import brokenLinkIcon from "@/assets/brokenLinkIcon.svg";
import coins from "@/assets/coins.png";
import pdfIcon from "@/assets/pdfIcon.svg";
import { cn } from "@/lib/utils";
import {
  useApproveBookMutation,
  useCompleteReviewMutation,
  useFinishReadingMutation,
  useRejectBookMutation
} from "@/redux/features/book/bookApi";
import { useApproveReviewMutation, useRejectReviewMutation } from "@/redux/features/review/reviewApi";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { Button } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import {
  usePathname,
  useRouter
} from "next/navigation";
import { useState } from "react";
import BreadCrumb from "../common/breadCrumb/BreadCrumb";
import { toast } from "sonner";

interface ButtonConfig {
  text: string;
  style: string;
  icon?: React.ReactNode;
  svg?: string | null | StaticImageData;
}


const BookDetailsComponent = (
  {
    bookTitle,
    author,
    coinsPerReview,
    imageSrc,
    buttons,
    bookType,
    bookLink,
    amznLink,
    genre,
    id,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    status,
    mainId,
    children
  }: {
    bookTitle: string;
    author?: string;
    coinsPerReview?: number;
    imageSrc: string;
    genre: string;
    status?: string;
    id: string;
    mainId: string;
    amznLink?: string;
    bookLink?: string;
    bookType?: string;
    buttons?: ButtonConfig[];
    children?: React.ReactNode;
  }
) => {
  // const params = useParams();
  const router = useRouter();
  // const bookId = params?.bookId;
  // const { data, isLoading } = useSingleBookQuery(bookId);
  const pathName = usePathname();
  const [approveBookMutation] = useApproveBookMutation();
  const [approveReviewMutation] = useApproveReviewMutation();
  const [rejectBookMutation] = useRejectBookMutation();
  const [rejectReviewMutation] = useRejectReviewMutation();
  const [brokenLink, setBrokenLink] = useState(false)

  const dispatch = useAppDispatch();
  const [finishReading] = useFinishReadingMutation()
  const [completeReview] = useCompleteReviewMutation()

  const handleButtonClick = async (buttonText: string) => {
    try {
      switch (buttonText) {
        case "View the book on Amazon":
          const finishRes = await handleAsyncWithToast(
            async () => {
              return finishReading(mainId); // Replace with your actual login function
            },
            "Finish to read...", // Toast message for the start of the process
            "Reading Book Completed!", // Toast message for success
            "Failed to start reading. Please try again.", // Toast message for failure
            true,
            dispatch
          );
          if (amznLink && finishRes) { router.push(amznLink) }
          else setBrokenLink(true)

          break;

        case "Review now on Amazon":
          if (amznLink) { router.push(amznLink) }
          else setBrokenLink(true)
          break;

        case "Reviewed":
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const completeRes = await handleAsyncWithToast(
            async () => {
              // console.log(mainId)
              return completeReview(mainId); // Replace with your actual login function
            },
            "Submitting Review...", // Toast message for the start of the process
            "Review Submitted!", // Toast message for success
            "Failed to submit review. Please try again.", // Toast message for failure
            true,
            dispatch
          );
          break;

        case "Verify Amazon Link":
          // console.log(amznLink);
          if (amznLink) { router.push(amznLink) }
          else setBrokenLink(true)
          break;

        case "Approve":
          if (!mainId) {
            // console.error("Book ID is missing. Approval cannot proceed.");
            return;
          }

          if (pathName?.includes("review")) {
            await handleAsyncWithToast(
              async () => approveReviewMutation(mainId),
              "Approving...",
              "Review approved successfully!",
              "Approval failed. Please try again.",
              false, // No Redux user update
              null, // No dispatch needed
              "/admin-dashboard?tab=New+Reviews",
              router // Pass the router instance
            );
          } else {
            await handleAsyncWithToast(
              async () => approveBookMutation(mainId),
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
          if (!id) {
            // console.error("Book ID is missing. Denial cannot proceed.");
            return;
          }
          if (pathName?.includes("review")) {
            await handleAsyncWithToast(
              async () => rejectReviewMutation(mainId),
              "Denying...",
              "Review denied successfully!",
              "Denial failed. Please try again.",
              false, // No Redux user update
              null, // No dispatch needed
              "/admin-dashboard?tab=New+Reviews", // Redirect URL
              router // Pass the router instance
            );
          } else {
            await handleAsyncWithToast(
              async () => rejectBookMutation(mainId),
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
          if (amznLink) {
            // console.log("Verifying the review on Amazon...");
            window.open(
              amznLink,
              "_blank",
              "noopener,noreferrer"
            );
          } else {
            // console.error("Amazon review URL is not available.");
          }
          break;

        default:
        // console.log(`Unknown action for button: ${buttonText}`);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error(
        `Error in handling action for button: ${buttonText}`
      );
    }
  };


  // Handle PDF download
  const handleDownloadPdf = (pdfUrl: string | undefined) => {
    if (!pdfUrl) {
      alert("PDF not available");
      return;
    }
    // Open the PDF in a new tab
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="h-full max-h-[calc(100vh-70px)] flex flex-col">
      <BreadCrumb />
      <div className="  flex-grow flex flex-col">
        <Image
          src={imageSrc}
          height={500}
          width={200}
          alt="image"
          className="mx-auto my-5"
        />


        <div className="w-full max-w-5xl mx-auto flex-grow flex flex-col justify-between  gap-2 ">
          <div className="w-full ">
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xl font-medium">{bookTitle ?? "Book Title"}</p>
              <div
                onClick={() => handleDownloadPdf(bookLink)}
                className="border-2 cursor-pointer border-gray-300 text-primary rounded-full flex items-center gap-2 px-4 py-1 w-fit"
              >
                <p>Download as PDF</p>
                <Image src={pdfIcon} height={10} width={15} alt="image" />
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              <p className="text-xs font-medium">
                By: {author ?? "Author Name"}
              </p>
              <div className="border border-gray-300 text-primary rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <Image src={coins} height={10} width={20} alt="image" />
                <p>{coinsPerReview ?? 0}</p>
              </div>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 justify-between mb-3">
              {/* <p className="text-xs font-medium">Word count: 12000-20000</p> */}
              <p className="text-xs font-medium">
                Book type: {bookType ?? "Book Type"}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3  mb-4 md:mb-8">
              <div className="border border-gray-300 text-gray-700 text-xs font-medium rounded-full flex items-center gap-2 px-4 py-1 w-fit">
                <p>{genre ?? "Genre"}</p>
              </div>

            </div>
            <div
              className={cn(
                " grid md:grid-cols-3 gap-4 "
              )}
            >
              {buttons?.map((button, index) => {
                // const isApproveButton = button.text === "Approve";
                // const isDenyButton = button.text === "Deny";
                // const shouldHide =  status !== "pending";

                return (
                  <Button
                    key={index}
                    radius="sm"
                    className={cn(
                      `w-full py-5 font-normal flex items-center justify-center gap-2 text-xs md:text-sm lg:text-base`,
                      button.style,
                      // shouldHide ? "hidden" : ""
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
                );
              })}
            </div>
          </div>
          {children}
          {
            brokenLink && <div className=" flex justify-end">
              <div className="border-2 border-red-500 text-red-500 rounded-full flex items-center gap-2 px-4 py-1 w-fit ">
                <p className="text-xs">Amazon link not working</p>
                <Image src={brokenLinkIcon} height={10} width={25} alt="image" />
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
};

export default BookDetailsComponent;
