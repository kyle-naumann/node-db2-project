exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.string('make').notNullable();
    tbl.string('vin').unique().notNullable();
    tbl.string('model').notNullable();
    tbl.integer('mileage').notNullable();
    tbl.string('title');
    tbl.string('transmission');
});
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars');

  // DO YOUR MAGIC
};
