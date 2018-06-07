const readdirpSync = require('fs-readdirp').readdirpSync

const capitalize = require('../utils/capitalize')
const isNotModuleFile = require('../utils/is-not-module-file')
const getBaseName = require('../utils/get-basename')
const arrayToObject = require('../utils/array-to-object')
const mongoose = require('../db')
const Schema = mongoose.Schema

const getFilePathObjectFromPath = (filePath, stats) => {
  const isNotModule = isNotModuleFile(filePath, stats)

  if (isNotModule) return false

  const name = capitalize(getBaseName(filePath))
  return { name, filePath }
}

const createMongooseModel = ({name, filePath}) => {
  return mongoose.model(name, new Schema(require(filePath)))
}

const redueModelArrayToObject = (obj, item) => {
  return arrayToObject(obj, item, 'modelName')
}

module.exports = readdirpSync(__dirname, getFilePathObjectFromPath)
.map(createMongooseModel)
.reduce(redueModelArrayToObject, {})
