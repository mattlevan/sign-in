const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var Visitor = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  officialVisit: {
    type: Boolean,
    required: true
  },
  escortRequired: {
    type: Boolean,
    required: true
  },
  escortName: {
    type: String,
  }
})

module.exports = mongoose.model('Visitor', Visitor)
