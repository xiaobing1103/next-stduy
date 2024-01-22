
import { db } from '@/db'
import { notFound } from 'next/navigation'
interface ShowpageProps {
    params: {
        id: string
    }
    searchParams: object
}
export default async function Showpage(props: ShowpageProps) {
    const { params: { id } } = props
    const snippets = await db.snippet.findFirst({
        where: { id: Number(id) }
    })
    console.log(snippets)
    if (!snippets) {
        return notFound()
    }
    return (
        <div>{snippets.title}</div>
    )
}
