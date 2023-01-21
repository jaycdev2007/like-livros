"use client"
import Link from "next/link"
export function Header(props:any) {
    return (
        <header className="min-w-full bg-gray-700 p-3 text-white flex justify-between items-center">
            <h1>LIKE livros</h1>
            <Link href="/" className="p-1 hover:text-gray-700 hover:bg-white rounded-lg">
            Outros escritores
            </Link>
        </header>
    )
}