import React from "react";
import Image from "next/image";
import cat from '@/images/12.jpg'
import Hero from "@/components/hero";
export default function Preform() {
    return <div>
        {/* <div className="absolute -z-10 inset-0">
            <Image fill src={cat} alt={"图片占位"}></Image>
            <div>fdsfdsfdsfdsfdsfd</div>
        </div> */}
        {/* <div className="flex flex-row">
            <Image fill src={cat} alt={"图片占位"}></Image>
            <div>fdsfdsfdsfdsfdsfd</div>
        </div> */}
        <div>
            <Hero imgData={cat} imgAlt='图片占位' title='Preform路由图片标题2' />

        </div>


    </div>;
}
