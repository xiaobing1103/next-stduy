import React from "react";
import Header from "./header";
import CommonSidebar from "./commonSiderBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
    </div>
  );
}
