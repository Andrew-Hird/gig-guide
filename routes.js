var db = require('./db.js')

module.exports = {
  get: get
}

function get (req, res) {
  db.get()
  .then(function (gigs) {
    vm = { gigs: gigs }
    res.render('hello')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
}
