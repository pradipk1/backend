
## Dependent & Independent Entity/Collection
* An Entity which is dependent on other Entity/Collection is called Dependent Entity/Collection.
* Ex => A blog is a Dependent Entity/Collection because it is dependent on user.

* An Entity which is not dependent on other Entity/Collection is called Independent Entity/Collection.
* Ex => An user is an Inependent Entity/Collection because user can exist without blog or comment.


## Relations Between Two Entity/Collection
There are mainly three types of Realtions

### One-to-Many/Many-to-One

* In this, one Entity/Collection can have relationship with many same kind of Entity/Collection.
* Ex => One user can create many blogs. In this example realtion between user and blog is One-to Many.
* Ex => One Ration Card can have multiple family members.

### One-to-One

* In this, one Entity/Collection can have relationship with only one Entity/Collection.
* Ex => One civilian can have relationship with only one Ration Card, Adhar Card, Pan Card, Voter ID etc. and vice-versa.

### Many-to-Many

* In this, one Entity/Collection can have relationship with more than one Entity/Collection.
* Ex => One whatsapp group can have multiple users and vice-versa.


## mongoose.Schema()

* It is a constructor function used to create a schema/blueprint of a DB/Collection using "new" keyword.
* It takes two arguments and both the arguments are the object.
* 1st object contains the properties of the DB/Collection and 2nd object contains a single property ie. "timestamps".
* The value of "timestamps" can be true or false. When it is true then it adds two extra properties in the DB/Collection, 1st is createdAt and 2nd is updatedAt.
    * Ex => available in day08/database/user.js
* So we can say that "timestamps" property adds the date and time of the DB/Collection at the time of creation and the date and time of latest updated DB/Collection.