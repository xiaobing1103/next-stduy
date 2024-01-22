import React from "react";
import Link from "next/link";
export default function Header() {
    return (
        <div className="w-full absolute text-black z-10">
            <nav className="contaienr relative flex flex-warp items-center justify-between">
                <Link href="/" className="font-bond text-3xl">Home</Link>
                <div className="space-x-4 text-xl">
                    <Link href="detail">detail</Link>
                    <Link href="preform">preform </Link>
                    <Link href="goods">goods </Link>
                </div>
            </nav>
        </div>
    );
}
