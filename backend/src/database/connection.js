const knex = require('knex')
const configuration = require('../../knexfile')

const connection = knex(configuration.development)

module.exports = connection // exporta desse arquivo a conexão com o banco de dados