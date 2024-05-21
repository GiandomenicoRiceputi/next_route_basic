import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      {children}
    </div>
  );
};

export default AuthLayout;
