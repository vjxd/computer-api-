const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const bookRoute=require('./routes/bookRoutes')
app.use(bodyparser.json())


app.use('/api/v1',bookRoute)

module.exports=app