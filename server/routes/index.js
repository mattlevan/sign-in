const express = require('express'),
      router = express.Router(),
      Visitor = require('../models/visitor')

router.post('/sign-in', (req, res) => {
  const officialVisit = req.body.officialVisit || false
  const escortRequired = req.body.escortRequired || false

  const newVisitor = new Visitor({
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    company: req.body.company,
    officialVisit: officialVisit,
    escortRequired: escortRequired,
    escortName: req.body.escortName
  })

  Visitor.create(newVisitor, (err) => {
    if (err) {
      console.log(err)
      return res.status(409).send()
    }

    res.status(200).send()
  })
})

module.exports = router 
