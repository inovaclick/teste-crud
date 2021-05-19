# Instruções

## Ferramentas necessárias

- Yarn
- Docker
- Docker Compose

## Execução

- Acesse a pasta mysql_dump e rode o comando:
  - docker-compose up -d
- Com o container do MySQL rodando, crie o banco chamado crud. Para se conectar ao banco através de uma interface gráfica utilize o username e senha como root
- Na raiz do projeto rode os seguintes comandos:
  - yarn
  - yarn typeorm migration:run
  - yarn dev:server

## Rotas

- A API possui as seguintes rotas:
  - GET: /usuarios
  - GET: /usuarios/id
  - POST: /usuarios
    - Foi considerado que um usuário possui nome, email e senha
  - PUT: /usuarios/id
  - DELETE: /usuarios/id
