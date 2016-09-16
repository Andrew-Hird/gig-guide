var development = require('./knexfile').development
var knex = require('knex')(development)

module.exports = {
  getGigs: getGigs,
  gigInfo: gigInfo,
  deetsInfo: deetsInfo,
  venueBand:venueBand,
  deetsBandInfo: deetsBandInfo,
  getVenues: getVenues,
  getBands: getBands
}

function getGigs () {
  return knex('gigs')
  .join('bands', 'bands.id', '=', 'gigs.band_id')
  .join('venues', 'venues.id', '=', 'gigs.venue_id')
  .select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName' ,'venues.id as venueID', 'bands.id as bandID')
}

function getVenues (gig) {
  return knex('venues')
}
function getBands (gig) {
  return knex('bands')
}

function gigInfo (gig) {
  return knex('gigs')
  .join('bands', 'bands.id', '=', 'gigs.band_id')
  .join('venues', 'venues.id', '=', 'gigs.venue_id')
  .select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName', 'venues.URL as URL', 'gigs.description as description', 'venues.id as venueID')
  .where('gigID', '=', gig.gigID)
}

function deetsInfo (gig) {
  return knex('gigs')
  .join('bands', 'bands.id', '=', 'gigs.band_id')
  .join('venues', 'venues.id', '=', 'gigs.venue_id')
  .select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName', 'venues.URL as URL', 'gigs.description as description', 'venues.id as venueID')
  .where('venueID', '=', gig.venueID)
}


function venueBand(gig){
return knex('gigs')
.select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName', 'venues.URL as URL', 'gigs.description as description', 'venues.id as venueID', 'bands.id as bandID')
.where('bandID', '=', gig.bandID)
}

function deetsBandInfo (gig) {
  return knex('gigs')
  .join('bands', 'bands.id', '=', 'gigs.band_id')
  .join('venues', 'venues.id', '=', 'gigs.venue_id')
  .select('gigs.id as gigID', 'gigs.date as date', 'bands.name as bandName', 'venues.name as venueName', 'venues.URL as URL', 'gigs.description as description', 'venues.id as venueID', 'bands.id as bandID')
  .where('bandID', '=', gig.bandID)
}
