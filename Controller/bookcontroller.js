const mongoose=require('mongoose')
const Book =require('../model/bookmodel')
const bodyparser=require("body-parser")

const createbook=async(req,res,next)=>{
    try {
        const{id,title,AuthorName,year}=req.body
        const newBook = new Book({
            id:id,
            title:title,
            AuthorName:AuthorName,
            year:year
        })
        await newBook.save()
        res.status(201).json({staus:"success",newBook})
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }

}
const getbooks=async(req,res,next)=>{
    try {
        const books=await Book.find()
        res.status(200).json(books)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const getbook=async(req,res,next)=>{
    try {
        const book= await Book.findOne({id:req.params.id})
        if(book){
            res.status(200).json(book)
        }
        else{
            res.status(404).json({message:"book not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message

        })
    }
}

const updatebook=async(req,res,next)=>{
    try {
        const{id,title,AuthorName,year}=req.body
        const book=await Book.findOneAndUpdate({id:req.params.id},{title,AuthorName,year},{new:true})
        if (book) {
            res.status(200).json(book)
        } else {
            res.status(404).json({message:"book not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

const deletebook=async(req,res)=>{
    try {
        const book =await Book.findOneAndDelete({id:req.params.id})
        if(book){
            res.status(200).json({message:"book deleted successfully"})
        }
        else{
            res.staus(404).json({message:"book not found"})
        }
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}
module.exports={createbook,getbooks,getbook,updatebook,deletebook}