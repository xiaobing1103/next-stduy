'use client'
import type { Snippet } from "@prisma/client"

interface SinppentEditFormProps {
    snippent: Snippet
}
export default function SinppentEditForm({ snippent }: SinppentEditFormProps) {
    return (
        <div>客户端组件 {snippent.title}</div>
    )
}
