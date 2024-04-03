import { PrismaClient } from "@prisma/client";

// 创建数据库
export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: "title!",
    code: "const abc = ()=> console.log(123)",
  },
});

db.userInfo.create({
  data: {
    userName: "",
    passWord: "",
    email: "",
  },
});
