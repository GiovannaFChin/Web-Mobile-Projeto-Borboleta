"use client"
import {useState, useEffect} from "react"
import styles from "../ButtonTopo.module.css"

export default function Botao(){
    /* controla se o botao aparece na tela ou nao*/
    const [visivel, setVisivel]=useState(false)

   useEffect(() => {
    const checarScroll = () => setVisivel(window.scrollY > 300);
    window.addEventListener("scroll", checarScroll);
    return () => window.removeEventListener("scroll", checarScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${styles.button} ${visivel ? styles.show : ""}`}
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}