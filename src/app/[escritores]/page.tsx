"use client"
import { Header } from "./header"
import { Main } from "./main";
import { Footer } from "./footer";
import { link  } from "../states";
import { useAtom } from "jotai"
import { useState } from "react";


async function getLivros(link:any) {
   const res = await fetch('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cld4wsyv90p4j01tdcyai601e/master', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: `
         query MyQuery {
              livros {
                  livro {
                    url
                    }
                    capa {
                        url
                    }
                    nomeDoEscritor
            }
        }
        `,})})
    const data = await res.json()

  const escritores = await getEscritores(`${link}`)

  const livros = escritores.data.map((escritor:any) => {
    return data.data.livros.filter((livro:any) => {
        return livro.nomeDoEscritor === escritor.name
    })
  })

  return livros
}

async function getEscritores(link:string) {
    const res = await fetch('https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cld4wsyv90p4j01tdcyai601e/master', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        query: `
        query MyQuery {
              escritores {
                  foto {
                 url
                  }
                 link
                  name
                 bio
            }
        }
        `})})
    const data = await res.json()

    return {
         data: data.data.escritores.filter((escritor:any) => {
        return escritor.link === link
    }),
       links: data.data.escritores
}
}



export async function generateStaticParams() { 
    const escritores = await getEscritores(""); 
    return escritores.links.map((escritor:any) => ({ escritores: escritor.link, }));
 }

 export default  function Escritor({ params}:any ) {
    const [livros,setLivros] = useState()
    const [escritores,setEscritores] = useState()
    getLivros(`${params.escritores}`).then(
        (res:any) => {
            setLivros(res)
        }
    )
    getEscritores(`${params.escritores}`).then(
        (res:any) => {
            setEscritores(res)
        }
    )
    const [link1, setLink] = useAtom(link)
    setLink(`${params.escritores}`)
    if(!escritores) {
        return null
    }else if(!livros) {
        return null
    }

    return (
        <>
          <Header />
          <Main livros={livros} escritores={escritores} />
          <Footer />
        </>
    )
 }