import { RiCustomerServiceFill, RiDashboardFill } from 'react-icons/ri'
import { FaBookBookmark } from 'react-icons/fa6'
import { IoLibrarySharp, IoSettingsSharp } from 'react-icons/io5'
import { BiSolidBookAdd } from 'react-icons/bi'
import { GiOpenBook } from 'react-icons/gi'
import { SiBookstack } from 'react-icons/si'
import { User } from '@/lib/types/type'
import { cn } from '@/lib/utils'
import MainNavLink from './Navlink'

export default function SideBar({ user, navRef, isOpen }: { user: User, navRef: React.RefObject<HTMLDivElement>, isOpen: boolean }) {


    const navLink = [
        { name: 'Dashboard', href: '/dashboard', icon: RiDashboardFill },
        { name: 'My Books', href: '/dashboard/myBooks', icon: FaBookBookmark },
        { name: 'Add Books', href: '/dashboard/addBooks', icon: BiSolidBookAdd },
        { name: 'Library', href: '/dashboard/library', icon: IoLibrarySharp },
        { name: 'Reading', href: '/dashboard/reading', icon: GiOpenBook },
        { name: 'Knowledge hub', href: '/dashboard/knowledgeHub', icon: SiBookstack },
    ];
    const additionalRoutes = [
        { name: 'Settings', href: '/dashboard/myBooks', icon: IoSettingsSharp },
        { name: ' Help', href: '/dashboard/Books', icon: RiCustomerServiceFill },
    ];

    return (
        <div ref={navRef && navRef} className="min-h-screen flex">
            {/* Sidebar for large screens */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-40 w-64 border-r md:w-56 lg:w-72 h-full transform transition-transform duration-300 ease-in-ou",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <MainNavLink additionalRoutes={additionalRoutes} navLink={navLink} user={user} />
            </div>
            <div
                className="hidden lg:block lg:w-72 h-full border-r"
            >
                <MainNavLink additionalRoutes={additionalRoutes} navLink={navLink} user={user} />
            </div>
        </div>
    )
}
