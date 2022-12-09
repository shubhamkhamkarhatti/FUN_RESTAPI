const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MongoDBConnectionString,
    { dbName: process.env.DBName }).then(
        () => console.log("MongoDB connected Successfully..")
    ).catch(
        (err) => console.log("Not connected due to Error ", err)
    )

mongoose.connection.on('disconnected', () => {
    console.log("MongoDB Disconnected")
})

// process.on('SIGINT', async()=>{
//     await mongoose.connection.close()
//     process.exit(0)
// })