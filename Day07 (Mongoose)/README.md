
## Mongoose

* It is a library used to connect the MongoDB database and the Nodejs.
    * Ex => available in day07/test.js

* We can also create Model/Schema/Blueprint of the DB collection using "mongoose.model()".
    * Ex => available in day07/test.js

#### mongoose.model()
* It is used create a schema/model for a DB collection.
* It takes two arguments, 1st is a string in which we pass the collection name like "Student" for the "students" collection, "User" for the "users" collection etc. 2nd argument takes an object in which we define all the fields and its data types.
    * Ex => available in day07/test.js
* It returns a mongoose object which we can catch in a new variable named as "Student" and can be used as a class to create the new student object.

* Below are some methods listed which we can apply on the returned mongoose object:

    * Student.find
    * Student.findById
    * Stydent.findOne
    * Student.create same as insertOne
    * Student.insertMany
    * Student.updateOne
    * Student.updateMany
    * Student.findByIdAndUpdate
    * Student.deleteOne
    * Student.deleteMany
    * Student.findByIdAndDelete

    * Ex => available in day07/test.js


* CRUD operation done using MongoDb within the system without json file.
    * Ex => available in day07/app.js