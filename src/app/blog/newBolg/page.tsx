import ComonLayout from "@/components/ComonLayout";
import TextareaClient from "@/components/markDown";
import React from "react";

export default function NewBolg() {
  const initialMarkdown = `
   # 这是一个markdown示例

   ## 这是一个markdown示例

   ### 这是一个markdown示例

   ### 这是一个markdown示例

   <div style="color:red;">这是一个html示例</div>
  `;
  return (
    <ComonLayout>
      <div className="flex flex-col ">
        <div className=" py-2 box-border ">新建博客</div>
        <TextareaClient initialMarkdown={initialMarkdown} />
      </div>
    </ComonLayout>
  );
}
