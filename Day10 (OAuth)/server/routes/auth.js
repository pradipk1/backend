
const express = require('express');
const { register, login, getLoggedInUser, signinWithGithub } = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');

const authRouter = express.Router();


authRouter.post('/register', register);

authRouter.post('/login', login);

authRouter.get('/github-signin/:code', signinWithGithub);

authRouter.get('/loggedInUser', authMiddleware, getLoggedInUser);


module.exports = authRouter;