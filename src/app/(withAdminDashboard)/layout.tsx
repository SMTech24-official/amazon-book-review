import AdminLayout from "@/components/Dashboard/AdminLayout";
// import ProtectedRoute from "@/components/ui/ProtectedRoute/ProtectedRoute";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <ProtectedRoute roles={["admin", "superAdmin"]}> */}
        <AdminLayout>{children}</AdminLayout>
      {/* </ProtectedRoute> */}
    </>
  );
};

export default layout;
