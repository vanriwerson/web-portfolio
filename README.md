# Portfolio DevWeb (Reboot)

> **Portfólio pessoal desenvolvido do zero**, com foco em **arquitetura limpa**, **componentização**, **animações avançadas** e **internacionalização**.  
> O projeto apresenta meus principais trabalhos, habilidades técnicas e decisões de engenharia aplicadas em um ambiente real de produção.

---

## 🚀 Tecnologias Utilizadas

- [**React 18**](https://react.dev/): Biblioteca para construção de interfaces modernas e declarativas.
- [**Vite**](https://vitejs.dev/): Bundler rápido e eficiente para desenvolvimento frontend.
- [**TypeScript**](https://www.typescriptlang.org/): Tipagem estática para maior segurança e legibilidade do código.
- [**CSS3 (Vanilla)**](https://developer.mozilla.org/docs/Web/CSS): Estilização manual, sem frameworks, com foco em controle total de animações.
- **Git & GitHub**: Versionamento e deploy do projeto.

---

## 📂 Estrutura do Projeto

```
web-portfolio/
│
├── public/ # Arquivos estáticos
├── src/
│ ├── assets/ # Imagens, ícones e recursos visuais
│ ├── components/ # Componentes reutilizáveis da interface
│ ├── contexts/ # Contextos e providers da aplicação
│ ├── helpers/ # Funções auxiliares e mapeamentos
│ ├── hooks/ # Hooks customizados
│ ├── interfaces/ # Tipagens TypeScript
│ ├── translations/ # Arquivos de tradução
│ ├── sections/ # Seções principais do site
│ ├── styles/ # Estilos globais e variáveis CSS
│ ├── App.tsx # Estrutura principal da aplicação
│ └── main.tsx # Ponto de entrada
│
└── package.json # Dependências e scripts
```

---

## ✨ Destaques Técnicos

### 🎞️ Carrossel Animado

- Carrossel de skills **100% customizado**, sem bibliotecas externas.
- Animações inspiradas em efeito de “filme”, utilizando:
  - `keyframes`
  - `transform`
  - `scale`
  - `opacity`
  - `translateX`
- Controle preciso de:
  - Ícone central
  - Ícones adjacentes
  - Entrada, transições e saída suave dos elementos
- Lógica desacoplada:
  - **Hook (`useCarousel`)** controla estado e rotação
  - **Componente** apenas renderiza o estado

📌 Este carrossel foi **refatorado a partir de uma versão mockada**, documentando o processo de evolução e tomada de decisão técnica.

---

### 🌍 Internacionalização (i18n)

- Sistema de internacionalização **implementado do zero**.
- Estrutura baseada em:
  - Objetos tipados (`Translation`)
  - Chaves semânticas (`skills.carouselSummaries.git`)
- Suporte atual:
  - 🇧🇷 Português
  - 🇺🇸 Inglês
  - 🇫🇷 Francês
- Troca de idioma em tempo real via contexto (`useLanguage`)

📌 **Design escalável** para mais idiomas, bastando apenas adicionar os arquivos de tradução e o botão correspondente em `LanguageToggle`.

---

## 🧩 Funcionalidades

- 🌐 Portfólio multilíngue
- 🎞️ Carrossel animado de tecnologias
- 📁 Sessão de projetos com descrições detalhadas
- 📱 Layout responsivo
- 🎨 Animações suaves e controladas

---

## 💻 Rodando o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/vanriwerson/web-portfolio.git
cd web-portfolio
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em ambiente de desenvolvimento

```bash
npm run dev
```

> Aplicação disponível em `http://localhost:5173`

### 4. Build para produção

```bash
npm run build
```

---

## 🚀 Deploy Automatizado (CI/CD)

Este projeto utiliza uma **esteira de deploy automatizada com GitHub Actions**, responsável por **buildar e publicar automaticamente** a aplicação no **GitHub Pages** sempre que houver alterações na branch `main`.

### 🧱 Visão Geral da Esteira

O fluxo de deploy segue os seguintes passos:

1. **Disparo automático**

   - O workflow é executado a cada `push` na branch `main`.

2. **Instalação e build**

   - Instala as dependências do projeto.
   - Executa o build de produção utilizando **Vite**.

3. **Publicação**
   - O conteúdo gerado na pasta `dist/` é publicado automaticamente no **GitHub Pages**.
     🔗 _[**Veja o projeto no ar!**](https://vanriwerson.github.io/web-portfolio/)_

---

### ⚙️ Workflow de Deploy

O arquivo de configuração está localizado em:

```
.github/workflows/deploy.yml
```

Ele utiliza ações oficiais do GitHub para:

- checkout do código
- configuração do Node.js
- build da aplicação
- deploy no GitHub Pages

---

## 👨‍💻 Sobre o Desenvolvedor

[**Bruno Riwerson Silva**](https://www.linkedin.com/in/bruno-riwerson/) é um **desenvolvedor full-stack** com foco em **engenharia de software**, **boas práticas** e **experiência do usuário**.

Atua com:

- **React & TypeScript**
- **Node.js e .NET**
- **Arquiteturas organizadas (MSC / Clean Code)**
- **Bancos de dados relacionais e NoSQL**
- **Testes automatizados**

Busca sempre criar soluções **claras, escaláveis e bem documentadas**, indo além do visual para entregar **qualidade técnica real**.

---

✨ _Este portfólio representa não apenas projetos concluídos, mas a evolução do pensamento técnico, atenção aos detalhes e domínio progressivo do ecossistema frontend._
