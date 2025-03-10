```markdown
# User Service

Este é um exemplo de um serviço gRPC implementado em TypeScript utilizando o padrão MVC (Model-View-Controller). O projeto demonstra como gerenciar usuários por meio de operações de criação, busca por ID e listagem, com o objetivo de servir como base para um sistema distribuído.

## Índice

- [Descrição](#descrição)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Exemplos](#exemplos)


## Descrição

O **User Service** é um projeto demonstrativo que implementa um microserviço para gerenciamento de usuários. Ele utiliza gRPC para comunicação, seguindo o padrão de projetos MVC:

- **Model:** Responsável pela lógica de negócios e gerenciamento dos dados (neste exemplo, armazenamento em memória).
- **View:** Representada pelo contrato gRPC definido no arquivo `proto/user.proto`, que define as mensagens e os métodos do serviço.
- **Controller:** Implementa os métodos expostos via gRPC e orquestra as operações, delegando à camada de Model.

## Arquitetura

O serviço é composto por três camadas principais:

- **Model:** Gerencia os dados dos usuários e a lógica de CRUD.
  Implementado em: `src/model/userModel.ts`

- **View:** Define o formato dos dados e o contrato do serviço gRPC.
  Implementado em: `proto/user.proto`

- **Controller:** Implementa os métodos do serviço, fazendo a ponte entre o Model e o contrato gRPC.
  Implementado em: `src/controller/userController.ts`

Além dessas camadas, o projeto inclui um servidor gRPC (`src/server.ts`) que registra os handlers e um exemplo de cliente (`src/client.ts`) para testar as operações.

```

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- npm (geralmente incluso com o Node.js)

## Instalação

1. **Clone o repositório e acesse a pasta do projeto:**

   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   cd user-service
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## Uso

### Iniciando o Servidor gRPC

Para iniciar o servidor, execute:

```bash
npm run start
```

Você deverá ver uma mensagem semelhante a:

```
Servidor gRPC iniciado na porta 50051...
```

### Testando o Serviço com o Cliente

Em outro terminal, execute:

```bash
npm run client
```

O cliente realizará os seguintes passos:
- Criará um novo usuário.
- Buscará esse usuário pelo ID.
- Listará todos os usuários (incluindo registros previamente populados para demonstração).

## Exemplos

A saída do cliente deverá se assemelhar a algo como:

```
Usuário criado: { id: 6, name: 'Alice Silva', email: 'alice@com' }
Usuário obtido: { id: 6, name: 'Alice Silva', email: 'alice@com' }
Lista de usuários: [
  { id: 1, name: 'Elisney Trindade', email: 'elisney@techshop.com' },
  { id: 2, name: 'Eliseu Reis', email: 'eliseu@techshop.com' },
  { id: 3, name: 'Marcos Paranhos', email: 'marcos@techshop.com' }
]
```