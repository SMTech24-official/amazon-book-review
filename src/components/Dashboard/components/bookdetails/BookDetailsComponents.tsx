import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Info, FileText, CheckCircle, Unlink } from 'lucide-react'
import { FaAmazon } from 'react-icons/fa6'
import coins from "@/assets/coins.png"


export default function BookDetailsComponents(
    {
        bookTitle,
        author,
        coinsPerReview,
        imageSrc,
        amznLink,
        bookLink
    }: {
        bookTitle: string;
        author?: string;
        coinsPerReview?: number;
        imageSrc: string;
        amznLink?: string;
        bookLink?: string
    }
) {
    return (
        <div className="flex flex-col items-center w-full">
            <Image
                src={imageSrc}
                alt={`${bookTitle} Cover`}
                width={300}
                height={400}
                className="rounded-lg"
            />
            <div className='flex items-center justify-between w-full'>
                <div className="text-start">
                    <h2 className="text-2xl font-bold">{bookTitle}</h2>
                    <p className="text-muted-foreground">by {author}</p>
                </div>
                <div className="flex flex-col items-center space-x-4">
                    <Button variant="ghost" className="flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Download as PDF</span>
                    </Button>
                    <div className="flex items-center space-x-1">
                        <Image src={coins} alt="icon of coins earned by reding" className="max-w-6 max-h-6" />
                        <span className="text-sm text-muted-foreground">
                            {coinsPerReview}
                        </span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:gap-10 gap-4 w-full">
                <Button variant="default" className="flex items-center space-x-2">
                    <span>View the book on Amazon</span>
                    <FaAmazon className="w-4 h-4" />
                </Button>
                <Button variant="outline">Review now on Amazon</Button>
                <Button variant="secondary" className="flex items-center space-x-2">
                    <span>Reviewed</span>
                    <CheckCircle className="w-4 h-4" />
                </Button>
            </div>

            <div className="max-w-md xl:mt-20 mt-10 xl:mb-8 mb-6">
                <div className="flex flex-col text-center items-center space-x-2">
                    <Info className="min-w-5 min-h-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                        After posting your review on Amazon, click the Reviewed button to notify our admin team. Once your review is verified, your BuzzPoints will be credited to your account.
                    </p>
                </div>
            </div>
            <div className='ml-auto'>
                <button className="flex items-center space-x-2 border-2 px-4 py-2 border-red-500 text-red-500 font-semibold rounded-full">
                    <span>Amazon link not working</span>
                    <Unlink className='min-h-4 min-w-4' />
                </button>
            </div>
        </div>
    )
}