"use client";

import { ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BreadCrumb = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    // Split the current path into an array, filtering out empty values
    const pathnames = pathname.split("/").filter((x) => x);

    // Dynamically update breadcrumbs based on "tab" search parameter
    useEffect(() => {
        const tabPath = searchParams.get("tab")?.split("/") || [];
        setBreadcrumbs(tabPath);
    }, [searchParams]);

    console.log(breadcrumbs);

    return (
        <div className="">
            <div className="flex items-start gap-2 font-semibold lg:text-xl md:text-lg">
                {/* Render path-based breadcrumbs */}
                {pathnames.map((breadcrumb, index) => (
                    <span key={`path-${index}`} className="text-black capitalize flex items-center gap-2">
                        {breadcrumb}
                        {index < pathnames.length - 1 && <ChevronRight className="min-h-5 min-w-5" />}
                    </span>
                ))}
                {/* Render tab-based breadcrumbs */}
                {breadcrumbs.map((breadcrumb, index) => (
                    <span key={`tab-${index}`} className="text-black capitalize flex items-center">
                        {index == 0 && <ChevronRight className="min-h-5 min-w-5" />}
                        {breadcrumb}
                        {index < breadcrumbs.length - 1 && <ChevronRight className="min-h-5 min-w-5" />}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BreadCrumb;
