import { FAQItem } from "@/lib/types/type"
import { AddFAQForm } from "./Add-faq"
import { FAQList } from "./Faq-list"


export default async function Faq() {
    const faqs: FAQItem[] = [
        { id: '1', question: "What is this service?", answer: "This is a FAQ management system." },
        { id: '2', question: "How do I use it?", answer: "You can add, edit, and delete FAQ items using the admin interface." },
    ]
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">FAQ Admin</h1>
            <div className="grid gap-8 md:grid-cols-2">
                <AddFAQForm />
                <FAQList initialFaqs={faqs} />
            </div>
        </div>
    )
}

