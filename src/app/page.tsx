import { db } from "@/db"

export default async function HomePage() {
  const snippets = await db.snippet.findMany()
  const renderSnippets = snippets.map((items) => {
    return <div key={items.id}>
      {items.title}
    </div>
  })
  return (
    <main >
      {renderSnippets }
    </main>

  )
}
