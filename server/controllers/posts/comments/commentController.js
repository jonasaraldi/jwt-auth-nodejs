const baseController = require('@/controllers/baseController')
const post = require('@/models/posts/post')

class commentController extends baseController {
    async addAsync(req, res) {
        const { id } = req.params
        const { text } = req.body
        const comment = { text }
        const update = { $push: { comments: comment } }
        const options = { upsert: true }

        try {
            await post.findOneAndUpdate({ _id: id }, update, options)
            res.status(200).json(true)
        }
        catch(ex) {
            res.send(ex)
        }
    }
}

module.exports = new commentController()