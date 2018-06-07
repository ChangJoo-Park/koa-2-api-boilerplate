const path = require('path')
const readdirpSync = require('fs-readdirp').readdirpSync
const capitalize = require('../utils/capitalize')
const mongoose = require('../db')
const Schema = mongoose.Schema

const files = readdirpSync(__dirname, (filePath, stats) => {
  if (stats.isDirectory()
    || filePath.includes('index.js')
    || !filePath.includes('.js')
  ) {
    return false
  }
  return {
    path: filePath,
    name: path.basename(filePath).replace('.js', '')
  }
})
.map(({ name, path }) => mongoose.model(capitalize(name), new Schema(require(path))))

const models = {}
files.forEach(model => models[model.modelName] = model)

module.exports = models
