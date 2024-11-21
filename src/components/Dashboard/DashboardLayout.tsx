"use client"

import TopBar from '@/components/Dashboard/components/navigationBar/TopBar';
// import { user } from '@/lib/fakeData/user';
import React, { useEffect, useRef, useState } from 'react';
import { BiSolidBookAdd } from 'react-icons/bi';
import { FaBookBookmark } from 'react-icons/fa6';
import { GiOpenBook } from 'react-icons/gi';
import { IoLibrarySharp, IoSettingsSharp } from 'react-icons/io5';
import { RiCustomerServiceFill, RiDashboardFill } from 'react-icons/ri';
import { SiBookstack } from 'react-icons/si';
import SideBar from './components/navigationBar/SiderBar';
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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
        { name: 'Dashboard', href: '/dashboard', icon: RiDashboardFill },
        { name: 'My Books', href: '/dashboard/myBooks', icon: FaBookBookmark },
        { name: 'Add Books', href: '/dashboard/addBooks', icon: BiSolidBookAdd },
        { name: 'Library', href: '/dashboard/library', icon: IoLibrarySharp },
        { name: 'Reading', href: '/dashboard/reading', icon: GiOpenBook },
        { name: 'Knowledge hub', href: '/dashboard/knowledgeHub', icon: SiBookstack },
    ];
    const additionalRoutes = [
        { name: 'Settings', href: '/dashboard/settings', icon: IoSettingsSharp },
        { name: ' Help', href: '/dashboard/help', icon: RiCustomerServiceFill },
    ];


    return (
        <div className='flex'>
            <div className='max-h-screen h-full sticky top-0 z-50'>
                <SideBar additionalRoutes={additionalRoutes} navLink={navLink} isOpen={isOpen} user={user} navRef={navRef} />
            </div>
            <div className='w-full'>
                <div className='sticky top-0 z-40'>
                    <TopBar setIsOpen={setIsOpen} isOpen={isOpen} user={user} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;