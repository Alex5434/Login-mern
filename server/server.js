const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const route = require('./routes/router')
const connectDb = require('./Database/Connect')
const cors = require('cors')
require('dotenv').config()

   
app.use(express.json())
app.use('/',route)
app.use(cors())


const start = async()=>{
    try {
        const connect = connectDb(process.env.MONGO_URL)
        app.listen(port, ()=>console.log(`port listening on ${port}`));
    } catch (error) {
        
    }
}
start()