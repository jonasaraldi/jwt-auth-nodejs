const mongoose = require('mongoose');
const { CONNECTION_URI_MONGODB } = process.env

module.exports = mongoose.connect(CONNECTION_URI_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => {
    console.log('Successfully conected with Mongo DB...')
})
.catch(() => {
    console.log('Error on Mongo DB connection...')
});