"use client";
import React from "react";
import BlogList from "./blogList";
import shoes from "@/images/shoes-1.png";
export default function HomePageImage() {
  const blogList = [
    {
      blogImg: shoes,
      blogTitle: "测试博客标题",
      blogContent: [""],
      blogShowContent:
        "Chat2Invest是一款基于ChatGPT的支持多语言的AI投资助手，它能够从基本面、技术面与消息面等多个维度为您提供投资建议。它支持A股与美股共计超过13000只股票与ETF的分析，未来还将支持通过多种投资策略筛选股票。",
    },
  ];
  return (
    <div className="relative bg-gray-100">
      <div className=" max-w-screen-lg mx-auto px-3 pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            日积跬步，以至千里
          </h1>
          <div className="text-xl mt-4 mb-16 font-serif">
            <div className="font-serif"></div>
          </div>
          <div className="flex justify-center ">
            <div className="flex justify-center">
              <img
                src="/hero.svg"
                alt="Hero Image"
                className="mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-3/5 xl:w-4/5"
              />
            </div>
          </div>

          <BlogList />
        </div>
      </div>
    </div>
  );
}
