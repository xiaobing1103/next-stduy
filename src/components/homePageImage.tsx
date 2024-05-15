"use client";
import React from "react";
import HeroImage from "@/images/hero.svg";
import Image from "next/image";
export default function HomePageImage() {
  return (
    <div className="relative h-screen">
      <div className="max-w-screen-lg mx-auto px-3 pt-20 pb-32">
        <header className="text-center">
          <h1 className="text-3xl md:text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            日积跬步，以至千里
          </h1>
          <div className="text-xl mt-4 mb-16 font-serif">
            <div className="font-serif"></div>
          </div>
          <div className="flex justify-center">
            <div className="mx-auto lg:w-3/5 sm:w-full">
              <HeroImage />
              <Image src={HeroImage} alt="2356+" />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
