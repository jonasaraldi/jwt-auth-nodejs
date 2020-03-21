const baseController = require('@/controllers/baseController')
const post = require('@/models/posts/post')

class postController extends baseController {
    async fetchAsync(req, res) {
        let { filters, limit } = req.query
        limit = super._limit(limit)

        try {
            const posts = await post
                .find(filters)
                .limit(limit)
    
            res.status(200).json(posts)
        }
        catch(ex) {
            res.send(ex)
        }
    }

    async addAsync(req, res) {
        const { title, author, text } = req.body

        try {
            const postCreated = await post.create({ title, author, text })
            res.status(200).json(postCreated)
        }
        catch(ex) {
            res.send(ex)
        }
    }
}

module.exports = new postController()