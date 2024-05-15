import { db } from "@/db";
import Link from "next/link";
import { Button } from "@nextui-org/button";
// 这样写的动态路由 将会禁用缓存的使用
// export const dynamic = "force-dynamic";
export default async function HomePage() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((items) => {
    return (
      <Link
        key={items.id}
        className="flex justify-between items-center p-2 border rounded"
        href={`/snippent/${items.id}`}
      >
        {items.title}
        <div>查看详情</div>
      </Link>
    );
  });
  return (
    <main>
      {/* <header className="flex bg-gray-600 ">头部</header> */}

      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">代码列表</h1>
        <Link href={"/snippent/new"}>
          <Button>创建新的</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderSnippets}</div>
    </main>
  );
}
