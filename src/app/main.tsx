import Image from "next/image"
import Link from "next/link"

export function Main(props:any) {
    return (
        <main className="p-8">
            {
                props.escritores.map((escritor:any) => {
                    return (

                    <Link href={`/${escritor.link}`} className="p-3 flex items-center gap-4 hover:bg-gray-700 rounded-lg hover:text-white">
                        <Image src={escritor.foto.url} width={50} height={50} alt="foto do escritor" className="rounded-full"/>
                        <div>{escritor.name}</div>
                    </Link>
                    )
                })
            }
        </main>
    )
}

