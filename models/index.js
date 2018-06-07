const path = require('path')
const readdirpSync = require('fs-readdirp').readdirpSync

const capitalize = require('../utils/capitalize')

const mongoose = require('../db')
const Schema = mongoose.Schema

const models = {}

readdirpSync(__dirname, (filePath, stats) => {
    if (stats.isDirectory() ||
      filePath.includes('index.js') ||
      !filePath.includes('.js')
    ) {
      return false
    }
    return {
      path: filePath,
      name: capitalize(path.basename(filePath).replace('.js', ''))
    }
  })
  .map(({
    name,
    path
  }) => mongoose.model(name, new Schema(require(path))))
  .forEach(model => models[model.modelName] = model)

module.exports = models
