const router = require('koa-router')()
const User = require('../../models/user')

/**
 * @api {get} /me/profile Get profile by auth token
 * @apiVersion  0.0.1
 * @apiGroup User
 * @apiName GetMyProfile
 * @apiHeader (200) {String} Authorization Auth token.
 * @apiSampleRequest /me/profile
 */
router.get('/me/profile', async (ctx) => {
  ctx.body = User
})

module.exports = router
