var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getGigs: getGigs,
  gigInfo: gigInfo
}

function getGigs () {
  return knex('gigs')
  .join('bands', 'bands.id', '=', 'gigs.band_id')
  .join('venues', 'venues.id', '=', 'gigs.venue_id')
  .select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName')
}

function gigInfo (gig) {
  return knex('gigs')
  .join('bands', 'bands.id', '=', 'gigs.band_id')
  .join('venues', 'venues.id', '=', 'gigs.venue_id')
  .select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName', 'venues.URL as URL', 'gigs.description as description')
  .where('gigID', '=', gig.gigID)
}
