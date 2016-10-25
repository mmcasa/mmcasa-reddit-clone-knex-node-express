exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', function (table) {
    table.increments()
      .primary();
    table.text('content')
      .notNullable();
    table.bigInteger('user_id')
      .notNullable()
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('cascade');
    table.bigInteger('post_id')
      .notNullable()
      .unsigned()
      .index()
      .references('id')
      .inTable('posts')
      .onDelete('cascade');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
