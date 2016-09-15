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
        return knex('gigs').insert({
          id: '77701',
          venue_id: '88801',
          band_id: '99901',
          date: '2016-09-25',
          description: 'Come see the Split Enz play!'
        })
      })
}
