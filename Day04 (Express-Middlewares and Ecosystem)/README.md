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

    * Now pass the above function inside app.use() like app.use(logRequest)
    * So now it will run the function logRequest for every request.
    * Ex => available in day04/app.js
    * If we don't call the "next()" function inside the logRequest function then 