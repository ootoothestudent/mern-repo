const express = require('express')
const router = express.Router()
const {getBooks,createBook, deleteBook, updateBook}= require ('../controller/bookController.js')


// refactored code for routes
router.route('/').get(getBooks).post(createBook)
router.route('/:id').put(updateBook).delete(deleteBook)

//shorter 
//  router.get('/', getBooks)
//  router.put('/:id', updateBook)
//  router.post('/', createBook)
// router.delete('/:id', deleteBook)

//this is @long way
// router.get('/api/books', (req, res)=>{
//     res.status(200).json({message :'Getting Books'});

// })

// router.get('/', function(req, res){
//     res.status(200).json( {message:'Getting books'} );
// });


// router.post('/', function(req, res){
//     res.status(200).json( {message:'Created book'
// } );
// });
// router.put('/:id', function(req, res){
//     res.status(200).json( {message:`Update book${req.params.id}`
// } );
// });
// router.delete('/:id', function(req, res){
//     res.status(200).json( {message:` Book deleted ${req.params.id}`} );
// });

module.exports = router 