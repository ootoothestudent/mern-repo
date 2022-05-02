 const mongoose = require ('mongoose')
 const bookSchema = mongoose.Schema({
text:{type: String,
    required:[true, 'PLease add text value']},
    title: {
                type: String
        
            },
            isbn: {
            type: String,
            
        },
        author: {
        type: String,
        
            },
        description: {
        type: String
            },

}, {timestamp: true}
)
//     title: {
//         type: String

//     },
//     isbn: {
//         type: String,
        
//     },
//     author: {
//         type: String,
        
//     },
//     description: {
//         type: String
//     },
//     published_date: {
//         type: Date
//     },
//     publisher: {
//         type: String
//     },
//     updated_date: {
//         type: Date,
//         default: Date.now
//     }


 module.exports = mongoose.model('Book', bookSchema)