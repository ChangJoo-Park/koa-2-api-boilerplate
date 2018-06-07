const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(`${config.DB_HOST}/test`)
  .then(() => {
    console.log('connected to MongoDB successfully')
  })

module.exports = mongoose
