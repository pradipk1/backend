
const mongoose = require('mongoose');


// function to connect the database
async function connectDatabase() {
    const result = await mongoose.connect('mongodb://127.0.0.1:27017/pt-web-08');
    
    return result;
}


// Schema/Model for the collection students
const Student = mongoose.model('Student', {
    name: String,
    dateOfBirth: Date,
    gender: String,
    admissionNumber: Number,
    graduated: Boolean,
    batch: String,
    courses: [String], // ['backend', 'react']
}); // Student(which is the 1st argument) -> It will interact with the students collection


async function test() {
    console.log('DB queries through Student Model');


    // create a single student

    // const student = await Student.create({
    //     name: 'Rahul Sharma',
    //     dateOfBirth: new Date('2001-04-05'),
    //     gender: 'male',
    //     admissionNumber: 453,
    //     graduated: false,
    //     courses: ['javascript', 'react', 'backend']
    // });
    

    // find method
    // const student = await Student.find();


    // findOne method
    // const student = await Student.findOne({name: 'Rahul Sharma'});


    // findById method
    // const student = await Student.findById('658042a7e6e802ff2e4d869d');


    // updateOne method
    // await Student.updateOne({
    //     name: 'Rahul Sharma'
    // }, {
    //     $set: {
    //         courses: ['javascript', 'dsa', 'react', 'backend']
    //     }
    // });
    // const student = await Student.find({
    //     name: 'Rahul Sharma'
    // })


    // deleteOne method
    // const result = await Student.deleteOne({
    //     _id: '658042a7e6e802ff2e4d869d'
    // });
    // console.log(result);
    // const student = await Student.find({
    //     name: 'Rahul Sharma'
    // });


    // findByIdAndDelete method
    const result = await Student.findByIdAndDelete("65808971381c30d2307f50b7");
    console.log(result);
    const student = await Student.find({
        name: 'Rahul Sharma'
    });


    console.log(student);
}


connectDatabase()
.then(test)
.catch((err) => {
    console.log('Error connecting to databae', err.message);
})