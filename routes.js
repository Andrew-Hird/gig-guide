var db = require('./db.js')

module.exports = {
  getGigs: getGigs,
  gigInfo: gigInfo,
  venueInfo: venueInfo,
  venueDeets: venueDeets,
  venueBand: venueBand,
  bandDeets: bandDeets
}

function getGigs(req, res) {
  db.getGigs()
    .then(function (gigs) {
      vm = {
        gigs: gigs
      }
      res.render('home', vm)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function gigInfo(req, res) {
  db.gigInfo(req.params)
    .then(function (gigs) {
      vm = {
        gig: gigs[0]
      }
      res.render('gig', vm)
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function venueInfo(req, res) {
  db.getVenues()
  .then(function (venues) {
    vm = {
      venues: venues
    }
    res.render('venues', vm)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function venueDeets(req, res) {
  db.deetsInfo(req.params)
  .then(function (gigs) {
    vm = {
      gig: gigs[0],
      gigs: gigs
    }
    res.render('deets', vm)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function venueBand(req, res) {
  db.getBands()
  .then(function (bands) {
    vm = {
      bands: bands
    }
    res.render('band', vm)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}

function bandDeets(req, res) {
  db.deetsBandInfo(req.params)
  .then(function (gigs) {
    vm = {
      gig: gigs[0],
      gigs: gigs
    }
    res.render('bandDeets', vm)
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
