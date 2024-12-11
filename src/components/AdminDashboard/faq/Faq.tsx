"use client"

import MyLoading from "@/components/ui/MyLoading"
import { useGetAllFaqQuery } from "@/redux/features/others/othersApi"
import { AddFAQForm } from "./Add-faq"
import { FAQList } from "./Faq-list"


export default function Faq() {


    const { data, isLoading } = useGetAllFaqQuery(undefined)

    if (isLoading) {
        return <MyLoading />
    }

    // console.log(data);
    return (
        <div className="container mx-auto py-10 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">FAQ Admin</h1>
            <div className="grid gap-8 md:grid-cols-2">
                <AddFAQForm />
                <FAQList initialFaqs={data} />
            </div>
        </div>
    )
}

