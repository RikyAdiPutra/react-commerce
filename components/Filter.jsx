import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function FilterData() {
    return (
        <div className="flex items-center gap-4">
            Category
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">All</SelectItem>
                    <SelectItem value="dark">Men's clothing</SelectItem>
                    <SelectItem value="system">Jewelery</SelectItem>
                    <SelectItem value="system">Electronics</SelectItem>
                    <SelectItem value="system">Women's clothing</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}   
