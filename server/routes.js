const express = require('express')
const postRoutes = require('@/controllers/posts/post.routes')

const routes = express.Router()
const apiRoutes = express.Router()

apiRoutes.use('/post', postRoutes)
routes.use('/api/v1', apiRoutes)

module.exports = routes