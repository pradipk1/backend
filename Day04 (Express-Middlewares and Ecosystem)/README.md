## Express Middlewares

* If we want to run same logic on every request then we can use Middlewares.
* Like in Express, we generally use "app.use()" middleware to run the some same logic on every request.
* Inside app.use(), we pass the logic whatever we want to execute on every request.

* Ex => app.use(express.json()) => It accepts only json type body for every request.
* Ex => app.use(express.text()) => It accepts only string type body for every request.

* We can also create our own logic and pass it into the app.use()
    * Ex => function logRequest(req, res, next) {
        console.log(new Date(), req.method, req.url);
        next();
    }

    * Now pass the above function inside app.use() like app.use(logRequest).
    * So now it will run the function logRequest for every request.
    * Ex => available in day04/app.js
    * If we don't call the "next()" function inside the logRequest function then it will stuck on this logRequest middleware and the next process of request would not happen.


## cors Middleware

* When we try to access the 'http://localhost:3035/employees' from a different origin/domain then There is an error occured and it shows that this error is due to CORS policy, So to solve thisproblem we can use "cors" middleware as app.use(cors()).

* To use cors middleware simply install 'cors' using the command "npm i cors" and then import cors from cors and then pass cors inside app.use() as app.use(cors()).

* Ex => available in day04/app.js


## Different Types of Middlewares

* Global Middleware => When this is applied on app then it is used for all requests or routes.
    * Ex => app.use(express.json()), app.use(express.text()), app.use(express.cors()) etc.

* Routes middleware => This is used for a particular route.
* Inline Middleware => This is used within a route.


## Implementation of Router in Express

* It is used to create the Routes, as we have done in app.js file like app.get(), app.post etc, in a seperate file to reduce the weightage of app.js file and better undestanding.

1. Create a folder named as router.
    * Ex => also available in day04

2. create a file named as employee.js inside the router folder.
    * Ex => also available in day04/router

3. import express in the employee.js file
    * Ex => also available in day04/router/employee.js

4. Now add a line "const router = express.Router()" in the employee.js file.
    * Ex => also available in day04/router/employee.js

5. Define the requests methods as "router.get(), router.post() etc" like we have done in app.js file as "app.get(), app.post() etc".
    * Ex => also available in day04/router/employee.js

6. Export the router as "module.exports = router"
    * Ex => available in day04/router/employee.js

7. Import router in the app.js file as "const employeeRouter = require('./router/employee')"
    * Ex => available in day04/app.js

8. Now aplly middleware app.use() to get the desired output for all requests.
    * Ex => app.use('/', employeeRouter)
    * Ex => also available in day04/app.js


### Inline Middlewares

* The middlewares who are passed inside the request handlers are inline Middlewares.
    * Ex => available in day04/router/employee.js

* These are generally used to check whether the user is logged in/authorized or not.
    * Ex => available in day04/router/employee.js


## Note

* Whenever a request is made then fistly all the global middlewares gets in the call stack in a certain order according to the written code and then atlast request handler gets into the call stack like app.get, app.post etc. and gets executed.


### Multer Middleware

* It is an express middleware to upload the files.
* Doc URL: "https://expressjs.com/en/resources/middleware/multer.html"