"use client"
import Botao from "./components/Botao";
import styles from "./Section.module.css";

export default function HomePage(){
return(
<main>
 
  <section className={styles.container}>
    <article className={styles.texto}>
      <h2>O que é o óleo?</h2>
      <p>
        O óleo de CBD é um extrato derivado do canabidiol, um composto natural presente na planta Cannabis sativa. Diferente do THC, o CBD não possui efeitos psicoativos, sendo utilizado para fins terapêuticos no tratamento de condições como ansiedade, dor crônica, epilepsia e distúrbios do sono. No Brasil, seu uso é regulado pela Anvisa e requer prescrição médica, devendo conter menos de 0,3% de THC em sua composição. Pode ser administrado por via sublingual, tópica ou oral, sempre sob orientação profissional. Embora geralmente bem tolerado, pode causar efeitos colaterais leves como boca seca ou sonolência em alguns casos. Trata-se de uma opção terapêutica complementar com evidências crescentes de eficácia, mas que exige acompanhamento médico adequado.
      </p>
    </article>
    <figure className={styles.imagem}>
      <img src="/hopen_ft_random.jpg" alt="frasco cbd" />
    </figure>
  </section>

  <section className={styles.container2}>
    <figure className={styles.imagem2}>
      <img src="/frasco_cbd.png.png" alt="frasco cbd" />
    </figure>
    <article className={styles.texto2}>
        <p>Principais Efeitos:</p>
    <ul>
        <li>Relaxamento</li>
        <li>Bem-estar</li>
        <li>Ansiolítico</li>
        <li>Energia e disposição</li>
        <li>Analgésico</li>
        <li>Anti-inflamatório</li>
        <li>Neuroprotetor</li>
        <li>Antiemético</li>
    </ul>
    </article>
    <article className={styles.texto3}>
        <p>Principais Indicações:</p>
    <ul>
        <li>Estresse, agressividade e agitação</li>
        <li>Dores e Inflamações em geral</li>
        <li>Doenças Musculares Degenerativas</li>
        <li>Doenças Gastrointestinais</li>
        <li>Psiquiatria: Ansiedade, Depressão, Insônia e distúrbios do sono</li>
        <li>Neurologia: Doença de Parkinson, Mal de Alzheimer, Epilepsia, TEA, Suporte paliativo do paciente com câncer</li>
    </ul>
    </article>
  </section>

 <Botao/>

   
</main>
);
}
