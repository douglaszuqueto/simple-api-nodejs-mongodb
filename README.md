# Simples API utilizando NodeJS e MongoDB

## Instalação

* git clone https://github.com/douglaszuqueto/simple-api-nodejs-mongodb.git
* cd simple-api-nodejs-mongodb
* npm install

## Configuração

Configure o arquivo **config.js** localizado na pasta config com a porta desejada para rodar o servidor web e também a **uri** do MongoDB

## Rodando o Projeto Localmente

* npm start

## Rodando o projeto em Containers Docker
* Requisitos
    * Ter o Docker instalado [Link](https://docs.docker.com/engine/installation/)
    * Ter o Docker Compose instalado [Link](https://docs.docker.com/compose/install/)
* Para rodar o projeto(**Primeira Vez**)
    * docker-compose up. **OBS**: Na primeira vez demorará um pouco para iniciar o projeto, pois as imagens serão baixadas do Docker Hub
* Iniciar o projeto
    * docker-compose start
* Parar o projeto
    * docker-compose stop
* Remover os Conteiners
    * docker-compose rm

## Recursos
* URL base: seuIP:3000
* Dados de Entrada no Formulário
```
name: 'Douglas Zuqueto',
email: 'douglas.zuqueto@gmail.com'
```

 * GET /users
 
 ```json
 {
   "data": {
     "users": [
       {
         "_id": "5786cafab2f590310cd29200",
         "name": "Douglas",
         "email": "douglas.zuqueto@gmail.com",
         "__v": 0
       }
     ]
   }
 }
 ```
 * POST /users

 ```json
 {
   "data": {
     "user": {
       "__v": 0,
       "name": "Foo",
       "email": "foo@mail.com",
       "_id": "57891564eacf19d940167cd8"
     }
   }
 }
 ```
 * GET /users/:id

 ```json
 {
   "data": {
     "user": {
       "_id": "57891564eacf19d940167cd8",
       "name": "Foo",
       "email": "foo@mail.com",
       "__v": 0
     }
   }
 }
 ```
 * PUT /users/:id

 ```json
 {
   "data": {
     "user": {
       "_id": "57891564eacf19d940167cd8",
       "name": "Foo",
       "email": "foo@mail.com",
       "__v": 0
     }
   }
 }
 ```
 * DELETE /users/:id
 
 ```json
 {
   "status": true
 }
 ```

## Referências Utilizadas

 * https://github.com/caio-ribeiro-pereira/node-api-examples
 * https://github.com/Webschool-io/be-mean-instagram
 * [Imagem MongoDB Alpine](https://hub.docker.com/r/mvertes/alpine-mongo/)
 * [Imagem NodeJS Alpine](https://hub.docker.com/r/mhart/alpine-node/)
