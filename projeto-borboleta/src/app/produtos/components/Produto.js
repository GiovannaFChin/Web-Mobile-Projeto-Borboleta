import Link from "next/link";
import Image from "next/image";
import styles from "./produto.module.css";

const Produto = ({ produto }) => {
  return (
    <Link key={produto.id} href={`/produtos/${produto.id}`} className={styles.link}>
      <Image
        alt={produto.nome}
        src={produto.imagem}
        className={styles.imagemProduto}
        width={200}
        height={200}
      />
      <p>{produto.nome}</p>
      <p className={styles.preco}>{produto.preco}</p>
    </Link>
  );
};
export default Produto;
