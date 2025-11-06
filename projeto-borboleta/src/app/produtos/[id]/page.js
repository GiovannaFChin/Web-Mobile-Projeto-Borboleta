import Image from "next/image";
import Link from "next/link";
import styles from "./produtoDetalhe.module.css";

export default function ProdutoPage({ params }) {
  const dadosProdutos = {
    oleo30: {
      nome: "Óleo de canabidiol 30ml",
      descricao: "Versão compacta ideal para iniciantes. Possui alta pureza e é indicado para uso diário.",
      imagem: "/oleo.webp.jpeg",
      preco: "R$ 49,90",
    },
    oleo60: {
      nome: "Óleo de canabidiol 60ml",
      descricao: "Excelente custo-benefício. Ideal para quem já utiliza CBD regularmente.",
      imagem: "/oleo.webp.jpeg",
      preco: "R$ 89,90",
    },
    oleo100: {
      nome: "Óleo de canabidiol 100ml",
      descricao: "Versão premium para tratamentos prolongados. Garantia de qualidade Hopen.",
      imagem: "/oleo.webp.jpeg",
      preco: "R$ 129,90",
    },
  };

  const produto = dadosProdutos[params.id];
  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }
  
  return (
    <section className={styles.sectionMain}>
      <h2>{produto.nome}</h2>
    
      <Image
        src={produto.imagem}
        alt={produto.nome}
        width={400}
        height={400}
        className={styles.imagem}
      />
        
      <p className={styles.preco}>{produto.preco}</p>
      <p className={styles.descricao}>{produto.descricao}</p>
      <Link href="/produtos" className={styles.botaoVoltar}>
        Voltar aos produtos
      </Link>
    </section>
  );
}
