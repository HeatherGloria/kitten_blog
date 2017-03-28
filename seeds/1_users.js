exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username:'sean.kelly',
          name:'Sean',
          email:'sean@fakemail.com',
          profile_pic: 'http://i.imgur.com/BBEvAF2.png'
        },
        {
          username:'tom.garrison',
          name:'tom',
          email:'tom@fakemail.com',
          profile_pic: 'http://i.imgur.com/BBEvAF2.png'
        },
        {
          username:'kati.johnson',
          name:'kati',
          email:'kati@fakemail.com',
          profile_pic: 'http://i.imgur.com/BBEvAF2.png'
        },
        {
          username:'steven.hendricks',
          name:'steve',
          email:'steve@fakemail.com',
          profile_pic: 'http://i.imgur.com/BBEvAF2.png'
        }
      ]);
    });
};
