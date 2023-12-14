
const express = require('express');
const fs = require('fs/promises');


const app = express();

app.use(express.json()); // this will accept only json type data for all routes.
// app.use(express.text()); // this will accept only string data for all routes.

const port = process.argv[2] || 3030;

// below method is for GET request and root url i.e 'http://localhost:3030'
app.get('/', (req, res) => {

    // GET

    return res.send({
        message: 'Hello World!'
    });
});

// below is example of hard coded route
// app.get('/file/index.html', async (req, res) => {

//     const data = await fs.readFile('./index.html');
    
//     res.send(data.toString());
// });

// below is for dynamic route
app.get('/file/:fileName', async (req, res) => {
    try {
        const data = await fs.readFile(`./${req.params.fileName}`);
    
        res.send(data.toString());
        
    } catch (error) {
        console.error(error.message);

        const data = await fs.readFile('./404.html')

        res.status(404).send(data.toString());
    }
});


// below is for POST method to create a new file
app.post('/file/:fileName', (req, res) => {
    try {
        const fileName = req.params.fileName;

        // const text = req.body; // this is for text body
        const text = req.body.content; // this is for json body

        console.log(text);

        fs.writeFile(`./static/${fileName}`, text, {
            encoding: 'utf-8'
        });
        
        return res.send("Done!")

    } catch(err) {
        return res.send("Unexpected Error")

    }
})


app.listen(port, () => {
    console.log(`Server listening to http requests on http://localhost:${port}`);
});