var db = require('/database.js');

//this function is responsible for adding a new user
exports.add = function(conData, req, callback){
	
	//first connect to DB
	db.connect(conData, function(err, data){
		
		//when done check for any error
		if (err) {
			callback(err);
			return;
		}	

		//if no error prepare our user object with the values sent by the client
		var user = {
		  username: req.body['username'],
		  password: req.body['pwd1'],
		  email: req.body['email'],
		  dob: req.body['dob'],
		  nationality: req.body['nationality'],
		};
		//perform the query
		data.query('INSERT INTO Users SET ?', user, function (err, result) {
			//return control to the calling module
			callback(err, user);
		});
	};