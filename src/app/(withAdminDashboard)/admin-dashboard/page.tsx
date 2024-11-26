import AdminDashboardPAge from '@/components/Dashboard/pages/adminDashboard/AdminDashboard';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}

const page = () => {
  return (
    <div>
      <AdminDashboardPAge />
    </div>
  );
};

export default page;