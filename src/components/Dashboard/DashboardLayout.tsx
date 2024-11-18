"use client"

import TopBar from '@/components/Dashboard/components/navigationBar/TopBar';
import React, { useEffect, useRef, useState } from 'react';
import SideBar from './components/navigationBar/SiderBar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    
    const user = {
        name: "Tahsin Zaman",
        role: "Book Artist",
        image: ""
    }


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
        <div>
            <div className='flex'>
                <SideBar isOpen={isOpen} user={user} navRef={navRef} />
                <div className='w-full'>
                    <TopBar setIsOpen={setIsOpen} isOpen={isOpen} user={user} />
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;