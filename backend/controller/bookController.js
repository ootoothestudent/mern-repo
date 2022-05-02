 const asyncHandler =require('express-async-handler')
const Book =require('../models/bookModel')
// //@desc Get Books 
// //@route GET /api/books
// //@acess Prives after auth 
const getBooks = asyncHandler(async (req, res )=> {
    const books = await Book.find()
  
    res.status(200).json(books)
})
// //@desc Create book  
// //@route POST/api/book
// //@acess Prives after auth 
const createBook = asyncHandler(async(req, res )=> {
      if(!req.body.title){   //tile will be searched uppon change this later
          res.status(400)
           //error handeling 
          throw new Error('please add title field');}
        const book = await Book.create ({
                        title: req.body.title,         
                        author: req.body.author,
                        isbn: req.body.isbn,
                        author: req.body.author,
                        description: req.body.author,
                        





       })
        res.status(200).json( book)
    }
    )
// //@desc Update Book 
// //@route PUT /api/book/:id
// //@acess Prives after auth 
    const updateBook = asyncHandler( async(req, res )=> {
             const book = await Book.findById(req.params.id) 
            if(!book){
                res.status(400)
                throw new Error('Book not found ')
            }
            const updatedBook = await Book.findByIdAndUpdate(req.params.id,
                 req.body,{new:true,})
            res.status(200).json( updatedBook );
        }
        )
// //@desc Delete Book 
// //@route DETELE /api/goals
// //@acess Prives after auth 


const deleteBook = asyncHandler(async(req, res )=> {

        const goal = await Goal.findById(req.params.id) 
        if(!goal){
            res.status(400)
            throw new Error('Goal not found ')
        }
         await goal.remove()
       
        res.status(200).json({ id: req.params.id});
    }
    )
module.exports = {
    getBooks,
    deleteBook, 
    updateBook,
    createBook,
}



///////////////////////////////////////////////////////////////////////////////////
// const asyncHandler =require('express-async-handler')


// //@desc Get Goals 
// //@route GET/api/goals
// //@acess Prives after auth 


// //@desc Set Goals 
// //@route POST  /api/goals
// //@acess Prives after auth 
// const setGoal = asyncHandler(async(req, res )=> {
//   if(!req.body.text){
//       res.status(400)
//       throw new Error('please add text field'); //error handeling 
//   }

//   const goal = await Goal.create ({
//                     text: req.body.text
   
//   })
//     res.status(200).json( goal)
// }
// )
// //@desc Put Goals 
// //@route Put/api/goals/:id
// //@acess Prives after auth 
// const updateGoal = asyncHandler( async(req, res )=> {
//     const goal = await Goal.findById(req.params.id) 
//     if(!goal){
//         res.status(400)
//         throw new Error('Goal not found ')
//     }
//     const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,
//          req.body,{new:true,})
//     res.status(200).json( updatedGoal );
// }
// )
// //@desc Delete Goals 
// //@route Delete/api/goals
// //@acess Prives after auth 
// const deleteGoal = asyncHandler(async(req, res )=> {

//     const goal = await Goal.findById(req.params.id) 
//     if(!goal){
//         res.status(400)
//         throw new Error('Goal not found ')
//     }
//      await goal.remove()
   
//     res.status(200).json({ id: req.params.id});
// }
// )
// module.exports = {getGoals, deleteGoal, updateGoal,setGoal,}