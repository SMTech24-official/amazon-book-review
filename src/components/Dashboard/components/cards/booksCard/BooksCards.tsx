import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TrendingUp } from "lucide-react";
import coins from "@/assets/coins.png"
import reviewIcon from "@/assets/ReviewIcon.png"

export default function BooksCards({
  bookTitle,
  status,
  readers,
  publishedDate,
  coinsPerReview,
  reviewCount,
  avgRating,
  imageSrc,
}: {
  bookTitle: string;
  status: string;
  readers: number;
  publishedDate: Date;
  coinsPerReview: number;
  reviewCount: number;
  avgRating: number;
  imageSrc: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-4 lg:h-[225px] max-w-2xl border rounded-lg">
      <div className="relative w-[129px] h-[190px] border">
        <Image
          src={imageSrc}
          alt={`${bookTitle} cover`}
          className="rounded-md object-cover"
          width={120}
          height={180}
          priority
        />
      </div>
      <div className="flex flex-col  flex-1 gap-2">


        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row flex-1 items-start  justify-between">
          <div className="sm:space-y-2 sm:w-[150px]">
            <h2 className="text-xl font-semibold">{bookTitle}</h2>
            <div className="flex items-center gap-2 ">
              <span className="bg-yellow-200 text-orange-600 text-sm px-2 py-[5px] rounded-md font-semibold">
                {status}
              </span>
              <span className="text-xs text-gray-600 text-muted-foreground">
                {readers} reader{readers > 1 ? "s" : ""} are reading
              </span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground space-y-2 text-gray-600">
            <p>Published: {new Date(publishedDate).toLocaleDateString("en-CA")}</p>
            <div className="flex items-center gap-1 ">
              <Image src={coins} alt="icon of coins earned by reding" className="max-w-6 max-h-6" />
              <span className="text-sm text-muted-foreground">
                {coinsPerReview} per review
              </span>
            </div>
          </div>
        </div>



        <div className="flex gap-3 sm:gap-0 flex-col sm:flex-row items-start sm:items-center justify-between ">
          <div className="flex items-center gap-6 ">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Image src={reviewIcon} alt="icon of coins earned by reding" className="max-w-6 max-h-6" />
                <span className="text-sm text-muted-foreground">
                  {reviewCount} Reviews
                </span>
              </div>
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="max-w-6 max-h-6" />
                <span className="text-sm text-muted-foreground">
                  {avgRating} Avg rating
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button className="bg-black text-white hover:bg-black/90">
              In for Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
