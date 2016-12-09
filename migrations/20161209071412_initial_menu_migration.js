exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('menus', function(table) {
      table.increments('id').primary(); //primary key, auto increment
      table.string('name');
      table.integer('position'); //for placement on the front end
      table.boolean('active');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('categories', function(table) {
      table.increments('id').primary();
      table.integer('menu_id');
      table.string('name');
      table.text('description');
      table.integer('position');
      table.boolean('active');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('categoryImages', function(table) {
      table.increments('id').primary();
      table.integer('category_id');
      table.text('href');
      table.integer('position');
      table.boolean('active');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('menuItems', function(table) {
      table.increments('id').primary();
      table.integer('category_id');
      table.string('name');
      table.text('description');
      table.float('price');
      table.boolean('active');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('menuItemImages', function(table) {
      table.increments('id').primary();
      table.integer('menu_item_id');
      table.text('href');
      table.integer('position');
      table.boolean('active');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('ingredients', function(table) {
      table.increments('id').primary();
      table.integer('menu_item_id');
      table.string('name');
      table.text('description');
      table.float('price');
      table.boolean('active');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('servingOptions', function(table) {
      table.increments('id').primary();
      table.integer('menu_item_id');
      table.string('name');
      table.boolean('active');
      table.float('price');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('modified_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('menus'),
    knex.schema.dropTable('categories'),
    knex.schema.dropTable('categoryImages'),
    knex.schema.dropTable('menuItems'),
    knex.schema.dropTable('menuItemImages'),
    knex.schema.dropTable('ingredients'),
    knex.schema.dropTable('servingOptions')
  ])
};
