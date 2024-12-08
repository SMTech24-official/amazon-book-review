'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQItem } from '@/lib/types/type';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaChevronDown } from 'react-icons/fa6';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FAQList({ initialFaqs }: any) {

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing FAQs</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion className="w-full">
                    {initialFaqs?.data?.map((faq: FAQItem) => (
                        <AccordionItem
                            key={faq._id}
                            indicator={<FaChevronDown size={14} className="text-primary" />}
                            className="!border-b !border-primary"
                            title={
                                <span className="text-primary">
                                    {faq.question}
                                </span>
                            }
                            textValue="How does the points system work on Booksy.buzz?" // Add textValue for accessibility
                        >
                            {faq.answer}
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}