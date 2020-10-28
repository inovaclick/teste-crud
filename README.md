//Criar arquivo package
npm init

//Gerenciar requisições, rotas, URL's e outros
npm install express

//Reiniciar sempre que houver alteração no código
npm install --save-dev nodemon
//erro no windows: executar PowerShell como adm (erro de permissão)
Set-ExecutionPolicy Unrestricted

//morgan: monitorar as requisições
install --save morgan

//receber so dados simples e json
npm install --save body-parser

npm install mysql2

npm start

Tabela: usuario
    cpf: varchar
    nome: varchar
    idade: int

Alterar as variáveis de ambiente para o banco de dados local na pasta nodemon.json