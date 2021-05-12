exports.up = function (knex, Promise) {
    return knex.schema.createTable('examples', function (table) {
        table.increments('example_id').primary();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.boolean('active').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());

        table.index('email');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('examples');
};
