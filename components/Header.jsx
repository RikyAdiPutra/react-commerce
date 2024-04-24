"use client"
import React from 'react'
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { useStrore } from "@/lib/store";
import Icon from "./Icon"


export default function Header() {
    const cart = useStrore((state) => state.cart)
    return (
        <div className="bg-color-main">
            <div className="wrapper">
                <div className="flex justify-between items-center py-5">
                    <Link href="#" className="text-white text-2xl font-extrabold">MyCommerce</Link>
                    <div className="lg:block hidden">
                        <input type="text" placeholder="Search..." className="py-2 px-3 rounded-lg min-w-[300px]" />
                    </div>
                    <div className="text-3xl text-white relative">
                        {/* <IoMdCart />
                        <div className="absolute text-[10px] top-0 right-0 bg-black text-white w-5 h-5 rounded-full flex items-center justify-center">{cart}</div> */}
                        <Icon>
                            <IoMdCart />
                        </Icon>
                    </div>
                </div>
            </div>
        </div>
    )
}
