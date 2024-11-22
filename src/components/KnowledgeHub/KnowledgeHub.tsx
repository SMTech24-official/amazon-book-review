/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import { Button } from "@nextui-org/react";
import KnowledgeHubStartReadingCard from "../cards/KnowledgeHubStartReadingCard";

const validationSchema = z.object({
  url: z
    .string({
      required_error: "URL is required",
    })
    .url("Invalid URL format"),
});

const KnowledgeHub = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleSubmit = async (formData: any) => {
    console.log(formData);
    const res = await handleAsyncWithToast(
      async () => {
        // return login(formData); // Replace with your actual login function
      },
      "Updating...",
      "Update Successful!",
      "Failed to update.",
      true,
      dispatch
    );

    if (res?.data?.success) {
      router.push("/");
    }
  };
  return (
    <div>
      <div className="pb-2 pt-5 ps-4 border-b w-full">
        <p>Knowledge hub</p>
      </div>
      <div className="p-4">
        <MyFormWrapper
          className={"flex items-start gap-6 w-full"}
          onSubmit={handleSubmit}
          resolver={zodResolver(validationSchema)}
        >
          <div className="w-full">
            <MyFormInput
              label="Tips and guide video link"
              labelClassName=" text-sm font-normal"
              name={"url"}
              placeHolder="URL..."
            />
          </div>
          <Button
            className="w-fit mx-auto mt-7 py-3 rounded-lg bg-primary text-white text-base font-normal leading-6"
            type="submit"
          >
            Update
          </Button>
        </MyFormWrapper>
        <div className="mt-4 mb-12">
          <iframe
            className="w-full max-w-2xl h-96 border rounded mx-auto"
            src="https://www.youtube.com/embed/aDF_ESN80r8"
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
            {[0, 1, 2, 3, 4, 5]?.map((item) => (
              <KnowledgeHubStartReadingCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
