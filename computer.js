
//CREATED AFTER THE CALL


const express = require('express')
const mongoose =require('mongoose')
const bodyParser=require("body-parser")
const app = express()
app.use(express.json())


mongoose.connect ("mongodb://localhost:27017/computer",{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  
  mongoose.connection.on("connected",()=>{
    console.log("connected to DB");
  })
  mongoose.connection.on("error",(error)=>{
    console.error("Error:",error);
  })
  
  const Computerschema =new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    pc_brand:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    }
    })

const Computer=mongoose.model("computer",Computerschema)

app.post("/api/v1/computers",async(req,res)=>{
    try {
        const{id,pc_brand,year}=req.body
    const computer=await Computer.create({
        id:id,
        pc_brand:pc_brand,
        year:year
    })
    res.status(201).json({success:true,message:"Computer created successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
app.get("/api/v1/computers",async(req,res)=>{
    try {
        const pc=await Computer.find()
        res.status(200).json(pc)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
app.get("/api/v1/computers/:id",async(req,res)=>{
    try {
        const pc=await Computer.findOne({id:req.params.id})
        res.status(200).json(pc)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
app.delete("/api/v1/computers/:id",async(req,res)=>{
    try {
        const pc=await Computer.findOneAndDelete({id:req.params.id})
        res.status(200).json(pc)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})
app.put("/api/v1/computers/:id",async(req,res)=>{
    try {
        const{pc_brand,year}=req.body
        const pc=await Computer.findOneAndDelete({id:req.params.id},{pc_brand,year},{new:true})
        res.status(200).json(pc)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})

app.listen(3000,"0.0.0.0",()=>{
    console.log("server started on port 3000");
  })