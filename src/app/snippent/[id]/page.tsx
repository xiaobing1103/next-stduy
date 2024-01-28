
import { db } from '@/db'
import Link from 'next/link'
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
    // await setTimeout(() => {
    if (!snippets) {
        return <div>自定义notFound方法的</div>
    }
    // }, 2000)

    return (
        <div>
            <div className='flex m-4 justify-between items-center'>
                <h1 className='text-xl font-bold'>{snippets?.title}</h1>
                <div className='flex g'>
                    <Link href={`${snippets.id}/edit`} className='p-2 border rounded'>Edit</Link>
                    <Link href={`${snippets.id}/detele`} className='p-2 border rounded'>Detele</Link>
                </div>
            </div>
            <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
                <code>{snippets.code}</code></pre>
        </div>
    )
}
