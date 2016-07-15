# Simples API utilizando NodeJS e MongoDB

## Instalação

* git clone https://github.com/douglaszuqueto/simple-api-nodejs-mongodb.git
* cd simple-api-nodejs-mongodb
* npm install

## Configuração

Configure o arquivo **config.js** localizado na pasta config com a porta desejada para rodar o servidor web e também a **uri** do MongoDB

## Rodando o Projeto

* npm start

## Recursos

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
