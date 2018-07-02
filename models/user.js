
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema, to set up paranthesis to insert into database
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
    },
    email: {
		type: String,
    },
    dob: {
		type: String,
    },
    nationality: {
		type: String,
	},
	password: {
		type: String
	},
	
	
});

var User = module.exports = mongoose.model('User', UserSchema);

//hides password for security purposes
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}