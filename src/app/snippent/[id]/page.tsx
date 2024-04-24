import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions";
interface ShowpageProps {
  params: {
    id: string;
  };
  searchParams: object;
}
export default async function Showpage(props: ShowpageProps) {
  await new Promise((r) => setTimeout(r, 2000));
  const {
    params: { id },
  } = props;
  const snippets = await db.snippet.findFirst({
    where: { id: Number(id) },
  });

  if (!snippets) {
    return notFound;
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippets.id);
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippets?.title}</h1>
        <div className="flex g">
          <Link href={`${snippets.id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="p-2 border rounded">
              删除
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippets.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
}
