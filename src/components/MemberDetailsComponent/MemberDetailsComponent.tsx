/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import avatar from "@/assets/avatar.svg";
import { TQueryParam } from "@/interface/globalType";
import {
  useGetAllBooksForSingleAuthorQuery,
  useGetSingleMemberQuery,
} from "@/redux/features/member/memberApi";
import { isNonEmptyArray } from "@/utils/isNonEmptyArray";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import BooksCards from "../Dashboard/components/cards/booksCard/BooksCards";
import MyLoading from "../ui/MyLoading";



const MemberDetailsComponent = () => {
  const [activeButton, setActiveButton] = useState("");
  const [queryObj, setQueryObj] = useState<TQueryParam[]>([]);
  const params = useParams();
  const memberId = params?.memberId;
  const { data: memberData, isLoading: isMemberLoading } =
    useGetSingleMemberQuery(memberId);
  const { data: allBooksFromAuthor, isLoading: isAllBooksLoading } =
    useGetAllBooksForSingleAuthorQuery({ memberId, queryObj });


  useEffect(() => {
    setQueryObj([
      // { name: 'page', value: selectedYear },
      // { name: 'limit', value: selectedMonth },
      { name: "status", value: activeButton },
    ]);
  }, [activeButton]);

  if (isMemberLoading || isAllBooksLoading) {
    return <MyLoading />;
  }
  return (
    <div className="p-4 h-full flex flex-col">
      <div className="  flex-grow flex flex-col">
        {memberData?.data?.profileImage ? (
          <Image
            src={memberData?.data?.profileImage}
            height={500}
            width={200}
            alt="image"
            className="mx-auto my-5"
          />
        ) : (
          <Image
            src={avatar}
            height={500}
            width={200}
            alt="image"
            className="mx-auto my-5"
          />
        )}

        <h4 className="text-2xl font-semibold text-center mb-2">
          {memberData?.data?.fullName}
        </h4>
        <p className="text-xs font-medium text-center mb-5">
          Member since:{" "}
          {new Date(
            memberData?.data?.createdAt || Date.now()
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div>
          <div className="flex flex-col xs:flex-row gap-2 mb-5 items-center justify-between">
            <p>Books by: {memberData?.data?.fullName}</p>
            <div className="flex items-center gap-3">
              <div
                onClick={() => setActiveButton("")}
                className={` px-4 py-2 text-xs font-medium rounded-full cursor-pointer ${activeButton == ""
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                  }`}
              >
                All
              </div>
              <div
                onClick={() => setActiveButton("live")}
                className={` px-4 py-2 text-xs font-medium rounded-full cursor-pointer ${activeButton == "live"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                  }`}
              >
                Live
              </div>
              <div
                onClick={() => setActiveButton("pending")}
                className={` px-4 py-2 text-xs font-medium rounded-full cursor-pointer ${activeButton == "pending"
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700"
                  }`}
              >
                Pending
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {isNonEmptyArray(allBooksFromAuthor?.data) &&
              allBooksFromAuthor?.data?.map((data: any, index: number) => (
                <BooksCards
                  key={index}
                  bookTitle={data.title}
                  status={data.status}
                  // readers={data.readers}
                  publishedDate={new Date(data.createdAt)}
                  coinsPerReview={data.points}
                  reviewCount={data.reviewCount}
                  // avgRating={data.avgRating}
                  imageSrc={data.bookCover}
                // bookId={data?._id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetailsComponent;
