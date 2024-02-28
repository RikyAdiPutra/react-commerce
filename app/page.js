"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import FilterData from "@/components/Filter";
import SortData from "@/components/SortData";
import BaseContent from "@/components/basecontent"
import ProductList from "@/components/ProductList"

export default function Home() {
  return (
    <div className="wrapper">
      <BaseContent>
        <div className="my-7">
          <div className="flex items-center justify-between w-full">
            <FilterData />
            <SortData />
          </div>
          <ProductList />
        </div>
      </BaseContent>

    </div>
  );
}