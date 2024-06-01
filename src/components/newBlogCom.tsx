"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import TextareaClient from "./markDown";

import BlogEditBtn from "./blogEditBtn";

interface EditBlogComType {}
export default function NewBlogCom(props: EditBlogComType) {
  const [formData, setformData] = useState({
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
  });

  return (
    <div className="flex flex-col w-full relative">
      <div className="flex justify-between px-4 py-2 box-border font-bold">
        <Input
          className="w-32"
          onChange={(e) =>
            setformData({ ...formData, blogTitle: e.target.value })
          }
          value={formData.blogTitle}
        ></Input>
        <div>
          <Button className="mr-2" color="primary" size="sm">
            修改标题
          </Button>
          <Button color="primary" size="sm">
            取消修改
          </Button>
        </div>
      </div>
      <TextareaClient initialMarkdown={formData} setformData={setformData} />
      <BlogEditBtn formData={formData} />
    </div>
  );
}
