module.exports = (obj, item, key) => {
  obj[item[key]] = item
  return obj
}
