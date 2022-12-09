const express = require("express")
const morgan = require("morgan")
const createError = require("http-errors")
require("dotenv").config()
const funAPI = require("./routes/login-registration-route")

require("./config/dbConfig")
const app = express()
const port = process.env.PORT || 3000
app.use(morgan('dev'))
app.use(express.json())

app.use('/funapi',funAPI)

// Error handling 
app.use((req, res, next)=>{
    // const error = new Error('Not Found')
    // error.status = 404
    // next(error) 
    next(createError.NotFound())
})
app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        "error":{
            "status":err.status || 500,
            "message":err.message
        }
    })
})


app.listen(port,()=>console.log(`Server up and running on port ${port}..`))