const path = require('path')
const readdirpSync = require('fs-readdirp').readdirpSync

module.exports = readdirpSync(__dirname, (filePath, stats) => {
  if (stats.isDirectory()
    || filePath.includes('index.js')
    || !filePath.includes('.js')
  ) {
    return false
  }

  return filePath
}).map(file => require(file))
