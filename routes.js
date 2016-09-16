var db = require('./db.js')

module.exports = {
  getGigs: getGigs,
  gigInfo: gigInfo
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
  // res.send('hello')
}
