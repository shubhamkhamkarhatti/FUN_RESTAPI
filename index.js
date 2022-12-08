const express = require("express")
const morgan = require("morgan")
const createError = require("http-errors")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))

app.get('/funapi',(req, res)=>{
    res.send("First message from API..")
})

app.get('/',(req, res)=>{
    res.send("Main Api of the FUNAPI..")
})

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