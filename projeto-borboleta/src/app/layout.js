import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkModeToggle from "./components/DarkModeToggle";
import "./globals.css";
import { Poppins, Nunito } from "next/font/google";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata={
  title:"Hopen"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>
        <Header />
        <main>{children}</main>
        <DarkModeToggle/>
        <Footer />
      </body>
    </html>
  );
}