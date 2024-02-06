'use server'

import { db } from "@/db"
import { redirect } from "next/navigation"


export async function editSnippet(id: number, code: string) {
    // await 
    console.log('edit snippet 编辑片段')
    await db.snippet.update({
        where: { id },
        data: { code }
    })
    redirect(`/snippent/${id}`)
}

export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id }
    })
    redirect('/')
}