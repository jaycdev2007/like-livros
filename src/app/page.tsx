"use client"

import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { useState } from "react"

export default function Home () {
    const [escritores,setEscritores] = useState()
    getData().then(
        (res) => {
            setEscritores(res)
        }
    )
    return (
        <>
        <Header />
        <Main escritores={escritores}/>
        <Footer />
        </>

    )
}

async function getData() {
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
        `}
        )
    }
    )
    const data = await res.json()

    return data.data.escritores
}
