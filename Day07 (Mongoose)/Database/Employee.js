
const mongoose = require('mongoose');


const Employee = mongoose.model('Employee', {

    // Below is used for short-hand
    // name: String,

    // Below is used for extra info (valiadation) and works only for create()
    name: {
        type: String,
        required: true,
        minLength: 4,
        trim: true
    },
    gender: String,
    designation: String,
    dateOfBirth: Date,
    dateOfJoining: Date,
    hobbies: [String],
    profileImage: String,
    isMarried: Boolean,
    isVisuallyImpared: Boolean,
    phone: String,
    email: String,
    password: String,
});


module.exports = {
    Employee,
}