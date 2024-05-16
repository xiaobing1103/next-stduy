"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function BlogList() {
  const router = useRouter();
  return (
    <div className="flex flex-col relative height-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none overflow-visible h-auto lg:h-[240px] dark:border-transparent">
      <div className="flex relative height-auto text-foreground box-border bg-content1 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-large transition-transform-background motion-reduce:transition-none overflow-visible h-auto lg:h-[240px] dark:border-transparent">
        <div className="flex  justify-between w-full p-3 flex-auto place-content-inherit align-items-inherit h-auto break-words text-left subpixel-antialiased relative  md:flex-row md:items-center gap-4 md:gap-9 overflow-visible">
          {/* <Image
            alt="Shoes theme example"
            src={shoes}
            width={200}
            height={200}
          /> */}
          <div className="flex flex-col justify-center transition-all h-[200px]">
            <div className="relative flex flex-wrap items-baseline">
              <h1 className="relative w-full flex-none text-xl font-semibold text-foreground">
                博客标题
              </h1>
              <p className="my-2 w-full text-base text-default-500">博客描述</p>
              <p className="relative text-lg font-semibold text-foreground">
                2024/5/16
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-4 min-w-20 h-10 gap-2 rounded-medium [&amp;>svg]:max-w-[theme(spacing.8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none shadow-lg shadow-primary/40 bg-primary text-primary-foreground data-[hover=true]:opacity-hover text-sm font-normal"
                type="button"
                onClick={() => router.push("/blog/1")}
              >
                编辑博客
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
