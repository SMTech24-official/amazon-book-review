/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import { Button } from "@nextui-org/react";
import KnowledgeHubStartReadingCard from "../cards/KnowledgeHubStartReadingCard";
import {
  useAddKnowledgeHubVideoMutation,
  useGetKnowledgeHubVideoQuery,
  useUpdateKnowledgeHubVideoMutation,
} from "@/redux/features/knowledgeHub/knowledgeHubApi";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useGetAllAuthorGuideQuery, useGetSingleAuthorGuideQuery } from "@/redux/features/authorGuid/authorGuidApi";
import { isNonEmptyArray } from "@/utils/isNonEmptyArray";
import MyLoading from "../ui/MyLoading";

const validationSchema = z.object({
  videoUrl: z
    .string({
      required_error: "URL is required",
    })
    .url("Invalid URL format"),
});

const KnowledgeHub = () => {
  const dispatch = useAppDispatch();
  const pathName = usePathname();
  const user = useAppSelector(selectCurrentUser);
  const router = useRouter();
  const { data: knowledgeHubData } = useGetKnowledgeHubVideoQuery(undefined);
  const { data: allAuthorGuideData , isLoading: isAllAuthorGuideLoading} = useGetAllAuthorGuideQuery(undefined);
  // const { data: getSingleAuthorGuideQuery } = useGetSingleAuthorGuideQuery(undefined);
  const [addKnowledgeHubVideoMutation] = useAddKnowledgeHubVideoMutation();
  const [updateKnowledgeHubVideoMutation] = useUpdateKnowledgeHubVideoMutation();
  console.log(allAuthorGuideData?.data);
  const handleSubmit = async (formData: any, reset: () => void) => {
    if (knowledgeHubData?.success) {
      const res = await handleAsyncWithToast(
        async () => {
          return updateKnowledgeHubVideoMutation({
            id: knowledgeHubData?.data?._id,
            ...formData,
          }); // Replace with your actual login function
        },
        "Uploading...",
        "Upload successful!",
        "Upload failed. Please try again.",
        false,
        null
      );
      if (res?.data?.success) {
        reset();
      }
    } else {
      const res = await handleAsyncWithToast(
        async () => {
          return addKnowledgeHubVideoMutation(formData); // Replace with your actual login function
        },
        "Uploading...",
        "Upload successful!",
        "Upload failed. Please try again.",
        false,
        null
      );
      if (res?.data?.success) {
        reset();
      }
    }
  };

  if (isAllAuthorGuideLoading) {
    return <MyLoading/>;
  }
  return (
    <div>
      <div className="pb-2 pt-5 ps-4 border-b w-full">
        <p>Knowledge hub</p>
      </div>
      <div className="p-4">
        {pathName?.includes("admin") && user?.role == "admin" && (
          <MyFormWrapper
            className={"flex items-start gap-6 w-full"}
            onSubmit={handleSubmit}
            resolver={zodResolver(validationSchema)}
          >
            <div className="w-full">
              <MyFormInput
                label="Tips and guide video link"
                labelClassName=" text-sm font-normal"
                name={"videoUrl"}
                placeHolder="URL..."
              />
            </div>
            <Button
              className="w-fit mx-auto mt-7 py-3 rounded-lg bg-primary text-white text-base font-normal leading-6"
              type="submit"
            >
              {knowledgeHubData?.success ? "Update" : "Add"}
            </Button>
          </MyFormWrapper>
        )}

        <div className="mt-4 mb-12">
          <iframe
            className="w-full max-w-2xl h-96 border rounded mx-auto"
            src={knowledgeHubData?.data?.videoUrl.replace("watch?v=", "embed/")}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="flex items-center justify-between border-b pb-2 w-full">
            <p>Resources & Booksy guides for author </p>
            <Button radius="sm" className="bg-primary text-white">
              Add New
            </Button>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 py-4">
            {isNonEmptyArray(allAuthorGuideData?.data) && allAuthorGuideData?.data?.map((item: any, index:number) => (
              <KnowledgeHubStartReadingCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
