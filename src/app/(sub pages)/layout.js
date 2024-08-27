import HomeBtn from "@/components/HomeBtn";
import React from "react";

const SubPagesLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
      <HomeBtn />
      {children}
    </main>
  );
};

export default SubPagesLayout;
