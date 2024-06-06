// pages/showblog/[id].tsx
import notFound from "@/app/not-found";
import React from "react";
import ComonLayout from "@/components/ComonLayout";
import BlogContent from "./BlogContent";

interface ShowpageProps {
  params: {
    id: string;
  };
  searchParams: object;
}

export default async function Showblog({ params: { id } }: ShowpageProps) {
  await new Promise((r) => setTimeout(r, 2000));

  if (!id) {
    return notFound();
  }

  const initialFormData = {
    blogTitle: "博客默认标题",
    isHotBolg: false,
    blogShowContent: `# 这是一个markdown示例
## 这是一个markdown示例
### 这是一个markdown示例
### 这是一个markdown示例
  
<div style="color:red;">这是一个html示例</div>
A paragraph with *emphasis* and **strong importance**.
  
> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
  
* Lists
* [ ] todo
* [x] done
  
A table:
  
| 标题1 | 标题2 | 标题3 |
|-------|-------|-------|
| 单元格1 | 单元格2 | 单元格3 |
| 单元格4 | 单元格5 | 单元格6 |
  
This ~is not~ strikethrough, but ~~this is~~! `,
  };

  return (
    <ComonLayout showSiderBar={true}>
      <BlogContent initialFormData={initialFormData} />
    </ComonLayout>
  );
}
