const {bookService} = require('../services')

const createBookController = (req,res) =>{
 try {
    const newBook = bookService.createBook(req.params.bookId, req.body)
    res.json(newBook)
 } catch (err) {
    res.status(400).json({action: 'createBook', error: err.message})
 }
 
   
   };


   const getBookController = (req, res)=>{
    console.log(`Userfound with is ${req.params.UserId}`);
    req.body
    res.json({id: req.params.bookId, name:"Lord of the ring"})
   };



   module.exports = { createBookController}