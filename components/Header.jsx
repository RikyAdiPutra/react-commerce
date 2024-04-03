"use client"

import React from "react"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";
import { useStore } from "@/lib/store";


export default function Header() {
    const cart = useStore((state) => state.cart)
    return (
        <div className="bg-gradient-mojito">
            <div className="wrapper">
                <div className="flex justify-between py-4 items-center gap-2">
                    <div><Link href="#" className="text-white text-2xl font-extrabold">MyCommerce</Link></div>
                    <input placeholder="Seacrh.." className="py-2 px-4 rounded flex-1 max-w-sm text-black" />
                    <div className="cursor-pointer text-white relative">
                        <IoCartOutline />
                        <span className="absolute w-[20px] h-[20px] rounded-lg -top-2 -right-2 bg-yellow-300 flex justify-center items-center">{cart}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}