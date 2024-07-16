const connectToDb = require('./Config/db')
const app =require('./app')
const path =require('path')
const dotenv=require('dotenv')

dotenv.config({path:path.join(__dirname,"/Config/Config.env")})
connectToDb()

app.listen(process.env.PORT,"0.0.0.0",()=>{
    console.log(`Server started on port ${process.env.PORT} and in ${process.env.STATUS} stage`);
})