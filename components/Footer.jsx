import React from 'react'
import moment from "moment"

export default function Footer() {
    const year = moment().format("YYYY")
    return (
        <div className="bg-gray-800 text-white text-center py-3 text-sm">
            &copy; {year} All Right Reserved. reactcommerce.com
        </div>
    )
}
