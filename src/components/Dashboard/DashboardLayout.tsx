"use client"

import TopBar from '@/components/Dashboard/components/navigationBar/TopBar';
import React, { useEffect, useRef, useState } from 'react';
import SideBar from './components/navigationBar/SiderBar';
import { user } from '@/lib/fakeData/user';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

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


    return (
        <div className='flex'>
            <div className='max-h-screen h-full sticky top-0 z-50'>
                <SideBar isOpen={isOpen} user={user} navRef={navRef} />
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