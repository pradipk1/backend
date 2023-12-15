
const express = require('express');
const cors = require('cors');
const employeeRouter = require('./router/employee');


const app = express();

app.use(express.json());

function logRequest(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}
app.use(logRequest); // Middleware to console the request information on every request

app.use(cors()); // Middleware to add response header for CORS issue


app.use('/', employeeRouter);


app.listen(3035, () => {
    console.log('Server listening to http requests on http://localhost:3035');
});