import Head from 'next/head';
import FabricationContent from '../components/FabricationContent';
import Botao from '../components/Botao';

export default function Fabricacao() {
  return (
    <>
      <Head>
        <title>Fabricação - CBD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <header>
        <h1 className="titulo">Fabricação</h1>
        
      </header>
      
      <FabricationContent />

      
      <Botao />
    </>
  );
}