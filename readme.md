# API - RepoProvas

<p align="center">
<img src='https://wakatime.com/badge/user/97595b44-027b-4695-a588-53e9c884f7e2/project/ffe4cc4c-96b5-444f-8156-13c90f1896e5.svg'>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yaratavares/RepoProvas">
<a href="https://github.com/yaratavares/API-RepoProvas/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/yaratavares/API-RepoProvas">
  </a>
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"></p>
</p>

<p align="center">
 <a href="#projeto">Projeto</a> •
  <a href="#objetivo">Objetivo</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#layout">Layout</a> • 
 <a href="#como-executar">Como executar</a> • 
 <a href="#autora">Autora</a> • 
 <a href="#licença">Licença</a>
</p>

## 💻 Projeto

No RepoProvas qualquer pessoa pode procurar provas antigas de suas disciplinas e professores ou enviar provas antigas para ajudar os calouros.

Back-end projetado para um sistema de compartilhamento de provas entre estudantes.

---

## ✨ Objetivo

O principal objetivo do projeto foi aplicar o conceito das migrações e ORM e para isso utilizei o [Prisma](https://www.prisma.io/), usando um banco de dados relacional. Para um código mais limpo e organizado utilizei Layered Architecture (Routers, Controllers, Services e Repositories) e Typescript no desenvolvimento, para um código mais limpo e organizado.

---

## ⚙️ Funcionalidades

- [x] Os usuários tem acesso a plataforma web enviando:

    - [x] email
    - [x] senha

- [x] Dentro da aplicação os usuários com token de autenticação podem:

    - [x] visualizar provas por disciplinas
    - [x] visualizar provas por instrutores
    - [x] filtrar provas por nome de disciplina ou instrutor
    - [x] adicionar uma nova prova
    - [x] clicar na prova e contabilizar o seu view

---

## 🚀 Como executar o projeto

Este projeto está dividido em duas partes:

1. Backend (este repositório)
2. [Frontend](https://github.com/yaratavares/API-RepoProvas) 🧭

💡 O front-end não precisa que o back-end esteja rodando para funcionamento da aplicação.

Para ver as funcionalidades basta acessar o último deploy ou clicar no link da [página](repo-provas-lilac.vercel.app).

### Pré-requisitos

Para rodar a aplicação na sua máquina, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [PostgreSQL](https://www.postgresql.org/download/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando a aplicação web (Back-end)

```bash
# Clone este repositório
$ git clone git@github.com:yaratavares/API-RepoProvas.git
# Acesse a pasta do projeto no terminal/cmd e instale as dependências
$ npm insall
# Será necessário criar uma pasta .env como segue o modelo do arquivo .env.example
# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# O servidor iniciará na porta:5000 - acesse http://localhost:5000
```
---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### Back-end

<p>
<a src="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /></a>
<a src="https://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/></a>
<a src="https://www.postgresql.org/"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/></a>
<a src='https://www.prisma.io/docs/'>
<img src='https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white'>
</a>
<a src="https://https://day.js.org/"><img src="https://img.shields.io/badge/Day.js-F35C4B?style=for-the-badge"/></a>
<a src="https://joi.dev/"><img src="https://img.shields.io/badge/joi-0A7EFA?style=for-the-badge"/></a>
<a src="https://github.com/expressjs/cors"><img src="https://img.shields.io/badge/cors-000000?style=for-the-badge"/></a>
<a src="https://github.com/motdotla/dotenv"><img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge"/></a>
<a src='https://jestjs.io/docs/next/getting-started'>
<img src='https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white'/>
</a>
</p>

> Veja o arquivo [package.json](./package.json)

### Front-end

<p >
<a src="https://reactjs.org/">
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="badge react"/> </a><a src="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/></a> <a src="https://styled-components.com/"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>
<a src="https://axios-http.com/"><img src="https://img.shields.io/badge/Axios-6F63E7?style=for-the-badge"/></a>
<a src='https://mui.com/pt/'>
<img src='https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white'>
</a> 
<a src="https://mhnpd.github.io/react-loader-spinner/"><img src="https://img.shields.io/badge/React Loader Spinner-000000?style=for-the-badge"/></a> <a src="https://react-hot-toast.com/"><img src="https://img.shields.io/badge/React Hot Toast-482307?style=for-the-badge"/></a> 
<a src="https://reactjs.org/">
<img src="https://img.shields.io/badge/React Icons-F4F5F7?style=for-the-badge&logo=react&logoColor=EA4B64" alt="badge react"/> </a>
<a src='https://docs.cypress.io/'>
<img src ='https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white'/>
</a>
</p>

> Veja o arquivo [package.json](https://github.com/yaratavares/RepoProvas/blob/main/package.json)

---

## 🧜‍♀️ Autora

<a href="https://www.linkedin.com/in/yaracristinatavares/" >
 <img style="clip-path: circle()" src="https://avatars.githubusercontent.com/u/91642311?v=4" width="100px;" alt="foto"/>
 <p>Yara Tavares 🚀</p>
</a>

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).