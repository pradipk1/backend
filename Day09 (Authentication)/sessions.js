
const express = require('express');
const session = require('express-session');


const app = express();


// Below session is being used as middleware so it can change the req and res object
/* 
* For each req, it will check whether the session has been created or not by checking whether any cookie is present inside browser or not respectively
* It will create a session if not created already by setting cookie inside browser
* It will add `Set-Cookie: cookie-name:cookie-value` Header in the response
* Browser by default sends stored cookie inside browser for every request to the Server inside header, we don't have to write any extra logic to send cookie to the Server
*/
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret:'dscnjsh545%$#&Y**JHHbn',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}));



// // Below 'visit' variable is a global variable not a private vaiable that means there is no seperate session storsge. To make this private we can use session based authentication using express-session npm package which is used as a middleware.
// let visit = 0;
// let loggedInUser= '';
app.get('/', (req, res) => {

    // req.session.visit = 10;

    // Now below visit variable is private for every user due to session storage
    let visit = 1;
    if(req.session.visit) {
        req.session.visit++;
        visit = req.session.visit;
    } else {
        req.session.visit = 1;
    }

    // visit++;
    res.send(`Hello there, you have visited ${visit} times`);
});


app.get('/login/:username', (req, res) =>{
    req.session.loggedInUser = req.params.username;

    res.send(req.session.loggedInUser);
});


app.get('/loggedInUser', (req, res) =>{

    res.send('User: ' + req.session.loggedInUser);
});




app.listen(4000, () => {
    console.log('Server listening on http://localhost:4000');
});