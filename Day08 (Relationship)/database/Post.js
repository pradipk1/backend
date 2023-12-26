
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { // this is a soft relation because we are not refering it to the "users" collection
        userId: String,
        name: String,
        image: String,
    }
    

    // Below method is more strict way because we are refering to the "users" collection
    // author: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }
}, {
    timestamps: true
});


// Below model will be communicating with the "posts" collections
const Post = mongoose.model('Post', PostSchema);


module.exports = {
    Post
}