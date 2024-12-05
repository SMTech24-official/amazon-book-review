"use client"

// import { user } from '@/lib/fakeData/user';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import React, { useEffect, useRef, useState } from 'react';
import { BiSolidBookAdd } from 'react-icons/bi';
import { FaBookBookmark, FaQ } from 'react-icons/fa6';
import { IoLibrarySharp, IoSettingsSharp } from 'react-icons/io5';
import { RiDashboardFill, RiFeedbackLine } from 'react-icons/ri';
// import { SiBookstack } from 'react-icons/si';
import SideBar from './components/navigationBar/SiderBar';



const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const user = useAppSelector(selectCurrentUser);

    const [isOpen, setIsOpen] = useState(false)

    const navRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [navRef])

    const navLink = [
        { name: 'Verification', href: '/admin-dashboard', icon: RiDashboardFill },
        { name: 'Members details', href: '/admin-dashboard/members-details', icon: FaBookBookmark },
        { name: 'Knowledge hub', href: '/admin-dashboard/knowledge-hub', icon: BiSolidBookAdd },
        { name: 'BuzzPoints', href: '/admin-dashboard/buzzPoints', icon: IoLibrarySharp },
        // { name: 'Support', href: '/admin-dashboard/support', icon: SiBookstack },
    ];
    const additionalRoutes = [
        { name: 'Settings', href: '/admin-dashboard/settings', icon: IoSettingsSharp },
        { name: 'FAQ', href: '/admin-dashboard/faq', icon: FaQ },
        { name: 'Reviews', href: '/admin-dashboard/reviews', icon: RiFeedbackLine },
    ];

    return (
        <div className='flex'>
            <div className='max-h-screen h-full sticky top-0 z-50'>
                <SideBar additionalRoutes={additionalRoutes} navLink={navLink} isOpen={isOpen} user={user} navRef={navRef} />
            </div>
            <div className='w-full'>
                {children}
            </div>
        </div>
    );
};

export default AdminLayout;