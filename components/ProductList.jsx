"use client"

import React, { useState } from 'react'
import ItemProduct from "@/components/itemProduct"
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/services";



export default function ProductList() {
    const getQuery = async () => {
        return await getData("/products")
    }

    const query = useQuery({
        queryKey: ["product"],
        queryFn: getQuery
    })
    if (query.isLoading) {
        return (
            <div className="wrapper relative flex justify-center mt-10">
                <div className="animate-pulse w-full flex gap-4">
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                    <div className="rounded-sm bg-slate-200 h-[300px] w-full "></div>
                </div>
            </div>
        )
    }

    if (query.error) {
        return (
            <div className="wrapper">
                <div className="bg-red-500 text-white text-center p-5 my-7">Error Network</div>
            </div>
        )
    }

    const products = query.data.data
    console.log(products)
    return (
        <div className="flex flex-wrap -mx-4 bg-gradient-malibu">
            {/* <ItemProduct category="Mens" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="109.95" link="Buy Now" />
            <ItemProduct category="Mens" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="109.95" link="Buy Now" image="/images/prod.jpg" />
            <ItemProduct category="Mens" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="109.95" link="Buy Now" image="/images/prod.jpg" />
            <ItemProduct category="Mens" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="109.95" link="Buy Now" image="/images/prod.jpg" />
            <ItemProduct category="Mens" title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" price="109.95" link="Buy Now" image="/images/prod.jpg" /> */}

            {/* 
            {
                products.map(item => (
                    <ItemProduct
                        title={item.title}
                        price={item.price}
                        src={item.image}
                        category={item.category}
                        link="Buy now"
                    />
                ))
            } */}
            {
                products.map(item => {
                    return (
                        <ItemProduct category={item.category} title={item.title} price={`$ ${item.price}`} link={`/products/${item.id}`} image={item.image} rate={parseInt(`${item.rating.rate}`)} />
                    )
                })
            }
        </div>
    )
}
