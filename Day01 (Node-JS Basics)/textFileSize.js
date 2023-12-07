
const fs = require('fs');

// Given a file name, we want to count the number of characters in that file

function countCharacter(fileName) {
    const data = fs.readFileSync(fileName);

    return data.length;
}

let fileName = process.argv[2];

console.log('Number of characters in',fileName,'are:',countCharacter(fileName));