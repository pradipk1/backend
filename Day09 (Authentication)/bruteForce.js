
const jwt = require('jsonwebtoken');


const list = [
    'PASSWORD',
    'password',
    '123456',
    'WINTER_IS_COMING'
];

let finalToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiX2lkIjoiaGpncml1NzI2MjM1ODUiLCJuYW1lIjoiUHJhZGlwIFNodWtsYSIsImltYWdlIjoiaHR0cDovL2tqYS5wbmciLCJpYXQiOjc2MzI3NzgyMn0.EAmJc38bxs_sSrTM2J5du4A7gTznW_PQZdCVqcm_UgY';

const payload = {
    "sub": "1234567890",
    "_id": "hjgriu72623585",
    "name": "Pradip Shukla",
    "image": "http://kja.png",
    "iat": 763277822
}

for(const possibleSecret of list) {
    let token = jwt.sign(payload, possibleSecret);

    if(token == finalToken) {
        console.log('Secret key identified', possibleSecret);
    }
}