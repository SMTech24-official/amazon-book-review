/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import { Button } from "@nextui-org/react";
import KnowledgeHubStartReadingCard from "../cards/KnowledgeHubStartReadingCard";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { knowledge } from "@/lib/fakeData/knowledge";
// import { useGetKnowledgeVideoQuery } from "@/redux/features/knowledge/knowledge";


const validationSchema = z.object({
  url: z
    .string({
      required_error: "URL is required",
    })
    .url("Invalid URL format"),
});

const KnowledgeHub = () => {
  const user = useAppSelector(selectCurrentUser);
  // const { data, isLoading } = useGetKnowledgeVideoQuery(undefined);
  // console.log(data);
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
      <div className="py-4">
        <div className="border-b">
          {
            user?.role === "admin" ? <MyFormWrapper
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
            </MyFormWrapper> : <span >Tips and guide video</span>
          }
        </div>

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
            {
              user?.role === "admin" && <Button radius="sm" className="bg-primary text-white">
                Add New
              </Button>
            }

          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-4 py-4">
            {knowledge?.map((item, idx) => (
              <KnowledgeHubStartReadingCard image={item.image_url.src} author={item.author} title={item.title} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
