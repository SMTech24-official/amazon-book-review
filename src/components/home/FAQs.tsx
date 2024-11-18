"use client";
import React from "react";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import chat from "@/assets/chat.png";
import Image from "next/image";

const FAQs = () => {
  const defaultContent =
    "Answer: Booksy.buzz uses BuzzPoints as a way for authors to earn and request reviews. You earn BuzzPoints by reviewing books from other authors or by inviting friends to join the platform. Once you've accumulated BuzzPoints, you can use them to request reviews for your own books. Different book types and formats require varying amounts of BuzzPoints, ensuring a fair exchange based on the effort required.";

  return (
    <div className="mb-10">
      <div className="container mb-10">
        <h4 className="text-primary text-4xl font-medium text-center mb-5">
          FAQs
        </h4>

        <Accordion defaultExpandedKeys={["How does the points system work on Booksy.buzz?"]}>
          <AccordionItem
            key="How does the points system work on Booksy.buzz?"
            indicator={<FaChevronDown size={14} className="text-primary" />}
            className="!border-b !border-primary"
            title={
              <span className="text-primary">
                How does the points system work on Booksy.buzz?
              </span>
            }
            textValue="How does the points system work on Booksy.buzz?" // Add textValue for accessibility
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="Can I choose which books to review?"
            indicator={<FaChevronDown size={14} className="text-primary" />}
            className="!border-b !border-primary"
            title={
              <span className="text-primary">
                Can I choose which books to review?
              </span>
            }
            textValue="Can I choose which books to review?" // Add textValue for accessibility
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="How are reviews verified on Booksy.buzz?"
            indicator={<FaChevronDown size={14} className="text-primary" />}
            className="!border-b !border-primary"
            title={
              <span className="text-primary">
                How are reviews verified on Booksy.buzz?
              </span>
            }
            textValue="How are reviews verified on Booksy.buzz?" // Add textValue for accessibility
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-2xl mb-4">Have more questions?</h5>
        <Button className="bg-primary">
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
