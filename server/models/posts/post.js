const mongoose = require('mongoose')
const { Schema } = mongoose

var postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    comments: [{ text: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    likes: Number
})

module.exports = mongoose.model('Post', postSchema)