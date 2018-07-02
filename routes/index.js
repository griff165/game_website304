var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', function(req, res){
	res.sendFile(__dirname + '/home.html');
});

module.exports = router;