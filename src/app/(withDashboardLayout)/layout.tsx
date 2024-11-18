import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </>
    );
};

export default layout;