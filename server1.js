//import restify module
var restify = require('restify');
//import our user module which handles all CRUD operations on users
var user = require('./user.js');
//import our database module which handles most of general db operations
var db = require('./database.js');

//create the restify module
const server = restify.createServer()

//initialise the server with required plugins
server.use(restify.plugins.fullResponse())
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser())
server.use(restify.plugins.authorizationParser())

//prepare our database connection parameters
const databaseData = { 
	host:"sql2.freemysqlhosting.net",
	user:"sql2240040",
	password: "hC7%kH2*",
	database: "sql2240040"
};
//save server port on global variable
var port = 8080;

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

//this route will allow to create tables in the database
//it should be a confidential method and can be performed only by an admin
server.get('/createTables', (req, res) => {
	
	db.createTables(databaseData, function(err, state){
		if(err) {
			res.status(400);
			res.end("an error has occured:" + err);
			return;
		}
		res.status(200);
		res.end("tables were created successfully");
	});
})

//start the server 
server.listen(port, err => {
	if (err) {
		console.error(err)
	} else {
		console.log(`App is ready on port ${port}`)
	}
})
