exports.up = function(knex) {
  return knex.schema.createTable('posts', table =>{
    table.increments();
    table.text('title');
    table.integer('user_id').references('users.id');
    table.text('body');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
