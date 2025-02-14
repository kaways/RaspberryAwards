# RaspberryAwards

### 1. Iniciação

# Projeto RaspberryAwards

Manual de montagem de ambiente de desenvolvimento.

# Bibliotecas usada no projeto:

    * Projeto desenvolvido com reactjs
        - NodeJS 20.*;
        - Base da Aplicação:

        Create React App;
            - Biblioteca de UI:
                Ant Design;
            - Biblioteca de roteamento:
                React Router Dom;
            - Gerenciamento de estado
                Redux;
                Redux Thunk;
                Redux Toolkit;
            - Testes do Front End
                Jest;

    * Eslint, Prettier

## Conteúdo

- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
  - [Ambiente](#ambiente)
- [Execução](#execução)

**Atenção**

> Todos os passos desta documentação são obrigatórios, sendo imprescindível que você obtenha sucesso na realização de cada passo.

> Nesta documentação considero que você está utilizando o SO Windows 10. Caso esteja utilizando outro sistema operacional, faça as devidas adaptações.

## Pré-requisitos

É necessário que você tenha instalado em sua máquina:

- Recomendo o editor de texto [Visual Studio Code](https://code.visualstudio.com/download), podendo ser usado outro.

## Configuração

### Ambiente

- Enquanto o projeto estiver em ambiente de desenvolvimento os valores abaixo deverão permanecer como foram previamente configurados

- **Caso esteja utilizando o Visual Studio Code**

  > Indo ao diretório `Projeto`

## Execução

O projeto RaspberryAwards.

- **Caso esteja utilizando o Visual Studio Code**

> Neste momento o seu Visual Studio Code devem estar devidamente instalados na máquina.

1. Clone o projeto para sua máquina local.

2. Abra a pasta do projeto no editor de código.

3. Aceite todas as sugestões de instalação de extensões que aparecerem assim que a pasta do projeto for aberta.

4. Abrir um termina e executar`yarn` ou `npm i` e depois `yarn start` ou `npm start`

## Passos para execução do projeto.

1.  Ambiente Dev:

    - No terminal/console, acessar o diretório do projeto:
    - Caso seja a primeira vez, execultar o seginte comando:

    ### `yarn` ou `npm i`

    Este comando instala todos os pacotes dos quais este projeto depende.

    ### `yarn start` ou `npm start`

    inicializa o script `start` localizado no package.json, inicia o projeto
    em ambiente local.

    ### Váriaveis de ambiente

    <dl>
        <dt>Antes de iniciar o projeto, devemos colocar as váriaveis em ambiente no arquivo env.js na pasta public. O arquivo de exemplo fica em .env.sample.js. As seguintes váriaveis devem ser preenchidas:</dt>

    ```js
    window.env = {
      API_URL: "",
    };
    ```

    <dt>Link para consumo da api, exemplo:</dt>
      <dd>API_URL:<em>**  ** </em></dd>
    </dl>
