
const express = require('express');
const cors = require('cors');
const employeeRouter = require('./router/employee');
const connectDatabase = require('./Database/connectDatabase');


const app = express();

app.use(express.json());
app.use(cors());

function logRequest(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}
app.use(logRequest);

app.get('/hello', (req, res, next) => {

    res.send('Hello there');

    next();
});

app.use('/', employeeRouter);

app.use('/', express.static('static'));



const port = process.argv[2] || 3035;
connectDatabase()
.then(() => {
    app.listen(port, () => {
        console.log(`Server listening to http requests on http://localhost:${port}`);
    });
})
