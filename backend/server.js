
 const express = require ('express')
 const dotenv = require ("dotenv").config() 
 const port  = process.env.PORT 
 const app =express()
 app.use(express.json())
 app.use(express.urlencoded({ extended: false})) //middleware
app.use('/api/books' ,require('./routes/bookRoutes'))
app.listen(port, ()=>console.log(`server has started on port ${port}`))

 const colors = require('colors')
 const {errorHandler} = require('./middleware/errorMiddleware')
 const connectDB = require('./config/db')
 connectDB()
// app.use('/api/goals' ,requir./backend/routes/goalRoutestes'))


 app.use(errorHandler)


// app.get('/api/books', (req, res)=>{
//     res.status(200).json({message :'Getting Books'});

// })
 

