'use client'

import { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FAQItem } from '@/lib/types/type'
import { FaChevronDown } from 'react-icons/fa6';

interface FAQListProps {
    initialFaqs: FAQItem[]
}

export function FAQList({ initialFaqs }: FAQListProps) {
    const [faqs, setFaqs] = useState(initialFaqs)

    useEffect(() => {
        setFaqs(initialFaqs)
    }, [initialFaqs])

    return (
        <Card>
            <CardHeader>
                <CardTitle>Existing FAQs</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
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