exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.table('categories', function(table) {
      table.foreign('menu_id').references('id').inTable('menus')
    }),
    knex.schema.table('categoryImages', function(table) {
      table.foreign('category_id').references('id').inTable('categories')
    }),
    knex.schema.table('menuItemImages', function(table) {
      table.foreign('menu_item_id').references('id').inTable('menuItems')
    }),
    knex.schema.table('ingredients', function(table) {
      table.foreign('menu_item_id').references('id').inTable('menuItems')
    }),
    knex.schema.table('servingOptions', function(table) {
      table.foreign('menu_item_id').references('id').inTable('menuItems')
    }),

    knex.schema.raw('ALTER TABLE "public"."menuItems" ALTER COLUMN "price" TYPE decimal(24);'),
    knex.schema.raw('ALTER TABLE "public"."ingredients" ALTER COLUMN "price" TYPE decimal(24);'),
    knex.schema.raw('ALTER TABLE "public"."servingOptions" ALTER COLUMN "price" TYPE decimal(24);')

  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([


    knex.schema.table('categories', function(table) {
      table.dropForeign('menu_id')
    }),
    knex.schema.table('categoryImages', function(table) {
      table.dropForeign('category_id')
    }),
    knex.schema.table('menuItemImages', function(table) {
      table.dropForeign('menu_item_id')
    }),
    knex.schema.table('ingredients', function(table) {
      table.dropForeign('menu_item_id')
    }),
    knex.schema.table('servingOptions', function(table) {
      table.dropForeign('menu_item_id')
    })


  ]);
};
