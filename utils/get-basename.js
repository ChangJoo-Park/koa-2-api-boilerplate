const path = require('path')

module.exports = (fullPath) => {
  return path.basename(fullPath).replace('.js', '')
}
