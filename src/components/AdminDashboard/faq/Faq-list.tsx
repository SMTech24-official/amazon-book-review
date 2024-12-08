'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FAQItem } from '@/lib/types/type';
import { useDeleteFAqMutation } from '@/redux/features/others/othersApi';
import { useAppDispatch } from '@/redux/hooks';
import { handleAsyncWithToast } from '@/utils/handleAsyncWithToast';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Trash2 } from 'lucide-react';
import { FaChevronDown } from 'react-icons/fa6';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FAQList({ initialFaqs }: any) {
    const dispatch = useAppDispatch();
    const [deleteFaq] = useDeleteFAqMutation()

    const handleDelete = async (id: string) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const finishRes = await handleAsyncWithToast(
            async () => {
                return deleteFaq(id); // Replace with your actual login function
            },
            "Deleting FAQ...", // Toast message for the start of the process
            "FAQ Deleted Completed!", // Toast message for success
            `Please Check Your Network`, // Toast message for failure
            true,
            dispatch
        );
    }

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
                            textValue='Bookshy Buzz'
                        >
                            <div className='flex items-center justify-between'>
                                <span className="">
                                    {faq.answer}
                                </span>
                                <button onClick={() => handleDelete(faq._id)}>
                                    <Trash2 className='w-6 stroke-red-500' />
                                </button>
                            </div>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}