"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export async function editSnippet(id: number, code: string) {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippent/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
}

export async function createSnippent(
  formState: { message: string },
  formData: FormData
) {
  // 确认用户输入的有效的输入值
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    console.log(title);
    console.log(code);
    // 校验
    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "标题需要大于三个字符",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "编码需要大于十个字符",
      };
    }

    // 数据库的增加操作
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    // throw new Error('数据库保存失败！')
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return {
        message: "发生了致命的错误...",
      };
    }
  }
  // 提交后返回home页面
  revalidatePath("/");
  redirect("/");
}
