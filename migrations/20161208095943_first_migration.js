exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('testingTable', function(table) {
      table.boolean('guardPlayer');
    })
  ])

};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.table('testingTable', function(table) {
      table.dropColumn('guardPlayer')
    })
  ])

};
