/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAddAuthorGuideMutationMutation, useGetAllAuthorGuideQuery } from "@/redux/features/authorGuid/authorGuidApi";
import {
  useAddKnowledgeHubVideoMutation,
  useGetKnowledgeHubVideoQuery,
  useUpdateKnowledgeHubVideoMutation,
} from "@/redux/features/knowledgeHub/knowledgeHubApi";
import { useAppSelector } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { isNonEmptyArray } from "@/utils/isNonEmptyArray";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { z } from "zod";
import KnowledgeHubStartReadingCard from "../cards/KnowledgeHubStartReadingCard";
import MyFormImageUpload from "../ui/MyForm/MyFormImageUpload/MyFormImageUpload";
import MyFormInput from "../ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "../ui/MyForm/MyFormWrapper/MyFormWrapper";
import MyLoading from "../ui/MyLoading";
import MyFormPdfUpload from "../ui/MyForm/MyFormPdfUpload/MyFormPdfUpload";

const validationSchema = z.object({
  videoUrl: z
    .string({
      required_error: "URL is required",
    })
    .url("Invalid URL format"),
});
const validationSchemaForModal = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(1, "Title cannot be empty")
    .max(255, "Title must be less than 255 characters"),
  cover: z
    .instanceof(File, { message: "Cover image is required" })
    .refine((file) => file.size > 0, "Cover image is required"),
  pdfFile: z
    .instanceof(File, { message: "PDF file is required" })
    .refine((file) => file.size > 0, "PDF file is required"),
});


const KnowledgeHub = () => {
  const pathName = usePathname();
  const user = useAppSelector(selectCurrentUser);
  const { data: knowledgeHubData } = useGetKnowledgeHubVideoQuery(undefined);
  const { data: allAuthorGuideData, isLoading: isAllAuthorGuideLoading } =
    useGetAllAuthorGuideQuery(undefined);
  // const { data: getSingleAuthorGuideQuery } = useGetSingleAuthorGuideQuery(undefined);
  const [addKnowledgeHubVideoMutation] = useAddKnowledgeHubVideoMutation();
  const [addAuthorGuideMutation] = useAddAuthorGuideMutationMutation();
  const [updateKnowledgeHubVideoMutation] = useUpdateKnowledgeHubVideoMutation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
  
  const handleSubmitForModal = async (data: any, reset: () => void) => {
    // Create FormData to handle file uploads
    const formData = new FormData();

    // Append the file data (cover and pdfFile)
    formData.append("cover", data.cover);  // The cover image
    formData.append("pdfFile", data.pdfFile);  // The PDF file
    

    const body = {
      title: data.title,
      addedBy: "Admin",
  };

  // Append the body object as a JSON string
  formData.append('data', JSON.stringify(body));

    // Assuming you have an API mutation or an API call to handle this
    try {
      const res = await handleAsyncWithToast(
        async () => {
          // Replace this with your actual mutation or API call
          return addAuthorGuideMutation(formData);  // Or your custom mutation to handle form data
        },
        "Submitting...",
        "Submission successful!",
        "Submission failed. Please try again.",
        false,
        null
      );
  
      // Check if submission was successful
      if (res?.data?.success) {
        reset();  // Reset form if successful
        onOpenChange();  
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  if (isAllAuthorGuideLoading) {
    return <MyLoading />;
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
            {user?.role === "admin" && (
              <>
                <Button
                  onPress={onOpen}
                  radius="sm"
                  className="bg-primary text-white"
                >
                  Add New
                </Button>
                <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  placement="top-center"
                >
                  <ModalContent>
                    {() => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Add New
                        </ModalHeader>
                        <ModalBody>
                          <MyFormWrapper
                            className={"flex flex-col gap-6 w-full"}
                            onSubmit={handleSubmitForModal}
                            resolver={zodResolver(validationSchemaForModal)}
                          >
                            <div className="w-full">
                              <MyFormInput
                                label="Title"
                                labelClassName="mb-1 text-xs font-medium"
                                name={"title"}
                                placeHolder="Title"
                              />
                            </div>
                            <div className="w-full">
                              <MyFormImageUpload name="cover" label="Image" />
                            </div>
                            <div className="w-full">
                              <MyFormPdfUpload
                                name="pdfFile"
                                label="Upload PDF Document"
                              />
                            </div>

                            <Button
                              className="w-fit mx-auto py-3 rounded-lg bg-primary text-white text-base font-normal leading-6 mb-5"
                              type="submit"
                            >
                              Submit
                            </Button>
                          </MyFormWrapper>
                        </ModalBody>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 py-4">
            {isNonEmptyArray(allAuthorGuideData?.data) &&
              allAuthorGuideData?.data?.map((item: any, index: number) => (
                <KnowledgeHubStartReadingCard key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;
