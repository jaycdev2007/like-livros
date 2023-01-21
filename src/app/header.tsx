"use client"

import { useAtom } from "jotai"
import Link from "next/link"
import { link } from "./states"

export function Header() {
 const [link1,setLink] = useAtom(link)
    return (
        <header className="min-w-full bg-gray-700 flex justify-between items-center p-3 text-white">
            <h1 className="p-1">
                LIKE livros
            </h1>
            <Link href={`/${link1}`} className="p-1 hover:text-gray-700 hover:bg-white rounded-lg">
              Voltar      
            </Link>
        </header>
    )
}