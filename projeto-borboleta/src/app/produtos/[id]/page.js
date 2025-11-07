"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Botao from "../../components/Botao";
import styles from "../produtos.module.css";

const products = [
  { id: 'oleo30', name: "Óleo de canabidiol 30ml", price: "R$ 49,90", image: "/oleo.webp.jpeg", description: "Versão compacta ideal para iniciantes. Possui alta pureza e é indicado para uso diário.", alt: "Óleo de canabidiol 30ml" },
  { id: 'oleo60', name: "Óleo de canabidiol 60ml", price: "R$ 89,90", image: "/oleo.webp.jpeg", description: "Excelente custo-benefício. Ideal para quem já utiliza CBD regularmente.", alt: "Óleo de canabidiol 60ml" },
  { id: 'oleo100', name: "Óleo de canabidiol 100ml", price: "R$ 129,90", image: "/oleo.webp.jpeg", description: "Versão premium para tratamentos prolongados. Garantia de qualidade Hopen.", alt: "Óleo de canabidiol 100ml" },
];

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
  const produtoEncontrado = products.find((p) => p.id === id);
  setProduto(produtoEncontrado);
}, [id]);

  if (!produto) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Produto não encontrado.</p>;
  }

  return (
    <section className="body">
      <header>
        <h1 className="titulo">{produto.name}</h1>
      </header>

      <main className={styles.containerProdutos}>
        <article className={styles.item}>
          <Image
            src={produto.image}
            alt={produto.alt}
            width={400}
            height={400}
            style={{ borderRadius: "10px" }}
          />
          <h3>{produto.name}</h3>
          <p><strong>{produto.price}</strong></p>
          <p style={{ margin: "20px", textAlign: "justify" }}>{produto.description}</p>
          <Link href="/produtos">
            <button className={styles.botaoCompra}>Voltar aos produtos</button>
          </Link>
        </article>
      </main>

      <Botao />
    </section>
  );
}