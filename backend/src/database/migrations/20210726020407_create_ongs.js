
exports.up = function(knex) { // criando a tabela, o que acontece quando eu excecuto a migration
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
  })
};

exports.down = function(knex) { // o que acontece se eu tiver que votlar atrás
    return knex.schema.dropTable('ongs') // deleta a tabela
};
