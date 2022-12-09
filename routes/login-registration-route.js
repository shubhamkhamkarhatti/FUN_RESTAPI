const express = require("express")
const createError = require("http-errors")
const route = express.Router()
const User = require("../models/user_model")

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
        res.send("Registered Successfully..")
    } catch (error) {
        next(error)
    }
})

module.exports = route