exports.seed = function (knex, Promise) {
  return Promise.all([
      knex('bands').del(),
      knex('venues').del(),
      knex('gigs').del(),

    ])
    .then(function () {
      return knex('bands').insert({
        id: '99901',
        name: 'Split Enz',
        gig_id: '77701',
        venue_id: '88801'
      })
    })
    .then(function () {
      return knex('bands').insert({
        id: '99902',
        name: 'Dragon',
        gig_id: '77702',
        venue_id: '88802'
      })
    })
    .then(function () {
      return knex('bands').insert({
        id: '99903',
        name: 'Blindspot',
        gig_id: '77703',
        venue_id: '88803'
      })
    })
    .then(function () {
      return knex('bands').insert({
        id: '99904',
        name: 'Shihad',
        gig_id: '77704',
        venue_id: '88804'
      })
    })

    .then(function () {
      return knex('venues').insert({
        id: '88801',
        gig_id: '77701',
        band_id: '99901',
        name: 'Powerstation',
        address: '33 Mount Eden Rd, Grafton, Auckland 1023',
        URL: 'http://www.powerstation.net.nz/'
      })
    })
    .then(function () {
      return knex('venues').insert({
        id: '88802',
        gig_id: '77702',
        band_id: '99902',
        name: 'The Wine Cellar',
        address: 'St Kevins Arcade',
        URL: 'http://www.facebook.com/WineCellarStKevins'
      })
    })
    .then(function () {
      return knex('venues').insert({
        id: '88803',
        gig_id: '77703',
        band_id: '99903',
        name: 'The Golden Dawn',
        address: 'Ponsonby Road',
        URL: 'http://www.goldendawn.co.nz/'
      })
    })
    .then(function () {
      return knex('venues').insert({
        id: '88804',
        gig_id: '77704',
        band_id: '99904',
        name: 'Danny Doolans',
        address: 'Viaduct Harbour',
        URL: 'http://dannydoolans.co.nz/'
      })
    })

  .then(function () {
      return knex('gigs').insert({
        id: '77701',
        venue_id: '88801',
        band_id: '99901',
        date: '2016-09-25',
        description: 'Come see the Split Enz play!'
      })
    })
    .then(function () {
      return knex('gigs').insert({
        id: '77702',
        venue_id: '88802',
        band_id: '99902',
        date: '2016-09-26',
        description: 'Come see Dragon play!'
      })
    })
    .then(function () {
      return knex('gigs').insert({
        id: '77703',
        venue_id: '88803',
        band_id: '99903',
        date: '2016-09-27',
        description: 'Come see Blindspot play!'
      })
    })
    .then(function () {
      return knex('gigs').insert({
        id: '77704',
        venue_id: '88804',
        band_id: '99904',
        date: '2016-09-28',
        description: 'Come see Shihad play!'
      })
    })
    .then(function () {
      return knex('gigs').insert({
        id: '77705',
        venue_id: '88802',
        band_id: '99901',
        date: '2016-09-28',
        description: 'Come see Split Enz again!!'
      })
    })
}
