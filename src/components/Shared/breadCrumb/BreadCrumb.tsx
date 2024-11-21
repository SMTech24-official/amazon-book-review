"use client"

import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const BreadCrumb = () => {
    const searchParams = useSearchParams();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
    console.log(breadcrumbs);
    // Update breadcrumb dynamically based on tab
    useEffect(() => {
        const path = searchParams.get("tab")?.split("/") || [];
        setBreadcrumbs(path);
    }, [searchParams]);



    return (
        <div className="">
            <div className="flex items-center gap-2 font-semibold  lg:text-xl md:text-lg">
                <span className="text-black">Settings</span>
                <span className="text-black">{breadcrumbs.length > 0 ? <ChevronRight className='min-h-5 min-w-5'/> : ""}</span>
                {/* Loop through breadcrumbs and display */}
                {breadcrumbs.map((breadcrumb, index) => (
                    <span key={index} className="text-black capitalize">
                        {breadcrumb}
                        {index < breadcrumbs.length - 1 && <span className="mx-2">{'>'}</span>}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BreadCrumb;