import React from "react";
import Image from "next/image";
import amazonIcon from "@/assets/amazon-icon.png"; // Replace with your image path
import linkedinIcon from "@/assets/linkedin-icon.png";
import quotationMarkUp from "@/assets/quotationMarkUp.png";
import quotationMarkDown from "@/assets/quotationMarkDown.png";
import { useDeleteCustomerReviewMutation } from "@/redux/features/others/othersApi";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { Trash2 } from "lucide-react";


const AdminTestimonialCard = ({ id, name, reviews }: { name: string, reviews: string, id: string }) => {
  const [deleteReview] = useDeleteCustomerReviewMutation()

  const dispatch = useAppDispatch();

  const handleDelete = async (id: string) => {
    console.log(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const finishRes = await handleAsyncWithToast(
      async () => {
        return deleteReview(id); // Replace with your actual login function
      },
      "Deleting Review...", // Toast message for the start of the process
      "Review Deleted Completed!", // Toast message for success
      `Please Check Your Network`, // Toast message for failure
      true,
      dispatch
    );
  }


  return (
    <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
      <div className="flex flex-col xs:flex-row gap-2 xs:gap-4">
        {/* User Image */}
        <div className="">
          <Image
            src={
              "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
            }
            alt="User Image"
            width={48}
            height={48}
            className="w-10"
          />
        </div>
        {/* User Info */}
        <div>
          <p className="font-semibold text-lg">{name}</p>
          <div className="flex space-x-2 text-sm text-gray-500 mb-4">
            <span>
              <Image src={amazonIcon} height={10} width={40} alt="image" />
            </span>
            <span>
              <Image src={linkedinIcon} height={10} width={40} alt="image" />
            </span>
          </div>
          {/* Testimonial Text */}
          <div className=" text-lg text-gray-700 flex flex-wrap ">
            <span className="me-1">
              <Image src={quotationMarkUp} height={10} width={20} alt="image" />
            </span>
            {reviews?.length > 150 ? (
              <span className="">{reviews.slice(0, 150)}...</span>
            ) : (
              reviews
            )}
            <span className="">
              <Image
                src={quotationMarkDown}
                height={10}
                width={20}
                alt="image"
              />
            </span>
          </div>
        </div>
      </div>
      <button onClick={() => handleDelete(id)}>
        <Trash2 className='w-6 stroke-red-500' />
      </button>
    </div>
  );
};

export default AdminTestimonialCard;
