exports.up = (knex) => {
  return knex.schema.createTable('comments', table => {
    table.increments();
    table.text('body');
    table.integer('user_id').references('users.id');
    table.integer('post_id').references('posts.id');
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('comments');
};
