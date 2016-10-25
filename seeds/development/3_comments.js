exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments')
    .del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments')
        .insert({
          id: 1,
          post_id: 1,
          user_id: 1,
          content: 'My favorite foods are steak, pasta and salad.'
        }),
        knex('comments')
        .insert({
          id: 2,
          post_id: 1,
          user_id: 2,
          content: 'My favorite foods are quina, grapes and fish.'
        }),
        knex('comments')
        .insert({
          id: 3,
          post_id: 1,
          user_id: 3,
          content: 'My favorite foods are beef and plantains.'
        }),
        knex('comments')
        .insert({
          id: 4,
          post_id: 2,
          user_id: 1,
          content: 'My favorite winter foods are stew and pie'
        }),
        knex('comments')
        .insert({
          id: 5,
          post_id: 2,
          user_id: 2,
          content: 'My favorite winter foods are turkey and wine'
        }),
        knex('comments')
        .insert({
          id: 6,
          post_id: 2,
          user_id: 3,
          content: 'My favorite winter foods are sweet potatoes and MORE PIE'
        }),
        knex('comments')
        .insert({
          id: 7,
          post_id: 3,
          user_id: 1,
          content: 'My favorite spring foods are fruit and lemonade'
        }),
        knex('comments')
        .insert({
          id: 8,
          post_id: 3,
          user_id: 2,
          content: 'My favorite spring foods are margaritas and tacos'
        }),
        knex('comments')
        .insert({
          id: 9,
          post_id: 3,
          user_id: 3,
          content: 'My favorite spring foods are sandwiches and cheese'
        }),
      ]);
    });
};
