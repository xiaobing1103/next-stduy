import ComonLayout from "@/components/ComonLayout";
import NewBlogCom from "@/components/newBlogCom";
import { db } from "@/db";
import React from "react";
interface EditpageProps {
  params: {
    id: string;
  };
}
export default async function NewBolg(props: EditpageProps) {
  const id = parseInt(props.params.id);
  // const textBlog = await db.textBlog.findFirst({
  //   where: { id: Number(id) },
  // });

  return (
    <ComonLayout>
      {/* textBlog={textBlog} */}
      <NewBlogCom />
    </ComonLayout>
  );
}
