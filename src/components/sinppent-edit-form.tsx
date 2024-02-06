'use client'
import { Editor } from "@monaco-editor/react"
import type { Snippet } from "@prisma/client"
import { useState } from "react"
import * as actions from "@/actions"

interface SinppentEditFormProps {
    snippent: Snippet
}
export default function SinppentEditForm({ snippent }: SinppentEditFormProps) {

    const [code, setCode] = useState(snippent.code)
    const onchangeFn = (value: string = '') => {
        console.log(value)
    }
    const editSnippetAction = actions.editSnippet.bind(null, snippent.id, snippent.code)

    return (
        <div>
            {snippent.title}
            <Editor
                height='40vh'
                theme="vs-dark"
                language="javascript"
                defaultValue={snippent.code}
                options={{ minimap: { enabled: false } }}
                onChange={onchangeFn}
            />
            <form action={editSnippetAction}>
                <button type="submit" className="p-2 border rounded">保存</button>
            </form>
        </div>
    )
}


