const express = require("express")
const route = express.Router()

route.get('/', async (req, res, next) => {
    res.send("Main Page")
})

route.post('/login', async (req, res, next) => {
    res.send("Login Route")
})

route.post('/register', async (req, res, next) => {
    res.send("Register Route")
})

module.exports = route