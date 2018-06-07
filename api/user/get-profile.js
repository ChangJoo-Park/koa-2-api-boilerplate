const router = require('koa-router')()
const User = require('../../models/user')

/**
 * @api {get} /users/:user_id Get user profile by id
 * @apiVersion  0.0.1
 * @apiGroup User
 * @apiName GetUserProfile
 * @apiSampleRequest /users/:user_id
 */
router.get('/users/:user_id', async (ctx) => {
  ctx.body = User
})

module.exports = router
