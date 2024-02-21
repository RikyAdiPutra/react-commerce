import React from "react"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";


export default function Header() {
    return (
        <div className="bg-color-main">
            <div className="wrapper">
                <div className="flex justify-between py-4 items-center gap-2">
                    <div><Link href="#" className="text-white text-2xl font-extrabold">MyCommerce</Link></div>
                    <input placeholder="Seacrh.." className="py-2 px-4 rounded flex-1 max-w-sm text-black" />
                    <div className="cursor-pointer"><IoCartOutline /></div>
                </div>
            </div>
        </div>
    )
}