
const jwt = require('jsonwebtoken');

// read the values from .env file and populate in process.env
require('dotenv').config({
    path: './.env'
});

const JWT_SECRET = process.env.JWT_SECRET;

const newToken = jwt.sign({
    "sub": "1234567890",
    "_id": "hjgriu72623585",
    "name": "Pradip Shukla",
    "image": "http://kja.png",
    "iat": 763277822
}, JWT_SECRET);

console.log(newToken);