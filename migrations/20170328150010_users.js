exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.text('username').notNullable();
    table.text('name').notNullable().defaultTo('');
    table.text('email').notNullable().defaultTo('');
    table.text('profile_pic').notNullable().defaultTo('http://i.imgur.com/BBEvAF2.png');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
