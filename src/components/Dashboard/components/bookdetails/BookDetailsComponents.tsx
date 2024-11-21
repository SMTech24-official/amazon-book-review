import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Info, FileText, CheckCircle } from 'lucide-react'
import { FaAmazon } from 'react-icons/fa6'
import coins from "@/assets/coins.png"


export default function BookDetailsComponents(
    {
        bookTitle,
        author,
        coinsPerReview,
        imageSrc,
    }: {
        bookTitle: string;
        author?: string;
        coinsPerReview?: number;
        imageSrc: string;
    }
) {
    return (
        <div className="flex flex-col items-center p-6 space-y-6">
            <Image
                src={imageSrc}
                alt={`${bookTitle} Cover`}
                width={300}
                height={400}
                className="rounded-lg"
            />
            <div className="text-center">
                <h2 className="text-2xl font-bold">{bookTitle}</h2>
                <p className="text-muted-foreground">{author}</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
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
            <div className="flex items-center space-x-4">
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
            <div className="max-w-lg">
                <div className="flex items-center space-x-2">
                    <Info className="min-w-5 min-h-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                        After posting your review on Amazon, click the Reviewed button to notify our admin team. Once your review is verified, your BuzzPoints will be credited to your account.
                    </p>
                </div>
            </div>
            <Button variant="destructive" className="flex items-center space-x-2">
                <span>Amazon link not working</span>
            </Button>
        </div>
    )
}