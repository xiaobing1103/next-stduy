import { PrismaClient } from "@prisma/client";


export const db = new PrismaClient()


db.snippet.create({
    data: {
        title: 'title!',
        code: 'const abc = ()=> console.log(123)'
    }
})