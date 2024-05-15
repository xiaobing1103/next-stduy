import React from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title?: string;
}
export default function Hero(props: HeroProps) {
  const { imgData, imgAlt, title } = props;
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image fill src={imgData} alt={imgAlt} />
        <div className="pt-48 flex justify-center items-center">
          <h1 className="text-white z-10 foutline-teal-950">{title}</h1>
        </div>
      </div>
    </div>
  );
}
