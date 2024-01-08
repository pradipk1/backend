
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: {
        userId: String,
        name: String,
        image: String,
    }
    
}, {
    timestamps: true
});


// Below model will be communicating with the "posts" collections
const Post = mongoose.model('Post', PostSchema);


module.exports = {
    Post
}