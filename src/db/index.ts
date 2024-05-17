import { PrismaClient } from "@prisma/client";

// 创建数据库
export const db = new PrismaClient();
async function main() {
  const user = await db.snippet.create({
    data: {
      title: "title!",
      code: "const abc = ()=> console.log(123)",
    },
  });
  console.log(user);
}

// main()
//   .then(async () => {
//     await db.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await db.$disconnect();
//     process.exit(1);
//   });

// db.snippet.create({
//   data: {
//     title: "title!",
//     code: "const abc = ()=> console.log(123)",
//   },
// }); 

// db.userInfo.create({
//   data: {
//     userName: "",
//     passWord: "",
//     email: "",
//   },
// });
