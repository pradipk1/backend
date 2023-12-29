
## Authentication

* It is used to provide the users some flexibility to do some actions on the Application.
* It checks whether the user is logged in/authenticated for a particular action.
* Ex => For a blog application, a user can see all the posts without being logged in but if user wants to like or comment on the post then user must be logged in. Even when user wants to create a new post or update old post then also he must be logged in.
* So, we can say using authentication this functionality can be achieved.
* For every request, backend will check whether the user is logged in or not and if user is logged in then this is the same user or not by verifying the Token.
* At the time of login backend generates a new Token and gives this Token to the frontend so that in future if it is needed to verify the user then backend can verify using this Token.


Below are mentioned some routes to implement authentication

1. GET /user/loggedInUser => Server checks Whether user is logged in?
    * `token` => if this token is valid => Server will give user details
    * `token` => if this is invalid => Server will give error message
    * if no token is present then Server will say not logged in

2. POST /user/login => Client & Server take care of authenticaion, user does not have to login again to make API calls
    * Server will provide a token and client will store the token in browser storage like local storage etc.
    * For every API request the Client need to send the token in header to the Server

3. POST /user/register


## Authorization

* It is a pro version of Authentication. Some actions need permission to get performed like subscription things even when the user is logged in or authenticated.
* Ex => An user has logged in and can read 10 posts for free but to read more than 10 posts, user needs to get the permission by taking subscription. So we can say that without subscription the user is not authorized to read more than 10 posts.
* In general we can say that authorized person is like an admin and authenticated persons are under the admin.


## Types of Authentication

1. Session Based Authentication
    * At the time of login, Server sends a session id to Client and Server stores some information like isUserLoggedIn, session-start-time, loggedInUser etc on the server side.
    * This session id can be stored in cookie at Client side.
    * For each request, Client and Server knoe the session id.
    * In this type of Authentication Server needs to maintain some extra storage to store the informations.
    * To implement session based authentication we can use "express-session" library.
    * Ex => available in day09/session.js

2. Token Based Authentication
    * At the time of login, Server generates a token and sends to the Client.
    * Client can see the token but can not tamper(change) the token.
    * Only server knows how to prepare this token.
    * Server has a method to identify whenever the token is tampered(changed) with it
    * There is no need of the extra storage to maintain information