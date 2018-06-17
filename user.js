//importing sql driver to establish connection
var mysql = require('mysql');


//corrosponding mysql details required yo determine which mysql to connect to
var con = mysql.createConnection({
	host: "127.0.0.1",
	user: "griff165",
	password: "",
	database:"users",
	
});
//function to determine whether a connection is established or not
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
//this function is responsible for adding a new user
exports.add = function(conData, req, callback){

		//if no error prepare our user object with the values sent by the client
		var user = {
		  username: req.body['username'],
		  password: req.body['pwd1'],
		  email: req.body['email'],
		  dob: req.body['dob'],
		  nationality: req.body['nationality'],
		};
		//perform the query
		con.query('INSERT INTO Users SET ?', user, function (err, result) {
			//return control to the calling module
			callback(err, user);
		});
		};