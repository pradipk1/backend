
* It is not recommended to keep your jwt secret inside code file like in day09/token.js because then anyone can see the jwt secret and can do some inappropriate action.
* Keep the jwt secret in .env file and put the file name inside .gitignore file
    * Ex => available in day10/.env
* To use this jwt secret install a library called 'dotenv' using command "npm i dotenv"
* Now add the follwing lines inside token.js file
    ```js
    require('dotenv').config({
        path: './.env'
    });

    const JWT_SECRET = process.env.JWT_SECRET;
    ```


## OAuth

* Sign in with Google
* Sign in with Facebook
* Sign in with Github
* Sign in with Twitter
* Sign in with Microsoft
* Sign in with Apple etc.

### Avantage of Implementing above Oauth

* User doesn't have to Sign up
* User doesn't have to verify his email
* User doesn't have to remember credentials

## Steps to implement above authentication are given below

1. We have to register our application on these identity provider (Lets say we are implementing Google OAuth). It will provide two things
    * CLIENT_ID - Public (ID of our applicationfor Google)
    * CLIENT_SECRET - This must be remain secret just like jwt secret and should be stored on our server in `.env` file

2. We have to show the option like "Sign in with Google".
3. We have to take the user to Google Sign in page.

4. User can allow the permission (first time)
    * This application wants to use your Google Account

5. Google will redirect the use back to our application(Two posible outcomes) with access code or error
    * We don't have user details at this point we only have access code.
    * We have to exchange this access code to get user details by calling Oauth APIs
    * But we need CLIENT_SECRET to call this API
    * That means we can call only from backend

6. If user allows then we have to store user's details on our application like name, email, image, sign in method etc.


## Implementaion of Github OAuth

1. Login into github.
2. Go to github setting page.
3. Go to developer setting.
4. Click on "OAuth Apps".
5. Click on "Register a new application".
6. Enter some details like Application name, Homepage URL, Application description, Authoization callback URL.
    * Authoization callback URL => This is the URL on which Github will redirect the user after allow/decline permission.
    * Ex => 
    * Application name => PT WEB 08
    * Homepage URL => http://localhost:3000/
    * Application description => Demo application for PT WEB 08.
    * Authoization callback URL => http://localhost:3000/github-signin

7. Click on register application. It will give you the CLient ID which you can add inside .env file.
8. Click on "Generate a new client secret". It will give you a client secret. Make sure you copy that client secret inside .env file before refreshing/leaving that page because after that you will not bw able to see the client secret.

9. Create a React app inside client folder and put the URL "https://github.com/login/oauth/authorize?client_id=9b6d0d390f7258cefd75" inside href attribute of "a" tag showing "Login with Github". Here client_id is same you got during registration of the application with github.
    * Ex => available in day10/client/src/app.js

10. Start the React app using "npm start" command. Now Click on "Login with Github" and it will redirect to github authorization page for the very first time.
11. Click on "Authorize" and it will redirect to the given callback URL during the registration of the application. It will also include an "access code" i.e a temporary code which is valid for 10 minutes for the exchange of "access token".
12. Now if we click on "Login with Github" then it will not redirect to the github authorization page but it will just redirect to the callback URL with a new "access code".
13. Make a post request using the URL "https://github.com/login/oauth/access_token" which takes atleast 3 required params, 1st is "client_id", 2nd is "client_secret", 3rd is "code" i.e access code. In response this will give you an access token. Before making request inside header we can add the value of "accept" as application/json to get the response in json format. This "access token" has a longer expiry than "access code" which was of 10 minutes. This access token is used to get the user's details.
14. Make a get request using URL "https://api.github.com/user". Before making the request put the access token inside Auth/Bearer if you are using thunder client to get the user's details. It will give user's data in json format.



### Github OAuth Documentaion Link

* https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps