exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts')
    .del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts')
        .insert({
          id: 1,
          title: 'Cooking in the summer',
          content: 'My favorite ingredients.',
          user_id: 1
        }),
        knex('posts')
        .insert({
          id: 2,
          title: 'Cooking in the spring',
          content: 'My favorite ingredients.',
          user_id: 2
        }),
        knex('posts')
        .insert({
          id: 3,
          title: 'Cooking in the winter',
          content: 'My favorite ingredients.',
          user_id: 3
        })
      ]);
    });
};
