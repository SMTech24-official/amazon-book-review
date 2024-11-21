import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <ProtectedRoute roles={["author"]}> */}
        <DashboardLayout>{children}</DashboardLayout>
      {/* </ProtectedRoute>  */}
    </>
  );
};

export default layout;
