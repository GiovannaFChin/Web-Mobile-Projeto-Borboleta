import Head from 'next/head';
import Navbar from '../components/Navbar';
import FabricationContent from '../components/FabricationContent';
import DarkModeToggle from '../components/DarkModeToggle'; 
import ScrollToTopButton from '../components/ScrollToTopButton'; 

export default function Fabricacao() {
  return (
    <>
      <Head>
        <title>Fabricação - CBD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <header>
        <h1 className="titulo">Fabricação</h1>
        <Navbar />
      </header>
      
      <FabricationContent />

      <DarkModeToggle />
      <ScrollToTopButton />
    </>
  );
}