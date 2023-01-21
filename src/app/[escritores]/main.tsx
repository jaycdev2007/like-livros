"use client"
import Image from "next/image";
import { useState } from "react";

export function Main(props:any) {
    const [link,setLink] = useState<string | null>(null)
    return (
        <main>
            <div className="flex flex-col justify-center items-center">
            <div className="bg-img-fundo min-w-full h-[200px] bg-cover flex justify-center bg-no-repeat p-3">
            <Image src={props.escritores.data[0].foto.url} width={160} height={100} alt="foto do escritor" className="rounded-full "/>
            </div>
            <div className="p-3 text-xl">{props.escritores.data[0].name}</div>
            <div className="p-1 font-light">{props.escritores.data[0].bio}</div>
            </div>
            <section className="p-3">
                <h2 className="font-bold text-2xl my-8">Meus livros</h2>
                <div className="flex gap-4 md:flex-col">
                {
                    props.livros[0].map((livro:any) => {
                    return (
                    <div>
                    <Image src={livro.capa.url} width={150} height={150} alt="capa do livro" className="rounded-lg my-3"/>
                    { link === null ?
                    <button className="w-[150px] bg-gray-700 text-white hover:text-gray-700 hover:bg-white p-2 rounded-lg" onClick={async()=> {
                       const linkDoLivro = livro.livro.url
                       const res = await fetch(linkDoLivro)  
                       const file = await res.blob()
                       const url =  URL.createObjectURL(file)
                       setLink(url)
                    }}>Baixar o livro</button>
               : <a href={link} download className="w-[150px] bg-gray-700 text-white hover:text-gray-700 hover:bg-white p-2 rounded-lg" onClick={() => {
                setLink(null)
               }}>Baixe agora</a> }
                </div>
                )
                    })
                 }
                </div>
            </section>
        </main>
    )
}