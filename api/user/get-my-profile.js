const router = require('koa-router')()

/**
 * @api {get} /me/profile Get profile by auth token
 * @apiVersion  0.0.1
 * @apiGroup User
 * @apiName GetMyProfile
 * @apiHeader (200) {String} Authorization Auth token.
 * @apiSampleRequest /me/profile
 */
router.get('/me/profile', async (ctx) => {
  ctx.body = {}
})

module.exports = router
