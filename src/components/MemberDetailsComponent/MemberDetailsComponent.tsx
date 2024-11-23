"use client";
import memberImage from "@/assets/member.png";
import { booksReview } from "@/lib/fakeData/BooksReview";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import BooksCards from "../Dashboard/components/cards/booksCard/BooksCards";
import MyBreadcrumbs from "../ui/MyBreadcrumbs";

interface BreadcrumbLink {
  name: string;
  href?: string | null;
}

interface BookDetailsComponentProps {
  breadcrumbLinks?: BreadcrumbLink[];
}

const MemberDetailsComponent = ({
  breadcrumbLinks,
}: BookDetailsComponentProps) => {
  const [activeButton, setActiveButton] = useState("all");
  const params = useParams();
  const memberId = params?.memberId;
  console.log(memberId);

  return (
    <div className="p-4 h-full flex flex-col">
    <MyBreadcrumbs breadcrumbLinks={breadcrumbLinks}/>
      <div className="  flex-grow flex flex-col">
        <Image
          src={memberImage}
          height={500}
          width={200}
          alt="image"
          className="mx-auto my-5"
        />
        <h4 className="text-2xl font-semibold text-center mb-2">
          George R. R. Martin
        </h4>
        <p className="text-xs font-medium text-center mb-5">
          Member since: 09-11-2024{" "}
        </p>
        <div>
          <div className="flex flex-col xs:flex-row gap-2 mb-5 items-center justify-between">
            <p>Books by: George R. R. Martin</p>
            <div className="flex items-center gap-3">
              <div
                onClick={() => setActiveButton("all")}
                className={` px-4 py-2 text-xs font-medium rounded-full cursor-pointer ${
                  activeButton == "all"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                }`}
              >
                All
              </div>
              <div
                onClick={() => setActiveButton("live")}
                className={` px-4 py-2 text-xs font-medium rounded-full cursor-pointer ${
                  activeButton == "live"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                }`}
              >
                Live
              </div>
              <div
                onClick={() => setActiveButton("pending")}
                className={` px-4 py-2 text-xs font-medium rounded-full cursor-pointer ${
                  activeButton == "pending"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                }`}
              >
                Pending
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {booksReview?.map((data) => (
              <BooksCards
                key={data.id}
                bookTitle={data.bookTitle}
                status={data.status}
                readers={data.readers}
                publishedDate={new Date(data.publishedDate)}
                coinsPerReview={data.coinsPerReview}
                reviewCount={data.reviewCount}
                imageSrc={data.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsComponent;
