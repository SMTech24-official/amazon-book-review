"use client";
import React from "react";
import heroSideBg from "@/assets/heroSideBg.png";
import HeroImage from "@/assets/HeroImage.png";
import heroConnector from "@/assets/heroConnector.png";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const HeroSection: React.FC = () => {
  const user = useAppSelector(selectCurrentUser);
  const router = useRouter()

  const handleGetReviewed = () => {
   
    if (user?.email) {
    router.push("/dashboard")
    } else {
      toast.info("Please login first to get reviewed")
      router.push("/login");
    }
  }
  return (
    <div
      style={{
        backgroundImage: `url(${heroSideBg.src})`,
        backgroundPosition: "right center", // Align background image to the right
        backgroundRepeat: "no-repeat", // Prevent repetition
        backgroundSize: "contain", // Ensure the image fits within the container
      }}
    >
      <div className="relative flex flex-col-reverse xs:flex-row justify-between items-center container pt-10 pb-10 md:py-16 overflow-hidden">
        {/* Left Section */}
        <div className="w-full z-10 overflow-hidden">
          <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-5 md:mb-8">
            <span className="text-primary">Boost Your Books</span> <br /> With
            Genuine <br /> Amazon Reviews
          </h1>
          <p className="mb-5 md:mb-14">
            Earn real reviews from engaged readers and watch <br /> as your
            books reputation takes off
          </p>
          <Button onClick={handleGetReviewed} radius="sm" className="bg-primary text-white">
            Get Reviewed!
          </Button>
        </div>

        {/* Right Section */}
        <div className="w-full mb-7 z-10 overflow-hidden">
          <Image src={HeroImage} height={800} width={800} alt="image" />
        </div>

        <div className="hidden xs:block absolute -bottom-32 md:-bottom-32 lg:-bottom-28 left-40 z-0 md:-rotate-[7deg] xl:-rotate-[0deg] overflow-hidden">
          <Image src={heroConnector} height={400} width={600} alt="image" />
        </div>
        {/* Background Elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50 via-white to-purple-100 -z-10"></div> */}
      </div>
    </div>
  );
};

export default HeroSection;
