//import mysql driver
var mysql = require('mysql');

//export a function to open a connection to the database, we will need
//to always open a connection before we do any database operation or execute any query
//this function recieve the database access information and a callback function
//eventually the callback function will either be called with errors if any happened or
//be called and the connection object is passed to it with null for error 
exports.connect = function(conData, callback){
	
	var con = mysql.createConnection({
		  host: conData.host,
		  user: conData.user, 
		  password: conData.password, 
		  database: conData.database
		});
	con.connect(function(err) {
		if (err) callback(err);
		callback(null, con);
	});
};

//export a function to create database tables
//this function suppose to create all our tables for us, we will need to call it only one time
//that is when we are setting up our final system, also note that this function should only be accessed 
//by the administrator of the website, so it is very credential, currently we do not have
//any protection over it
exports.createTables = function (conData, callback){
	var con = mysql.createConnection({
		  host: conData.host,
		  user: conData.user, 
		  password: conData.password, 
		  database: conData.database
		});
		
	var sql = "CREATE TABLE Users (username VARCHAR(255), password VARCHAR(255), dob DATE(DD-MM-YYYY), email VARCHAR(255) nationality VARCHAR(32))";
	con.query(sql, function (err, result) {
		console.log("finish query:" + result);
		callback(err, result);
	});
};