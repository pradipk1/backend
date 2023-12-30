
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