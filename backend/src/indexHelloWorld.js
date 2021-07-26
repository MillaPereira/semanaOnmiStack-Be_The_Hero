const express = require('express') //Agora esse variável possui todas as funcionalidades do express, que podem ser acessadas com o '.'

const app = express()

app.use(express.json()) // define que todos os request serão feitos em formato json


/**
 * Métodos HTTP: 
 * GET -> pega uma informação do backend
 * POST -> cria uma informação no backend
 * PUT -> altera uma informação no backend
 * DELETE -> deleta uma informação no backend
 */

/** Tipos de parâmetros:
 * 
 * Query params: parâmetros enviados/noameados na rotas após '?' (filtros, paginação)
 *      ex: /users?name=Milla -> Busca todos os users com nome Milla
 *          /users?page=2&name=Milla&idade=19 -> buasca na página 2 todos os usuários com nome Milla e idade 19 anos
 * Route params: Parâmetros utilizados para identificar recursos
 *      ex: /users/:id -> identifica um único recurso. O número do id deve ser colocado no insomnia 
 * Request body: Corpo da requesição Usado para criar ou alterar recursos
 */

/** Banco  de Dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, etc. -> vamos usar o SQLite
 * NoSQL: MongoDB, CouchDB, etc.
 */

/** Comunicação com o banco de dados
 * 
 * Driver: SELECT = FROM users
 * Query Builder: table('users').select('*').where()
 * Knex.js
 */


app.post('/users/', (request, response) => {//Isso é uma função com dois parâmetros
    //return response.send('Hello World')
    //const params = request.query // acessando os queryspegou a informação do insomnia http://localhost:3333/users?name=Milla

    //const params = request.params // acessandos os routes

    const body = request.body
    
    console.log(body)


    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Milla Pereira'
    }) // Pode mandar objetos usando json
}) // depois do barra também pode ter uma rota específica, como users ou admin

app.listen(3333)

