const express=require('express')
const bookcontroller=require('../Controller/bookcontroller')
const router=express.Router()


router.post('/books',bookcontroller.createbook)
router.get('/books',bookcontroller.getbooks)
router.get('/books/:id',bookcontroller.getbook)
router.put('/books/:id',bookcontroller.updatebook)
router.delete('/books/:id',bookcontroller.deletebook)

module.exports=router