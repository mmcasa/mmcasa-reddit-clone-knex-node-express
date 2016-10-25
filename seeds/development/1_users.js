exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users')
        .insert({
          id: 1,
          email: 'Shay@test.com'
        }),
        knex('users')
        .insert({
          id: 2,
          email: 'malik@test.com'
        }),
        knex('users')
        .insert({
          id: 3,
          email: 'bot@test.com'
        })
      ]);
    });
};
