require('dotenv').config()
require('module-alias').addAlias('@', __dirname)

const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${ __dirname }/public`))

app.use(routes)

app.listen(3000, () => {
    console.log('Listening on port 3000...')
})