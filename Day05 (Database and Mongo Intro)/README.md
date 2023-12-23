## Some Advantages of storing Data in DB instead of json files

* Security => Anyone can see and update the data in the team if it is in json file but in DB who has the authority that person only can do such things.

* Reliability => If data is in json file then anyone can update the data in such way that it can be currupted.

* Portability => If data is stored in json file then if we have to change our server then this json file is needed to get added in the 2n server.

* Regular backups => If Data is stored in json file then there is no backup facility available.


## Types of Databases

There are two main kind of Databases, one is "SQL" and another is "NoSQL".

## SQL Database

* These are also called Relational databases.
* It stores the data in Table format i.e in row and column
* Each table is called one Entity.
* Each Data/Record is present in a row.
* It is highly structured.
* We have to define every column with property and data types before storing the data in Database.
* We can not leave any field empty.
* We can not store anything extra outside of defined column.
* It also provides the feature of Validation.
* It is better for the application where consistency and some kind of ristriction is required.

### Examples of SQL Databases

* Postgre
* MySQL
* MS SQL Server


## NoSQL Databases

* It stores the data in json object.
* Each collection is called one Entity.
* Data/Records are presents inside json object.
* One collection can have many json objects and each json object is called one Document.
* Each record is a document.
* It is flexible.
* We can define some properties before storing the Data in the database.
* We can leave a property empty also.
* We can also store some extra data.
* It doesn't provide any validation.
* It is better where we have no idea about the fields like what type of data is required.

### Examples of NoSQL Databases

* MongoDB
* DynamoDB


There are some other kind of databases:

### Index based Database

* Elasticsearch

### Key-value pair Database

* redis


## How to connect with MongoDB server?

* After setting up the MongoDB software and Mongo Shell in the system, open the terminal and hit the command "mongosh". By default this will connect the Mongo Shell inside the system using localhost.

* Now initially, it would show "test" named database but we can see the list of dbs using the command "show dbs".

* To switch between dbs use the command "use database-name". Using this command if the db does not exist then it will create a new db with the given name.
    * Ex => use pt-web-08

* To see the collections in dbs use the command "show collections".
* To create a new collection inside a db, first switch into that db in which the collection is to be created and then use the command "db.createCollection('collection-name')".
    * Ex => db.createCollection('students')

* Generally collection name is always a plural name like students, users etc.

* To exit from the mongo shell press "ctrl+c".


## Basic CRUD operation on a collection using terminal in Mongo Shell

First switch to the db in which you want to do CRUD operation.

### db.collection-name.find()

* Using the above command we can see all the items/data present inside the collection.
* Ex => db.students.find()

### db.collection-name.insertOne()

* Using the above command we can insert a new item/data inside the collection.
* Ex => db.students.insertOne({name: "Abhishek Mishra", gender: "male", dateOfBirth: "2000-10-03"})

### db.collection-name.updateOne()

* Using the above command we can update a data present inside the collection.
* Ex => db.students.updateOne({id: ObjectId('')}, { $set: { dateOfBirth: "2000-06-04"}})

### db.collection-name.deleteOne()

* Using the above command we can delete the data present inside the collection.
* Ex => db.students.deleteOne({id: ObjectId('')})

### db.collection-name.count()

* It gives the length of the collection.