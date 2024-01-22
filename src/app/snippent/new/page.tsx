import React from 'react'
import { db } from '@/db'
import { redirect } from 'next/navigation';
export default function SnippentCreatePage() {
    async function createSnippet(formData: FormData) {
        // 必须链接数据库服务
        'use server';
        // 确认用户输入的有效的输入值
        const title = formData.get('title') as string
        const code = formData.get('code') as string
        // 数据库的增加操作
        const snippet = await db.snippet.create({
            data: {
                title,
                code
            }
        })
        console.log(snippet)
        // 提交后返回home页面
        redirect('/')
    }
    return (
        <form action={createSnippet}>
            <h3 className='font-bold m-3'>Create a Snippet</h3>
            <div className='flex flex-col gap-4'>
                <div className="flex gap-4">
                    <label className='w-12' htmlFor="title">Title</label>
                    <input type="text" name='title' className='border rounded p-2 w-full' id='title' />
                </div>
                <div className="flex gap-4">
                    <label className='w-12' htmlFor="code">Code</label>
                    <textarea name='code' className='border rounded p-2 w-full' id='code' />
                </div>
                <button type='submit' className='rounded p-2 bg-blue-200'>创建</button>
            </div>
        </form>
    )
}
