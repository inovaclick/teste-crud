# Instruções

## Ferramentas necessárias

- Yarn
- Emulador

## Execução

- Na raiz do projeto rode yarn para instalar as dependências
- Abra o emulador
- Em seguida rode o seguinte comando, que ficará em execução no terminal:
    - yarn start
- Rode yarn android


- Para que a aplicação possa se conectar ao back verifique a configuração do localhost que pode ser encontrada na pasta src/services/api.ts

- O localhost deve ser configurado de acordo com as informações abaixo:

    - iOS com emulador: http://localhost:3333
    - iOS com dispositivo físico: http://IP_da_máquina:3333
    - Android com emulador: http://localhost:3333 (rode adb reverse tcp:portNumber tcp:portNumber)
    - Android com emulador do Android Studio: http://10.0.2.2:3333
    - Android com emulador do Genymotion: http://10.0.3.2:3333
    - Android com dispositivo físico: http://IP_da_máquina:3333
