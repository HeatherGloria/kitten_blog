exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          body: 'this sucks',
          user_id: 1,
          post_id: 2
        },
        {
          body: 'I like this',
          user_id: 4,
          post_id: 3
        },
        {
          body: 'another comment',
          user_id: 3,
          post_id: 1
        }
      ]);
    });
};
