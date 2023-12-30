
const jwt = require('jsonwebtoken');


// Below JWT_SECRET is very common signature but in general we do not do this. We have to make this in such way that no one can guess this signature otherwise hackers can hack the signature like in ./bruteForce.js file
let JWT_SECRET = 'VERY_TOP_SECRET';

// Below signature is good as it is a little bit hard to guess''''''[]
let jwt_signature = 'jhcsnuh-hhh%$&*&%-%$ghnjH6-554JNh'

// Below token is taken from jwt.io website whose signature is 'VERY_TOP_SECRET'
let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.BINoekJp1-1A4tlsTXr8nToydU175LL9XWtyQ085cWM';

// Below jwt.decode() function gives the information stored inside token
let result = jwt.decode(token);
console.log(result);


// Below jwt.verify() method gives error if provided signature in the 2nd argument does not match with the token's signature
try {
    jwt.verify(token, JWT_SECRET);

} catch (err) {
    console.error(err.message);
}


// Below jwt.sign() method is used to create a new token. It takes payload as 1st argument and signature as 2nd argument
const newToken = jwt.sign({
    "sub": "1234567890",
    "_id": "hjgriu72623585",
    "name": "Pradip Shukla",
    "image": "http://kja.png",
    "iat": 763277822
}, jwt_signature);

console.log(newToken);