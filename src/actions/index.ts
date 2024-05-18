"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const editSnippet = async (
  id: number,
  { code, title }: { code: string; title: string }
) => {
  console.log(this, id, code, title);
  await db.snippet.update({
    where: { id },
    data: { code, title },
  });
  redirect(`/snippent/${id}`);
};
export async function CreateBlog(formData: {
  blogTitle: string;
  blogShowContent: string;
  isHotBolg: boolean;
}) {
  try {
    const blogTitle = formData.blogTitle;
    const isHotBolg = formData.isHotBolg;
    const blogShowContent = formData.blogShowContent;
    // 校验
    if (typeof blogTitle !== "string" || blogTitle.length < 3) {
      return {
        code: 400,
        message: "标题需要大于三个字符",
      };
    }
    if (typeof blogShowContent !== "string" || blogShowContent.length < 10) {
      return {
        code: 400,
        message: "markdown内容需要大于十个字符",
      };
    }

    // 数据库的增加操作
    await db.textBlog.create({
      data: {
        blogTitle,
        blogShowContent,
      },
    });
    return {
      code: 200,
      message: "新增博客成功!",
    };
    // throw new Error('数据库保存失败！')
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return {
        code: 500,
        message: "发生了致命的错误...",
      };
    }
  }
}

// export async function CreateBlog(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     const { title, code } = req.body;
//     if (typeof title !== "string" || title.length < 3) {
//       return res.status(400).json({ message: "标题需要大于三个字符" });
//     }
//     if (typeof code !== "string" || code.length < 10) {
//       return res.status(400).json({ message: "编码需要大于十个字符" });
//     }

//     const snippet = await db.snippet.create({
//       data: {
//         title,
//         code,
//       },
//     });

//     return res.status(200).json(snippet);
//   } catch (err) {
//     return res.status(500).json({ message: "数据库保存失败或发生了其他错误" });
//   }
// }

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

export async function LoginUserInfo(
  formState: { message: string },
  userInfo: FormData
) {
  const userName = userInfo.get("userName") as string;
  const passWord = userInfo.get("passWord") as string;
  console.log(userName);
  console.log(passWord);

  // 先找到用户是否存在然后再进行登录逻辑
  const user = await db.userInfo.findUnique({
    where: {
      userName: userName,
    },
    select: {
      id: true,
      passWord: true,
      email: true,
    },
  });
  console.log(user);
  if (user) {
    // 使用 bcrypt 比较密码

    // const passwordMatch = await bcrypt.compare(passWord, user.passWord);
    if (user.passWord == passWord) {
      // 密码匹配，登录成功
      return {
        message: `用户 ${user.email} 登录成功, 欢迎回来！`,
      };
    } else {
      // 密码不匹配
      return {
        message: "密码错误，请重试！",
      };
    }
  } else {
    // 用户不存在
    return {
      message: "用户不存在，请先注册账户！",
    };
  }
}
export async function createUserInfo(
  formState: { message: string },
  userInfo: FormData
) {
  // 清楚所有数据
  // await db.userInfo.deleteMany({});
  //查找所有数据
  // const allUsers = await db.userInfo.findMany();
  // console.log(allUsers);
  // 确认用户输入的有效的输入值
  // 检查是否存在相同的userName

  try {
    const userName = userInfo.get("userName") as string;
    const email = userInfo.get("email") as string;
    const passWord = userInfo.get("passWord") as string;
    console.log(userName);
    console.log(email);
    console.log(passWord);
    // 如果存在相同的username就不给存入了
    const existingUser = await db.userInfo.findUnique({
      where: {
        userName: userName,
      },
    });
    if (existingUser) {
      return {
        message: "用户名已经存在",
      };
    }
    // 定义密码的正则
    const passWordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    if (typeof userName !== "string" || userName.length < 8) {
      return {
        message: "用户名需要大于8个字符",
      };
    }
    // 定义验证邮箱的正则
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (typeof email !== "string" || !emailReg.test(email)) {
      return {
        message: "邮箱格式不正确!",
      };
    }

    if (typeof passWord !== "string" || !passWordReg.test(passWord)) {
      return {
        message:
          "密码至少8个字符长，最多20个字符，至少包含一个小写字母和大写字母以及数字",
      };
    }
    // 数据库的增加操作
    await db.userInfo.create({
      data: {
        userName,
        passWord,
        email,
      },
    });
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
  console.log("存入数据库成功！");
  revalidatePath("/");
  redirect("/");
}
