// components/BlogContent.tsx
"use client";
import React, { useState } from "react";
import TextareaClient from "@/components/markDown";
import BlogEditBtn from "@/components/blogEditBtn";

interface BlogContentProps {
  initialFormData: {
    blogTitle: string;
    isHotBolg: boolean;
    blogShowContent: string;
  };
}

const BlogContent: React.FC<BlogContentProps> = ({ initialFormData }) => {
  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <TextareaClient initialMarkdown={formData} setformData={setFormData} />
      <BlogEditBtn formData={formData} />
    </>
  );
};

export default BlogContent;
