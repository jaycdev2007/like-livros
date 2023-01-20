import { Header } from "./header"
import { Main } from "./main";
import { Footer } from "./footer";


export default async function Escritores() {
    return (
        <>
        <Header />
        <Main />
        <Footer />
        </>
    )
}

async function getLivros() {
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
    console.log(data.data.livros)
    const escritores = await getEscritores()

  const livros = data.data.livros.find((livro:any) => {
    return livros.nomeDoEscritor === escritores.map((escritor:any) => {
        return livro.nameDoEscritor
    })
  })

  console.log(livros)

  return livros
}

async function getEscritores() {
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

    console.log(data.data)
    
    return data.data.escritores
}



export async function generateStaticParams() { 
    const escritores = await getEscritores(); 
    return escritores.map((escritor:any) => ({ escritores: escritor.link, }));
 }