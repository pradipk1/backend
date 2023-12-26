
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    gender: String,
    password: String,
    image: String,
    // createdAt,
    // updatedAt => latest timestamp when the object was updated
}, {
    timestamps: true
});


// Below model will be communicating with the "users" collections
const User = mongoose.model('User', UserSchema);


module.exports = {
    User
}