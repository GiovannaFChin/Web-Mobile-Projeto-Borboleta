"use client"
import {useState, useEffect} from "react"
import styles from "../ButtonTopo.module.css"

export default function Botao(){
  
    const [visivel, setVisivel]=useState(true)

   useEffect(() => {
    const checarScroll = () => {
      const scrolled =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      setVisivel(scrolled > 300);
    };

    window.addEventListener("scroll", checarScroll);
    return () => window.removeEventListener("scroll", checarScroll);
  }, []);


  const scrollTop = () => {
    const html = document.documentElement;
    const body = document.body;

    html.scrollTo({ top: 0, behavior: "smooth" });
    body.scrollTo({ top: 0, behavior: "smooth" });
    
    const scrollContainers = document.querySelectorAll("main, section, div");

    scrollContainers.forEach((el) => {
      if (el.scrollTop > 0) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  };

  return (
    <button
      onClick={scrollTop}
      className={`${styles.button} ${visivel ? styles.show : ""}`}
      title="Voltar ao topo"
    >
      ↑
    </button>
  );
}