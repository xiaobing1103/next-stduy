"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import * as actions from "@/actions";

interface BlogEditBtnProps {
  formData: {
    blogTitle: string;
    isHotBolg: boolean;
    blogShowContent: string;
  };
}

const BlogEditBtn: React.FC<BlogEditBtnProps> = ({ formData }) => {
  const router = useRouter();
  return (
    <div className="h-12 bg-slate-400 absolute bottom-0 w-full flex items-center justify-end">
      <div className="mx-2">
        <Button
          onClick={() => {
            router.push("/blog");
          }}
          className="mr-2"
          color="secondary"
          size="sm"
        >
          取消
        </Button>
        <Button
          onClick={() =>
            actions
              .CreateBlog(formData)
              .then((res) => {
                if (res?.code === 200) {
                  console.log(res.message);
                  toast(res.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                } else {
                  toast.error(res.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                }
              })
              .catch((err) => {
                console.log(err);
              })
          }
          color="primary"
          size="sm"
        >
          确认
        </Button>
      </div>
    </div>
  );
};

export default BlogEditBtn;
