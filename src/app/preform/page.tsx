import React from "react";
import cat from "@/images/12.jpg";
import Hero from "@/components/hero";
export default function Preform() {
  return (
    <div>
      <div>
        <Hero imgData={cat} imgAlt="图片占位" title="Preform路由图片标题2" />
      </div>
    </div>
  );
}
