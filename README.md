# API REST

API de cadastro de usuários com Node.js e Firebase.

## Descrição

O objetivo desse projeto é para fins de um processo seletivo da empresa SuperFrete.
Esta API foi desenvolvida em Node.js com o framework Express que utiliza o Firebase para cadastrar usuários no Firestore.

## Como usar

### Pré-requisitos

Antes de executar a aplicação, você deve ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js
- Firebase CLI

### Instalação

1. Clone este repositório em seu computador `https://github.com/CarlosFeliipe/teste-firebase-trigger.git`
2. Instale as dependências executando o comando `npm install`

### Conexão com o Firebase

Para conectar a aplicação ao seu projeto do Firebase, execute os seguintes passos:

1. Acesse o console do Firebase em https://console.firebase.google.com/
2. Crie um novo projeto ou selecione um projeto existente

### Execução

Para executar a aplicação em desenvolvimento:

```bash
npm run serve
```

Para fazer deploy das functions:

```bash
npm run deploy
```

### Exemplos de uso
A API suporta a seguinte operação:

- `POST /users`:
- curl --location --request POST 
  'http://127.0.0.1:5001/carlos-firebase-test-c2f58/us-central1/api/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name": "Carlos 03:42"
    }'

### Tecnologias usadas
- Node.js
- Express
- Firebase