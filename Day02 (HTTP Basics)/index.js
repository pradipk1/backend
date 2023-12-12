
const http = require('http');
const {fibonacci} = require('../Day01 (Node-JS Basics)/math');
const fsPromises = require('fs/promises');

const server = http.createServer(async (req, res) => {
    
    const path = req.url;
    const method = req.method
    console.log(new Date(), method, path);

    if(path.includes('fibonacci') && method === 'GET') {
        const n = parseInt(path.split('/').pop());

        return res.end(JSON.stringify({
            data: fibonacci(n)
        }));

    } else if(path.includes('chunked') && method === 'GET') {

        res.write('First chunk!\n');
        res.write('First chunk!\n');
        res.write('First chunk which is vey huge!\n');

        return res.end('Last chunk!')

    } else if(path.includes('file') && method === 'GET') {

        const fileName = path.split('/').pop();

        const data = await fsPromises.readFile('./'+fileName);

        return res.end(data);
    }

    // Write headers to the response
    res.writeHead(200, {'Content-Type': 'application/json'});

    // end the response with text data i.e data should be strigified
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));

});


server.listen(3030);

console.log("server is listening on http://localhost:3030");