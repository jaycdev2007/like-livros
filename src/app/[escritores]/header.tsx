"use client"
import Link from "next/link"
export function Header(props:any) {
    return (
        <header className="min-w-full bg-gray-700 p-3 text-white flex justify-end">
            <Link href="/">
            Outros escritores
            </Link>
        </header>
    )
}