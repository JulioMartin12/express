const express = require('express');
const router = express.Router();
const { bookConroller } = require('../controllers');


router.post('/:bookId',bookConroller.createBookController);


   router.get('/:bookId', bookConroller.getBookController);

   router.put('/:bookId', (req, res)=>{
    console.log(`Book found with is ${req.params.bookId}`);
    res.json({id: req.params.bookId, ...req.body})
   });

   module.exports = router;