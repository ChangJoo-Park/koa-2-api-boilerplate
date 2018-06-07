const router = require('koa-router')()

/**
 * @api {get} /users/:user_id Get user profile by id
 * @apiVersion  0.0.1
 * @apiGroup User
 * @apiName GetUserProfile
 * @apiSampleRequest /users/:user_id
 */
router.get('/users/:user_id', async (ctx) => {
  console.log(User)
  ctx.body = {}
})

module.exports = router
