"use client"

import { useAtom } from "jotai"
import Link from "next/link"
import { link } from "./states"

export function Header() {
 const [link1,setLink] = useAtom(link)
    return (
        <header className="min-w-full bg-gray-700 flex justify-end p-3 text-white">
            <Link href={`/${link1}`}>
              Voltar      
            </Link>
        </header>
    )
}