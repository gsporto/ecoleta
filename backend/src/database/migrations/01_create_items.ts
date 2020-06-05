import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', function(table){
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
};

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
};