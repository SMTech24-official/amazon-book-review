import { Button } from "@/components/ui/button"
import { TUser } from '@/redux/features/auth/authSlice'
import { Menu, X } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { HiMiniBellAlert } from 'react-icons/hi2'

export default function TopBar({  isOpen, setIsOpen }: { user: null | TUser, isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <header className="border-b bg-white">
            <div className="flex items-center justify-between px-6 py-3 w-full">
                <button
                    className="lg:hidden "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    <span className="sr-only">Toggle menu</span>
                </button>

                {/* Left Section */}
                {/* <div className="lg:flex items-center gap-2 hidden">
                    <span className="hidden sm:inline text-[15px]">Welcome Back, {user?.name}!</span>
                    <span className="text-xl">👋</span>
                </div> */}

                {/* Center Section */}
                {/* <div className="flex-1 max-w-[600px] mx-4 hidden sm:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search"
                            className="w-full pl-10 h-9 text-sm border-gray-200"
                        />
                    </div>
                </div> */}
                <div></div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* <button
                        className="border-primary sm:text-lg text-primary font-bold border-2 flex gap-2 sm:px-4 px-3 py-1 sm:py-2 rounded-full"
                    >
                        <Image
                            src={refer}
                            alt="Referral"
                            width={100}
                            height={100}
                            className="rounded sm:w-7 sm:h-7 w-5 h-5"
                        />
                        <span>Referral</span>
                    </button>

                    <div className="flex items-center justify-center sm:text-lg border border-gray-500 rounded-full sm:px-4 px-3 py-1 sm:py-2 gap-2">
                        <Image
                            src={coins}
                            alt="Referral"
                            width={100}
                            height={100}
                            className="rounded sm:w-7 sm:h-7 w-5 h-5"
                        />
                        <span>100</span>
                    </div> */}

                    <Button
                        variant="ghost"
                        size="icon"
                        className="p-1 border rounded-full"
                    >
                        <HiMiniBellAlert className="min-h-[27px] min-w-[27px]" />
                    </Button>
                </div>
            </div>
        </header>
    )
}