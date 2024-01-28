import { db } from "@/db"
import Link from "next/link"

export default async function HomePage() {
  const snippets = await db.snippet.findMany()
  const renderSnippets = snippets.map((items) => {
    return <Link key={items.id}
      className='flex justify-between items-center p-2 border rounded'
      href={`/snippent/${items.id}`}
    >
      {items.title}
      <div>view</div>
    </Link>
  })
  return (
    <main >
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">片段</h1>
        <Link href={'/snippent/new'} className="border p-2  rounded">创建新的</Link>
      </div>
      <div className="flex flex-col gap-2">{renderSnippets}</div>
    </main>
  )
}
