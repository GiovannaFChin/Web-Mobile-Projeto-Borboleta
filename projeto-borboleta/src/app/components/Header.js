"use client"
import Link from 'next/link'
import {usePathname} from "next/navigation"

export default function Header(){
    const pathname=usePathname();
    return(
        <header className="header">
        <h1 className="titulo">Hopen</h1>
        <ul className="menu">
        {pathname !=="/" && (<li><Link href="/" className="menu-link">Home</Link></li>)}
        {pathname !== "/produtos" && (<li><Link href="/produtos" className="menu-link">Produtos</Link></li>)}
        {pathname !== "/fabricacao" && (<li><Link href="/fabricacao" className="menu-link">Fabricação</Link></li>)}
        {pathname !== "/login" && (<li><Link href="/login" className="botao-login">Login</Link></li>)}
        </ul>
        </header>
    );
}