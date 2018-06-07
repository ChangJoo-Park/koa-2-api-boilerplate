const app = require('./server')
const config = require('./config')

app.listen(config.PORT, () => {
  console.log(`Server starting ${config.PORT}`)
})
