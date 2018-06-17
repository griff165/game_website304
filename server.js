//creates http server
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('started\n');
}).listen(process.env.PORT, process.env.IP);

//import restify module
var restify = require('restify');
//import our user module which handles all CRUD operations on users
var user = require('./user'); 

//import our database module which handles most of general db operations
var db = require('./database'); 

 //create the restify module
const server = restify.createServer();

 //initialise the server with required plugins
 server.use(restify.plugins.fullResponse());
 server.use(restify.plugins.bodyParser());
 server.use(restify.plugins.queryParser());
 server.use(restify.plugins.authorizationParser());

 //prepare our database connection parameters
 const databaseData = {
	host: "127.0.0.1",
	user: "griff165",
	password: "",
 };
 //save server port on global variable
 var port = process.env.PORT; 

//route any requests to http://localhost:8080/user/add to this function
 server.post('/user/add', (req, res) => {
//we are atempting to add a user
user.add(databaseData, req, function (err, data){
 //when adding a user is done this code will run
 //if we got an error informs the client and set the proper response code
 if(err){
 res.status(400);
 res.end("error:" + err);
 }
 //if no error let's set proper response code and have a party
 res.status(201);
 res.end("success");
 });
 }) 