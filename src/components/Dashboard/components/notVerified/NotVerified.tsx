import notVerifiedIcon from '@/assets/notVerified.png'
import Image from "next/image"
import Link from "next/link"

export default function NotVerified() {
    return (
        <div className="flex items-center justify-center w-full h-[80vh]">
            <div className="bg-gradient-to-b from-white to-[#F5EEF3] p-20 rounded-full">
                <div className="flex flex-col justify-center items-center aspect-square gap-4">
                    <div className="flex justify-center">
                        <div className="w-16 h-16">
                            <Image src={notVerifiedIcon} alt="not verified icon" />
                        </div>
                    </div>
                    <p className="text-[#8B4C84] text-xl max-w-md">
                        Please complete your profile first to
                        <br />
                        add books and see your progress
                    </p>
                    <Link href={"/dashboard/settings"}
                        className="bg-[#8B4C84] hover:bg-[#8B4C84]/90 text-white px-6 py-3 h-auto text-lg rounded-lg"
                    >
                        Profile settings
                    </Link>
                </div>
            </div>
        </div>
    )
}

