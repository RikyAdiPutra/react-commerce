"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ItemProduct(props) {
    return (
        <div className="w-4/12 p-4">
            <div className="border-[1px] border-gray-200 border-solid rounded-lg min-h-6 flex flex-col gap-4">
                <div className="relative">
                    <Image src={`${props.image ? props.image : "/images/no-image.jpg"}`} width={1049} height={1500} alt="" />
                </div>
                <Link href="/" className="bg-slate-400 rounded-lg text-white px-3 py-2 text-center hover:bg-black">{props.link ? props.link : "no link"}</Link>
                <h5 className="text-lg">{props.category ? props.category : "no category"}</h5>
                <h2 className="text-3xl font-bold">{props.title ? props.title : "no description"}</h2>
                <div>star</div>
                <div className="flex justify-between text-lg opacity-75">{props.price ? props.price : "no price"}</div>
            </div>
        </div>
    )
}