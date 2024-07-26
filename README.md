# Web Shop (Backend) - NestJS

## Descrição

Este projeto é uma aplicação de estudo que simula uma loja online utilizando o framework [NestJS](https://nestjs.com/). O objetivo é entender e aplicar os conceitos fundamentais do NestJS, incluindo módulos, controladores, serviços e integração com banco de dados.

## Funcionalidades

- **Gerenciamento de Produtos**: Adicionar, listar, atualizar e remover produtos.
- **Gerenciamento de Usuários**: Registro de usuários, autenticação e autorização.
- **Carrinho de Compras**: Adicionar e remover produtos no carrinho.
- **Pedidos**: Criação e visualização de pedidos.

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/): Framework para construção de aplicações Node.js escaláveis e eficientes.
- [TypeScript](https://www.typescriptlang.org/): Linguagem de programação que estende o JavaScript, adicionando tipagem estática.
- [TypeORM](https://typeorm.io/): ORM para execução de operações em banco de dados.
- [PostgreSQL](https://www.postgresql.org/): Sistema de gerenciamento de banco de dados relacional.

## Requisitos

- [Node.js](https://nodejs.org/en/download/) (versão 12.x ou superior)
- [npm](https://www.npmjs.com/get-npm) (versão 6.x ou superior) ou [yarn](https://yarnpkg.com/getting-started/install)
- [PostgreSQL](https://www.postgresql.org/download/) (versão 11 ou superior)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/felipebufelli/web-shop-backend.git
cd web-shop-backend
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=nome-do-banco
```

4. Execute as migrações do banco de dados:

```bash
npm run typeorm migration:run
# ou
yarn typeorm migration:run
```

## Executando o Projeto

Para iniciar a aplicação, execute o comando:

```bash
npm run start
# ou
yarn start
```

A aplicação estará disponível em [http://localhost:8080](http://localhost:8080).
