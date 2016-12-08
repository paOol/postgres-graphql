exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('testingTable', function(table) {
      table.increments('id').primary(); //primary key, auto increment
      table.string('username');
      table.string('password');
      table.integer('integerColumn'); // to test integers
      table.json('jsonColumn'); // exclusive to postgres
      table.float('floatColumn');
      table.boolean('Active'); // boolean for checks like "isActive?"
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    })
    .then(function() {
      return knex('testingTable').insert(
        [
          { jsonColumn: JSON.stringify(["test", "json", "data"]) },
          { jsonColumn: JSON.stringify([{ test: "test" }, { name: "kevinHo" }, "data"]) },
          { jsonColumn: JSON.stringify(["123", "xx"]) }
        ]
      );
    })

  ])

};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('testingTable')
  ])

};