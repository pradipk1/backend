# Introduction to Nodejs

* Nodejs is JS run tint engine created by Ryan Dahl using Chrome V8 engine.
* Before Nodejs, The JS code was being executed in the browsers only.
* All the browsers provide their own run time engine for JS.

* Nodejs is a progrom to run the JS written in c++ language because Chrome V8 engine is also written in c++.

## process in Nodejs

* This a global literal(variable) in Nodejs.
* This is a object in which some information gets stored whenever a new process gets started.
* Windows operating system whenever we execute a program then it is a process for the Wndows.

## process.argv

* It gives an array of the arguments passed inside the process.
* At 0th index of array it will show program, at 1st index it will show the directory path for which the program gets executed and after 1st index all other arguments can be seen which was passed inside the process arguments.
* Ex => In terminal if we hit "node index.js pradip mern-developer" and inside index.js we do console.log(process.argv) then we can see the array of length 4 at the output.

## process.exit()

* It is used to exit out of the program in a certain condition.
* Ex => if(process.argv.lenfth < 4) process.exit(1)
* in the above example, 1 means abnormal exit and if we put 0 instead of 1 then it means normal exit. But this thing is related to internal operating system.

# Module

* For Nodejs each JS file is a module.
* It is something which we can reuse in the code like a component in Reactjs.
* A module can use another module.
* We can breakdown our code in multiple modules for better understatndig.

## Default import/export syntax in Nodejs

* For export => module.exports = { fibonacci }
    Ex => available in day01/math.js
* For import => const { fibonacci } = require('./math.js)
    Ex => available in day01/index.js


## Some pre-defined modules in Nodejs
* crypto => It is used to do mathmatical operations like generate a random number or UUID etc.
    Ex => available in day01/index.js
* fs => It is used to read a file data.