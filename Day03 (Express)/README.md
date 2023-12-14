## Express

* Previously, we had created a server using "http" which is a core module of Nodejs. But we can see that to create the whole backend using the core module will be very complex because we have to handle conditionally all the api end points and  methods like GET, POST, PUT etc.
* "http" has only one request handler i.e ".createServer()".
* In http server, if we try to search with the end points which is not defined then instead of showing any erorr, by default it will show the response which is outside of "if else" statement.

* Express is a third party library to create a server.
* It is very famous, light weight and highly developer friendly library.
* It is used to create Rest APIs.
* In express, we can define many request handlers according to our need. For every methods like GET, POST, PUT etc we can define different request handlers.
    * Ex => available in day03/index.js
* In express, if we try to request such end points which is not defined then it will show cannot get.


## How to create a server using Express?

1. initialize npm using command "npm init -y"
2. install express using command "npm i express"
3. create an index.js file
4. import express from express
    * Ex => available in day03/index.js
5. call express as a function and it returns an server object which we can catch in a new variable names as "app".
    * Ex => available in day03/index.js
6. Now start listening the server to run the server 24/7 using "app.listen()"
    * ".listen()" takes two argument, 1st is port number and 2nd is a callback function which gets called after the server started listening.
    * Ex => available in day03/index.js