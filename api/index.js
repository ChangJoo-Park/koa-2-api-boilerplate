const path = require('path')
const readdirpSync = require('fs-readdirp').readdirpSync

const isNotModuleFile = require('../utils/is-not-module-file')

module.exports = readdirpSync(__dirname, (filePath, stats) => {
  const isNotModule = isNotModuleFile(filePath, stats)
  if (isNotModule) return false

  return filePath
}).map(file => require(file))
