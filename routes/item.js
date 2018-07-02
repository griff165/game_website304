var express = require('express');
var router = express.Router();

// Get item page
router.get('/item', function(req, res){
	res.sendFile(__dirname + '/item.html');
});
;
module.exports = router;