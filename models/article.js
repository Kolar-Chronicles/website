const mongoose = require('mongoose');

const article = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    image:{
        type: String,
        required:true
    },
    content:{
        type:String,
        required: true
    },
    author:{
        ref:'admin',
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    published:{
        type:Date,
        default:Date.now,
    }
})

article.index({
    '$**': 'text'
});

export default mongoose.model('article', article);