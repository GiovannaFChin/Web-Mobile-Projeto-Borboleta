"use client";
import { useState } from "react";
import Head from "next/head";

import Botao from "../components/Botao";
import styles from "./Login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMensagem("Login realizado com sucesso!");
    setTimeout(() => {
      window.location.href = "/"; 
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Login - Hopen</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <h1 className="titulo">Login</h1>
        <Navbar />
      </header>

      <main className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Bem-vindo de volta!</h2>

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
              
          <button type="submit">Entrar</button>
          {mensagem && (
            <p
              className={
                mensagem.includes("sucesso")
                  ? styles.sucesso
                  : styles.erro
              }
            >
              {mensagem}
            </p>
          )}
        </form>
      </main>
      
      <Botao />
    </>
  );
}


