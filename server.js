const express = require('express'),
      mongoose = require('mongoose'),
      index = require('./server/routes/index'),
      dotenv = require('dotenv'),
      bodyParser = require('body-parser')

dotenv.load()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', index)

/* Catch all errors and log them. */
app.use(function(err, req, res, next) {
  console.log(err)
})

const port =  process.env.PORT || 3000;
app.listen(port, () => console.log('Running on localhost:', port))
