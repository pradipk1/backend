
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    content: String,

    user: {
        userId: String,
        name: String,
        image: String,
    },

    post: {
        postId: String,
        title: String,
    },
}, {
    timestamps: true
});


// Below model will be communicating with the "comments" collections
const Comment = mongoose.model('Comment', CommentSchema);


module.exports = {
    Comment
}