import MemberDetailsComponent from '@/components/MemberDetailsComponent/MemberDetailsComponent';
import React from 'react';


const breadcrumbLinks = [
    { name: "Members list", href: "/admin-dashboard/members-details" },
    { name: "Members details", href: null }, // Last breadcrumb is static
  ];


const MemberDetailsPage = () => {
    return (
        <div>
              <MemberDetailsComponent breadcrumbLinks={breadcrumbLinks}  />  
        </div>
    );
};

export default MemberDetailsPage;