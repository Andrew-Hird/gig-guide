
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('bands', function (table) {
      table.increments('id').primary()
      table.integer('gig_id').references('gigs.id')
      table.integer('venue_id').references('venues.id')
      table.string('name')
    }),
    knex.schema.createTable('venues', function (table) {
      table.increments('id').primary()
      table.integer('gig_id').references('gigs.id')
      table.integer('band_id').references('bands.id')
      table.string('name')
      table.string('address')
      table.string('URL')
    }),
    knex.schema.createTable('gigs', function (table) {
      table.increments('id').primary()
      table.integer('band_id').references('bands.id')
      table.integer('venue_id').references('venues.id')
      table.string('date')
      table.string('description')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bands'),
    knex.schema.dropTable('venues'),
    knex.schema.dropTable('gigs')
  ])
};
