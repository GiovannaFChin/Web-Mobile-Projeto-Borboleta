"use client"
import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import Botao from '../components/Botao';
import styles from "./produtos.module.css";
import Link from "next/link";

const products = [
  {
    id: 'oleo30',
    name: 'Óleo de canabidiol 30ml',
    price: 'R$ 49,90',
    image: '/oleo.webp.jpeg',
    alt: 'Óleo de canabidiol 30ml'
  },
  {
    id: 'oleo60',
    name: 'Óleo de canabidiol 60ml',
    price: 'R$ 89,90',
    image: '/oleo.webp.jpeg',
    alt: 'Óleo de canabidiol 60ml'
  },
  {
    id: 'oleo100',
    name: 'Óleo de canabidiol 100ml',
    price: 'R$ 129,90',
    image: '/oleo.webp.jpeg',
    alt: 'Óleo de canabidiol 100ml'
  },
];

export default function Home() {

  const showAlert = (mensagem) => {
    alert(mensagem);
  };

  return (
    <section className="body">
      <Head>
        <title>Produtos - CBD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <h1 className="titulo">
          <strong>Produtos</strong>
        </h1>
        
        <article className={styles.textoProduto}>
          <p>
            <strong>Descubra os Benefícios do Óleo de Canabidiol (CBD)! 🌿💚</strong>
            <br />
            ✅ Reduz o estresse e a ansiedade
            <br />
            ✅ Alivia dores musculares e crônicas
            <br />
            ✅ Melhora a qualidade do sono
            <br />
            ✅ Ajuda no equilíbrio do sistema nervoso
            <br />
            <br />
            <br />
            <strong>Nosso óleo de CBD é 100% natural, testado em laboratório e livre de THC, garantindo apenas os benefícios sem efeitos psicoativos.</strong>
          </p>
        </article>
      </header>

      <main className={styles.containerProdutos} >
        <section className={styles.itens} >
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}   
              name={product.name}
              price={product.price}
              image={product.image}
              alt={product.alt}
               showAlert={showAlert}
            />
          ))}
        </section>
      </main>
      
   
      <Botao />
    
    </section>
  );
}
