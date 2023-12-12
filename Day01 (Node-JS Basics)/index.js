
const { fibonacci } = require('./math.js');
const crypto = require('crypto');
const fs = require('fs');

console.log("Hello World!");

console.log(fibonacci(4));

// max is not inclusive
console.log(crypto.randomInt(20, 21));
console.log(crypto.randomUUID());

const data = fs.readFileSync('./README.md', {
    encoding : 'utf-8'
});

console.log(data);





console.log(process.argv);

if(process.argv.length < 3) {
    process.exit(1);
}


console.log(process);