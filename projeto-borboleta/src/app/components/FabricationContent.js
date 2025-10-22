import Image from 'next/image';

export default function FabricationContent() {
  return (
    <section className="descricao">
      <h3>Como é fabricado o óleo de canabidiol?</h3>
      <article className="conteudo-fabricacao">
        <p>
          Nossos produtos passam por um rigoroso processo de qualidade, desde a seleção de matérias-primas até a fase final de embalagem. Utilizamos tecnologia de ponta e seguimos padrões internacionais para garantir pureza, eficácia e segurança em cada unidade fabricada.
          <br />
          <br />
          Cada etapa é cuidadosamente monitorada por especialistas e submetida a testes laboratoriais. O compromisso com a sustentabilidade também faz parte da nossa missão, utilizando práticas ecologicamente corretas e ingredientes naturais sempre que possível.
        </p>
        <figure>
          <Image 
            className="img-fabrica" 
            src="/fabrica.webp" 
            alt="Imagem da fábrica"
            width={500}
            height={350}
            priority={true} 
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
      </article>
    </section>
  );
}