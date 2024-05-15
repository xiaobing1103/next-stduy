// 这样写的动态路由 将会禁用缓存的使用
import { db } from "@/db";
import BlogCom from "@/components/blogCom";
import HomePageImage from "@/components/homePageImage";

export default async function HomePage() {
  return (
    <main>
      <HomePageImage />
      <BlogCom />
    </main>
  );
}
