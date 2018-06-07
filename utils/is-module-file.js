module.exports = (filePath, stats) => {
  return stats.isDirectory()
  || filePath.includes('index.js')
  || !filePath.includes('.js')
}
