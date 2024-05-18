"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import TextareaClient from "./markDown";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import { Bounce, toast } from "react-toastify";
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
      <div className=" h-12 bg-slate-400 absolute  bottom-0 w-full flex items-center justify-end">
        <div className="mx-2">
          <Button className="  mr-2" color="secondary" size="sm">
            返回主页
          </Button>
          <Button
            onClick={() =>
              actions
                .CreateBlog(formData)
                .then((res) => {
                  if (res?.code == 200) {
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
            新建博客
          </Button>
        </div>
      </div>
    </div>
  );
}
