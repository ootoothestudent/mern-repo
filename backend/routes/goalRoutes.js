// const express =require('express')
// const router = express.Router()
// const {getGoals, setGoal, deleteGoal, updateGoal}= require../backend/controller/goalControllerler')


// // refactored code for routes
// router.route('/').get(getGoals).post(setGoal)
// router.route('/:id').put(updateGoal).delete(deleteGoal)
// /*
// //shorter 
// router.get('/', getGoals)
// router.put('/:id', updateGoal)
// router.post('/', setGoal)
// router.delete('/:id', setGoal)

// //this is @long way
// /*
// router.get('/', function(req, res){
//     res.status(200).json( {message:'Get goals'} );
// });


// router.post('/', function(req, res){
//     res.status(200).json( {message:'set goal'} );
// });
// router.put('/:id', function(req, res){
//     res.status(200).json( {message:`Update goal${req.params.id}`} );
// });
// router.delete('/:id', function(req, res){
//     res.status(200).json( {message:` goal deleted ${req.params.id}`} );
// });
// */
// module.exports = router 