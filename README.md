![Imagem de banner do projeto, pagina inicial](/public/banner-project.png)

## 🧐 O que é esse projeto?

Este projeto se trata de um blog integrado com as issues do github, ou seja, toda issue feita em um determinado repositorio será renderizada nessa aplicação de uma forma agradavel e organizada, foi criado afins de estudo, das tecnologias Nextjs, Stitches e consumo de API.

## 🚀 Tecnologias Utilizadas

- Next.js
- Stitches

## 🪄 Caso queria testar na sua maquina

Primeiro baixe o projeto na sua maquina, utilize os comandos no seu terminal e na pasta que preferir:

```bash
# Se possuir a CLI do github
gh repo clone ximeen/github-blog

# Por https
git clone https://github.com/ximeen/github-blog.git
```

Após projeto baixado, deve instalar as dependencias do projeto, com os comandos a seguir:

```bash
npm install
# ou
yarn
# ou
pnpm install
```

Com isso já pode colocar o projeto para rodar, ( Ele não possui nenhuma variavel local), para rodar o projeto basta escrever no terminal:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Para abrir no navegador para ver os resultados [http://localhost:3000](http://localhost:3000)

## ℹ️ Estrutura

Este projeto tem seus aquivos principais dentro de `src`,
Sua página princial fica dentro de `src/pages` no arquivo `index.tsx`,
Onde nele temos a importação dos componentes necessarios para renderização em tela,
possuimos cerca de `4 componentes` dentro de `src/components`

Neste projeto possui um hook criado manualmente, em `src/hooks` esse hook `useDebounce` serve para definir um timeout para as requisições feitas a API no momento da procura de post no input, com ele definimos que só será feita 1 requisição a cada 500ms, o que da tempo para o usuario digitar, sem isso, cada caracter digitado seria uma requisição.

## 💫 Icones de commits!!

- :package: Nova funcionalidade
- :up: Atualização
- :beetle: Correção de bugs
- :checkered_flag: release
