#  Projeto — Hopen CBD

## 🌱 Sobre o Projeto
O site **Hopen** tem como objetivo oferecer informações claras e confiáveis sobre o óleo de CBD, quebrando **preconceitos e tabus**, além de disponibilizar produtos de qualidade com uma navegação simples, intuitiva e acessível.

---

# Migração para Next.js

O projeto está sendo migrado para **Next.js**, com foco em performance e escalabilidade. Essa migração traz benefícios como:

- **Performance aprimorada** com renderização mais rápida  
-  **Arquitetura moderna baseada em componentes**  
-  **Manutenção e atualizações simplificadas**  
-  Suporte nativo a **SSR (Server-Side Rendering)** e **SSG (Static Site Generation)**  
-  Integração facilitada com APIs e novas funcionalidades  

###  Vantagens do React.js na aplicação
- Criação de **componentes reutilizáveis**, facilitando manutenção  
- **Virtual DOM** para renderizações rápidas  
- Projeto mais **organizado e claro**  
- Facilita a **escalabilidade**  
- Ideal para interfaces **interativas e de fácil manutenção**

---

# Público-Alvo

O site é destinado a adultos que buscam:

- Melhorar seu bem-estar geral  
- Alternativas naturais de cuidado com a saúde  
- Informações confiáveis e produtos seguros relacionados ao CBD  

---

# Tecnologias utilizadas

- **Next.js** — Framework React moderno  
- **React.js** — Interfaces dinâmicas e modulares  
- **HTML, CSS, JavaScript** — Estrutura e comportamento  
- **Node.js / NPM** — Ambiente e gerenciamento de pacotes  
- **Vercel** — Plataforma de deploy e hospedagem  

---

# Estrutura do Projeto

## 1. **Componentes Principais (Layouts)**

### `RootLayout` — `app/layout.js`
Responsável pela estrutura global do site:

- Inclui **Header** e **Footer** em todas as páginas  
- Define fontes globais (Poppins, Nunito) e metadata para SEO  
- Envolve as páginas em `<body>` e `<main>`  
- Integra o componente **DarkModeToggle**

### `Header` e `Footer`
- Componente de navegação principal e rodapé  
- Estilizados via CSS global  

---

## 2. **Componentes Funcionais (Conteúdo)**

### `HomePage` — `app/page.js`
- Utiliza `"use client"` para permitir interações diretas  
- Organiza conteúdo em seções com textos e imagens  
- Apresenta **Efeitos** e **Indicações** do CBD  
- Inclui o componente **Botao** (“Voltar ao Topo”)  

### `DarkModeToggle`
- Controla o modo escuro  
- Aplica dinamicamente a classe `.modo-escuro` ao `<body>`

### `Botao`
- Gerencia o botão flutuante “Voltar ao Topo”  
- Mostra/oculta automaticamente conforme o scroll  

---

## 3. **API (Em Andamento)**

O projeto está passando pela implementação de uma **API**, 

Atualmente, o desenvolvimento da API está **em andamento**, sendo estruturada para garantir segurança, desempenho e escalabilidade.

---

## 4. **Estilização**

### Estilos Globais — `app/globals.css`
- Estilos básicos (html, body)  
- Layout de cabeçalho, rodapé e áreas principais  
- Regras do **modo escuro**  
- Estrutura visual padrão do site  

### CSS Modules — `Section.module.css`
- Estilos específicos para seções da Home  
- Escopo isolado para evitar conflitos  
- Controle local de layouts (texto, imagens, espaçamentos)  

---

# Funcionalidades do Site

## **Página Inicial**
- Conteúdo informativo sobre o CBD  
- Menu de navegação  
- Botão **“Voltar ao Topo”**  

## **Página Produtos**
- Catálogo com nome, preço e botão de compra  
- Alertas ao adicionar itens ao carrinho  
- Roteamento dinâmico para detalhes individuais  

## **Página Fabricação**
- Explicação sobre o processo de criação do CBD  
- Layout limpo e responsivo  

## **Página de Login**
- Formulário com campos obrigatórios  
- Alertas de confirmação  
- Design responsivo e moderno  

## **Interatividade **
- Modo escuro com preferência salva  
- Botão “Voltar ao Topo” automático  
- Alertas interativos para ações do usuário  

---

# Como Executar o Projeto

Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
