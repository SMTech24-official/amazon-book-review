"use client";
import chat from "@/assets/chat.png";
import { useGetAllFaqQuery } from "@/redux/features/others/othersApi";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import MyLoading from "../ui/MyLoading";
import { useRouter } from "next/navigation";
import { useUserDataQuery } from "@/redux/features/auth/authApi";

const FAQs = () => {
  const { data, isLoading } = useGetAllFaqQuery(undefined)
  const { data: UserData } = useUserDataQuery(undefined)
  const router = useRouter()
  if (isLoading) {
    return <MyLoading />
  }
  if (data?.data.length === 0) {
    return ""
  }

  const handleChatNavigate = () => {
    if (UserData?.data) {
      router.push("/dashboard/help")
    }
    else router.push("/login")
  }

  return (
    <div className="mb-10" id="faqs">
      <div className="container mb-10">
        <h4 className="text-primary text-4xl font-medium text-center lg:mb-5">
          FAQs
        </h4>

        <Accordion
          defaultExpandedKeys={[
            "How does the points system work on Booksy.buzz?",
          ]}
        >
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.data.map((faq: any) => <AccordionItem
              key={faq._id}
              indicator={<FaChevronDown size={14} className="text-primary" />}
              className="!border-b !border-primary"
              title={
                <span className="text-primary">
                  {faq.question}
                </span>
              }
              textValue={faq.question}
            >
              {faq.answer}
            </AccordionItem>)
          }

        </Accordion>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-2xl mb-4">Have more questions?</h5>
        <Button onClick={handleChatNavigate} className="bg-primary">
          <div className="flex">
            <span className="text-white">Chat with us</span>
            <span className="ml-2">
              <Image src={chat} height={20} width={20} alt="image" />
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FAQs;
