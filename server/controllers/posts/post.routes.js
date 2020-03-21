const router = require('express').Router()

const postController = require('@/controllers/posts/postController')
const commentController = require('@/controllers/posts/comments/commentController')
const isAuthenticated = require('@/middlewares/isAuthenticated')

router.get('/', postController.fetchAsync)
router.post('/', isAuthenticated, postController.addAsync)
router.post('/:id/comment', commentController.addAsync)

module.exports = router