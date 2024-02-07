'use client'
import React from 'react'
// import { db } from '@/db'
// import { redirect } from 'next/navigation';
import * as actions from '@/actions'
import { useFormState } from 'react-dom'
export default function SnippentCreatePage() {
    const [fromState, action] = useFormState(actions.createSnippent, { message: '' })
    // async function createSnippet(formData: FormData) {
    //     // 必须链接数据库服务
    //     'use server';
    //     // 确认用户输入的有效的输入值
    //     const title = formData.get('title') as string
    //     const code = formData.get('code') as string
    //     // 数据库的增加操作
    //     const snippet = await db.snippet.create({
    //         data: {
    //             title,
    //             code
    //         }
    //     })
    //     console.log(snippet)
    //     // 提交后返回home页面
    //     redirect('/')
    // }
    // const createSnippent = actions.createSnippent.bind(null, formData)
    return (
        <form action={action}>
            <h3 className='font-bold m-3'>创建片段</h3>
            <div className='flex flex-col gap-4'>
                <div className="flex gap-4">
                    <label className='w-12' htmlFor="title">标题</label>
                    <input type="text" name='title' className='border rounded p-2 w-full' id='title' />
                </div>
                <div className="flex gap-4">
                    <label className='w-12' htmlFor="code">Code</label>
                    <textarea name='code' className='border rounded p-2 w-full' id='code' />
                </div>
                {fromState.message && <div className="my-2 p-2 bg-red-200 border rounded border-red-400 ">{fromState.message}</div>}
                <button type='submit' className='rounded p-2 bg-blue-200'>创建</button>
            </div>
        </form>
    )   
}
