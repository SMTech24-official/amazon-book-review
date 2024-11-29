"use client"
import Image from "next/image";
import coins from "@/assets/coins.png"
import reviewIcon from "@/assets/ReviewIcon.png"
import { Button } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { useRequestReviewMutation } from "@/redux/features/book/bookApi";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useRouter } from "next/navigation";

export default function BooksCards({
  bookTitle,
  status,
  id,
  isAdmin,
  // readers,
  publishedDate,
  coinsPerReview,
  reviewCount,
  imageSrc,
  isReadyForReview
}: {
  bookTitle: string;
  status: string;
  id?: string;
  // readers: number;
  publishedDate: Date;
  coinsPerReview: number;
  reviewCount: number;
  imageSrc: string;
  isReadyForReview?: boolean
  isAdmin?: boolean
}) {
  const dispatch = useAppDispatch();
  const [requestReview] = useRequestReviewMutation()
  const router = useRouter()
  const handleRequestReview = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const finishRes = await handleAsyncWithToast(
      async () => {
        return requestReview(id); // Replace with your actual login function
      },
      "Requesting for review...", // Toast message for the start of the process
      "Review request Successful", // Toast message for success
      "Failed to request review. Please try again.", // Toast message for failure
      true,
      dispatch
    );
  }
  const handleDetails = (id: string | number) => {
    localStorage.setItem("id", JSON.stringify(id))
    router.push(`/admin-dashboard/new-books/book-details`)
  }
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 xl:h-[225px] sm:w-full w-[250px] h-full border rounded-lg shadow-sm">
      <div className="w-[129px] h-[190px]">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${bookTitle} cover`}
            className="rounded-md object-cover"
            width={120}
            height={180}
            priority
          />
        ) : (
          <Image
            src={
              "https://img.freepik.com/free-photo/yellow-book-cover_1101-1118.jpg?ga=GA1.1.1655684950.1728801784&semt=ais_hybrid%20"
            }
            alt={`${bookTitle} cover`}
            className="rounded-md object-cover"
            width={120}
            height={180}
            priority
          />
        )}
      </div>
      <div className="flex flex-col  flex-1 gap-2">
        <div className="flex flex-col gap-3 xl:gap-0 xl:flex-row flex-1 items-start  justify-between">
          <div className="xl:space-y-2 ">
            <h2 className="text-xl font-semibold">{bookTitle}</h2>
            <div className="flex items-center gap-2 ">
              <span className="bg-yellow-200 text-orange-600 text-sm px-2 py-[5px] rounded-md font-semibold capitalize">
                {status}
              </span>
              {/* <span className="text-xs text-gray-600 text-muted-foreground">
                {readers} reader{readers > 1 ? "s" : ""} are reading
              </span> */}
            </div>
          </div>
          <div className="text-sm text-muted-foreground space-y-2 text-gray-600">
            <p>
              Published: {new Date(publishedDate).toLocaleDateString("en-CA")}
            </p>
            <div className="flex items-center gap-1 ">
              <Image
                src={coins}
                alt="icon of coins earned by reding"
                className="max-w-6 max-h-6"
              />
              <span className="text-sm text-muted-foreground">
                {coinsPerReview} per review
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 xl:gap-0 flex-col xl:flex-row items-start xl:items-center justify-between ">
          <div className="flex items-center gap-6">
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2 xl:gap-6">
              <div className="flex items-center gap-1">
                <Image
                  src={reviewIcon}
                  alt="icon of coins earned by reding"
                  className="max-w-6 max-h-6"
                />
                <span className="text-sm text-muted-foreground">
                  {reviewCount} Reviews
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end xl:mt-4">
            {
              isAdmin ? <Button
                radius="sm"
                className={cn(`w-full py-5 font-normal flex items-center bg-primary text-white hover:bg-primary/90 justify-center gap-2 text-xs md:text-sm lg:text-base `)}
                onClick={() => handleDetails(id!)}
              >
                Book Details
              </Button> : <Button
                disabled={status?.toLowerCase() === "pending" || isReadyForReview}
                radius="sm"
                className={cn(`w-full py-5 font-normal flex items-center justify-center gap-2 text-xs md:text-sm lg:text-base  ${status?.toLowerCase() === "pending" ? "bg-gray-500 text-white" : isReadyForReview ? "bg-black text-white" : "bg-primary text-white hover:bg-primary/90"} cursor-pointer`)}
                onClick={() => handleRequestReview()}
              >
                {isReadyForReview === true ? "In for Review" : "Get Review"}
              </Button>
            }


          </div>
        </div>
      </div>
    </div>
  );
}
