import ComonLayout from "@/components/ComonLayout";
import { Button, Card } from "@nextui-org/react";
import React from "react";
import { db } from "@/db";
import Link from "next/link";
type BolgType = {
  id: number;
  blogTitle: string;
  createdsTime: Date;
  blogShowContent: string;
};

export default async function BlogPage() {
  await new Promise((r) => setTimeout(r, 2000));
  const textBlog = await db.textBlog.findMany({});
  console.log(textBlog);
  return (
    <ComonLayout>
      <div className="flex flex-col w-3/4 py-2">
        <div className="flex justify-end flex-col">
          <div className="flex justify-between items-center py-3">
            <div>博客列表</div>
            <Button>
              <Link href={"/blog/newBolg"}> 新建博客</Link>
            </Button>
          </div>
          <div className="flex flex-col">
            {textBlog.length > 0 ? (
              textBlog?.map((items) => {
                return (
                  <Card className="my-3 p-3 box-border">
                    <div>
                      博客标题: <span>{items.blogTitle}</span>
                    </div>
                    <div>
                      博客内容:
                      <span>
                        {items.blogShowContent.substring(
                          items.blogShowContent.indexOf("#")
                        )}
                      </span>
                    </div>
                  </Card>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </ComonLayout>
  );
}
