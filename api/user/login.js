const router = require('koa-router')()

/**
 * @api {post} /login Get profile by auth token
 * @apiVersion  0.0.1
 * @apiGroup User
 * @apiName GetMyProfile
 * @apiHeader (200) {String} Authorization Auth token.
 * @apiSampleRequest /me/profile
 */
router.get('/me/profile', async (ctx) => {
  // TODO: Check AUthorization header
})

module.exports = router
