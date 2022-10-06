const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    adminLevel: {
        type: Number,
        enums: [0, 1, 2]
        //0: can submit an article
        //1: can submit an article and approve an article
        //2: can submit an article, approve an article, and delete an article; can also remove/add admins 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: 8,
        required: true
    },
    bio: {
        type: String
    },
    links: {
        type: [
            [String, String]
        ]
    }
})

admin.index({
    '$**': 'text'
});

export default mongoose.model('admin', admin);