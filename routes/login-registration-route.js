const express = require("express")
const createError = require("http-errors")
const route = express.Router()
const User = require("../models/user_model")
const auth = require("../auth_token/token_config")

route.get('/', async (req, res, next) => {
    res.send("Main Page")
})

route.post('/login', async (req, res, next) => {
    res.send("Login Route")
})

route.post('/register', async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) throw createError.BadRequest("Data not found")

        const doesExist = await User.findOne({ email: email })
        console.log(password)
        if (doesExist) throw createError.Conflict("User already exists!!")
        const newUser = await User({ email: email, password: password })
        await newUser.save()
        const acctoken = await auth.signAccessToken(email)
        console.log(acctoken)
        res.send(acctoken)
    } catch (error) {
        next(error)
    }
})

module.exports = route