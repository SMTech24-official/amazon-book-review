"use client"
import { Facebook } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import logo from "@/assets/logo/dashLogo.png"
import profile from "@/assets/profile placehoilder.png"
import { IoLogOut } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { NavLink, User } from '@/lib/types/type'


export default function MainNavLink({ user, navLink, additionalRoutes }: { user: User, navLink: NavLink[], additionalRoutes: NavLink[] }) {
    const pathname = usePathname()
    return (
        <div className="flex flex-col h-full bg-white">
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Booksy.buzz"
                        width={200}
                        height={200}
                        className="rounded"
                    />
                </div>
            </div>
            <nav className="flex-1 p-4">
                <div className="space-y-1">
                    {
                        navLink?.map((link) => <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-3 py-3 rounded-md ${pathname === link.href ? "bg-primary text-white" : "hover:bg-[#8B4C84]/10"}`}
                        >
                            <div className="rounded">
                                <link.icon className='min-w-6 min-h-6' />
                            </div>
                            {link.name}
                        </Link>)
                    }
                </div>

            </nav>
            <div className="mt-auto p-4 space-y-1">
                <div className="mt-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2 px-3 py-3 text-[#4267B2] border border-[#4267B2] rounded-md text-sm"
                    >
                        <Facebook fill='#4267B2' />
                        FB community
                    </Link>
                </div>
                {
                    additionalRoutes?.map((link) => <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-3 px-3 py-3 rounded-md ${pathname === link.href ? "bg-primary text-white" : "hover:bg-[#8B4C84]/10"}`}
                    >
                        <div className=" rounded">
                            <link.icon className='min-w-6 min-h-6' />
                        </div>
                        {link.name}
                    </Link>)
                }
                <Link
                    href="#"
                    className={`flex items-center gap-3 px-3 py-3 rounded-md `}
                >
                    <IoLogOut className="min-w-6 min-h-6" />
                    Log Out
                </Link>
                <div className="flex items-center gap-3 px-3 py-3 mt-4">
                    <Image
                        src={user?.image || profile}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="flex-1">
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-gray-500">{user?.role}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}