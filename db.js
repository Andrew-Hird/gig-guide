var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get
}

function get () {
  return knex('gigs').select()
}
