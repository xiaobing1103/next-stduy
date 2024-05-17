import React from "react";
import Header from "./header";
import CommonSidebar from "./commonSiderBar";

interface ComonLayoutProps {
  children: React.ReactNode;
  showSiderBar?: boolean;
}
export default function ComonLayout({
  children,
  showSiderBar,
}: ComonLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex w-full box-border">
        {showSiderBar && <CommonSidebar />}
        <div
          style={{ height: "calc(100vh - 65px)" }}
          className={`box-border flex-1 flex justify-center  ${
            showSiderBar ? "md:ml-52" : "ml-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
