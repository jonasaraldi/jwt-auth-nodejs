require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${ __dirname }/public`))

let refreshTokens = []

app.post('/login', (req, res) => {
    const { username } = req.body
    const user = { name: username }

    const accessToken = generateAccessToken(user)
    const refreshToken = jwt.sign(user, REFRESH_TOKEN_SECRET)
    refreshTokens.push(refreshToken)

    res.json({ accessToken, refreshToken })
})

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if(refreshToken == null) return res.sendStatus(401)
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403)

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)

        const { name } = user
        const accessToken = generateAccessToken({ name })
        res.json({ accessToken })
    })
})

app.delete('/logout', (req, res) => {
    refreshTokens = refreshTokens.filter(token => token !== req.body.token)
    res.sendStatus(204)
})

function generateAccessToken(user) {
    return jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
}

app.listen(3001, () => {
    console.log('Listening on port 3001...')
})