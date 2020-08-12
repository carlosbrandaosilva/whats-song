# whats-song

whats-song é uma API Rest desenvolvida com a motivação de fornecer uma playlist de músicas baseada na temperatura climática de uma determinada cidade enviada por parâmetro.

Stack de desenvolvimento:
- Api **NodeJS**
- Banco **MongoDB (MongoAtlas)**
- **Docker**
- CI/CD **CircleCI**
- Servidor de App **Heroku**
- **GitHub** como repositório de código

Serviços integrados:
- Spotify
- open-weather-map

# Rota GET/cities/:city/playlists

https://whats-song.herokuapp.com/cities/:city/playlists

Rota responsável por retornar uma playlist de musicas conforme cidade informada por parâmetro.

curl --location --request GET 'https://whats-song.herokuapp.com/cities/London/playlists'\
--header 'Authorization: Bearer senha'

## response body

{
  name: "Nome da faixa",
  link: "Link para acesso a faixa no streaming de musica"
}

## Autenticação 

headers:{
 authorization: bearer ***token***
}

# Rota GET/requests/statistic 

https://whats-song.herokuapp.com/requests/statistic

Rota responsável por fornecer estatísticas das cidades mais consultadas.

curl --location --request GET 'https://whats-song.herokuapp.com/requests/statistic' \
--header 'Authorization: Bearer senha'

## Autenticação 

headers:{
 authorization: bearer ***token***
}

# Instruções para Teste Online

Aplicação esta disponivel no heroku: https://whats-song.herokuapp.com/

# Instruções para Teste Local

## Baixe a imagem do dockerHub

- docker pull lucasbrandao/whats-song:1.0.0

Inicie o container executando o comando abaixo:

- docker run -p 3101:3101 -d lucasbrandao/whats-song:1.0.0

## Clone ou baixe o repositório

- git clone https://github.com/lucasbrandaobh/whats-song.git


## Iniciar Servidor

Após baixar o repositorio localmente na maquina, execute o comando abaixo para baixar os pacotes de dependencia:

- npm install

Em seguida, execute o comando abaixo para iniciar a aplicação:

- npm start

## Testes de integração

Para executar os testes de unitarios e de integração execute o comando abaixo:

- npm test

## Packages

* [body-parser] - Utilizado para parsear requisições, permite o uso urls complexas.
* [dotenv] - Pacote para gerenciamento de variaveis de ambiente.
* [helmet] - Pacote para auxiliar a proteger requisições Http.
* [mongodb] - Utilizado para acesso ao MongoDB.
* [node-cache] - Utilizado para realizar cache de dados na aplicação utilizando chave valor.
* [passport] - Middleware de autenticação.
* [passport-http-bearer] - Utilizado para autenticação HTTP Bearer das rotas usando tokens.
* [request] - Utilizado para realizar requisições http nos testes de integração.
* [sha256] - Utilização para criptografar tokens no padrão sha256;
* [winston] - Utilizado para formatação de logs. 
* [chai] - Interface BDD e TDD para implementação de testes.
* [chance] - Middleware para criação de dados fictícios para fixtures.
* [mocha] - Test Runner para Node.js.
* [nock] - Middleware para mocking de requisições HTTP.
* [nyc] - Code coverage, utilizado para mostrar metricas de cobertura de teste.
* [sinon] - Biblioteca para testes, espiões, stubs, mocks.
* [supertest] - Bibliote para testes de chamadas HTTP.

