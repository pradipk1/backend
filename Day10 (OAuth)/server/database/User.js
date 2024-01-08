
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gender: String,
    image: String,
    githubUsername: String,
    signinMethod: String // 'email-password', 'github-oauth', 'google-oauth'
}, {
    timestamps: true
});


// Below model will be communicating with the "users" collections
const User = mongoose.model('User', UserSchema);


module.exports = {
    User
}