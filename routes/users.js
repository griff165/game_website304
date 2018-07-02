var express = require('express');
var router = express.Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;



var User = require('../models/user');

// Register
router.get('/register', function (req, res) {
	res.sendFile(__dirname + '/signup.html');
});

// Login
router.get('/login', function (req, res) {
	res.sendFile(__dirname + '/login.html');
});


// Get item page
router.get('/item', function(req, res){
	res.sendFile(__dirname + '/item.html');
});
;

// members area 
router.get('/home', function (req, res) {
	res.sendFile(__dirname + '/home.html');
});
// Register user
router.post('/register', function (req, res) {

		var username = req.body.username;
		var email = req.body.email;
		var dob = req.body.dob;
		var nationality = req.body.nationality;
		var password = req.body.password1;
		var password = req.body.password2;

    	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	var errors = req.validationErrors();

		if (errors){
			res.sendFile(__dirname + '/home.html')
		}
		    var newUser = new User({
				username:username,
				email:email,
				dob:dob,
				nationality:nationality,
				password: password,
			})	

			User.createUser(newUser, function(err,user){
				if(err)throw err;
				console.log(user);

			res.redirect( __dirname +'/home.html');
			})
});



module.exports = router;


