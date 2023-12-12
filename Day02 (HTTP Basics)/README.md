## Client side and Server side

* Anything which we see on the browser, it is called Client side and something which is operated remotely is called Server side.

* All the servers run on a specific IP address but Client generally don't communicate with server through IP address. Client communicates with server through a Domain like http://host/path. Here "host" is a domain name and is replaced by the IP address of the Server.

* Server runs on a single place but Clients can run on multiple places.

* There are two types of server:
1. #### Blocking in Nature: 
    * These type of servers serve only one Client at one time.

2. #### Non-Blocking in Nature:
    * These type of servers can serve multiple Clients simultaneously.
    * Nodejs is a non-blocking in nature due to events loop.

## Protocol:

* Protocol is nothing but some set of rules for communication between Client and Server.
* There are many protocols like HTTP, HTTPS, TCP, SSH, SMTP, POP, TCP etc.
* There are many domain name providers like GoDaddy, Namecheap, Hostinger, MagicBricks etc.

* Client => url => DNS => Ip address => Server => response => Client.
* DNS => Domain Name Server => Provider of domain name like GoDaddy, Hostinger etc.
* The above steps are like when a Client hits a url, it goes to DNS to look up the IP address and then according to IP address the Request reaches to the Server and then finally the Server send the Response to the Client according to the Request.


## HTTP Methods:

* GET => try to read something something and not modify anything
* POST => create something new that didn't exist
* PUT => either create if it doesn't exist or modify something if it exist
* PATCH => modify something that already exist
* Delete => delete something that exist

* There are more methos but the above listed methods are most important methods.
* We can also create custom HTTP methods as well.

## Status Code:

* This is something which indicates that what type of response has been received from the Server side.
* The status code ranges from 200 to 599 and it goes like
    * 200 - 2xx => Succesful request
    * 300 - 3xx => Redirection
    * 400 - 4xx => Bad request
    * 500 - 5xx => Something went wrong with processing the request

## How to Create a Server in Nodejs?

Using 'http' we can create a http server which is a core module of Nodejs. Some steps are given to create a http server:

1. initialize an npm project using the command "npm init -y" in the terminal.
2. create an index.js file.
3. import http from http.
    * Ex => available in day02/index.js
4. Now create the server by using 'http.createServer()' method.

#### http.createServer() =>
* It takes a callback function in which two objects are present as arguments, one is req(request) and 2nd is res(response).
    * Ex => available in day02/index.js
* Inside callback, we can write our logic like what kind of response is needed to be send according to the request.
* It returns an Object which we can catch in a new variable named as "server" using which we can run the server 24/7.
    * Ex => available in day02/index.js

5. listen the server using server.listen(port number) to run the server 24/7.
    * Ex => available in day02/index.js
