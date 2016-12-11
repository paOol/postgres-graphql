exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.table('menuItems', function(table) {
        table.foreign('category_id').references('id').inTable('categories');
      })

  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([

    knex.schema.table('menuItems', function(table) {
      table.dropForeign('category_id');
    })

  ])
};
