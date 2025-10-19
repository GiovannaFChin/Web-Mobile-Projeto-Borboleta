"use client"
import{usePathname} from "next/navigation"

export default function Header(){
    const pathname=usePathname();
    return(
        <header className="header">
        <h1 className="titulo">Hopen</h1>
        <ul className="menu">
        {pathname !== "/" && (<li><a href="/" className="menu-link">Home</a></li> )}
        {pathname !== "/produtos" && (<li><a href="/produtos" className="menu-link">Produtos</a></li>)}
        {pathname !== "/fabricacao" && (<li><a href="/fabricacao" className="menu-link">Fabricação</a></li>)}
        <li><a href="#" className="botao-login">Login</a></li>
        </ul>
        </header>
    );
}