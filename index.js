const express = require("express")
const app = express()
const port = 3000

app.get('/funApi',(req, res)=>{
    res.send("First message from API..")
})

app.get('/',(req, res)=>{
    res.send("Main Api of the FUNAPI..")
})

app.listen(port,()=>console.log(`Server up and running on port ${port}..`))