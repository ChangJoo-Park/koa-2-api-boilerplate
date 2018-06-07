const ExtendableError = require('es6-error')

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err instanceof ExtendableError) {
      ctx.status = err.status
      ctx.body = err.body
    } else {
      const isProduction = process.env.NODE_ENV === 'production'
      const { message, stack } = err

      ctx.status = 500

      ctx.body = {
        errors: [{
          message,
          stack: isProduction ? '' : stack
        }],
      }
    }
    ctx.app.emit('error', err, ctx)
  }
}
