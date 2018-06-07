const readdirpSync = require('fs-readdirp').readdirpSync

const capitalize = require('../utils/capitalize')
const isModuleFile = require('../utils/is-module-file')
const getBaseName = require('../utils/get-basename')
const arrayToObject = require('../utils/array-to-object')
const mongoose = require('../db')
const Schema = mongoose.Schema

const models = readdirpSync(__dirname, (filePath, stats) => {
    const isNotModule = isModuleFile(filePath, stats)

    if (isNotModule) return false

    const name = capitalize(getBaseName(filePath))
    return { name, filePath }
  })
  .map(({ name, filePath }) => mongoose.model(name, new Schema(require(filePath))))
  .reduce((obj, item) => arrayToObject(obj, item, 'modelName'), {})

module.exports = models
