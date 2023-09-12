var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// Render login template
	// res.render('login')
  next()
});




module.exports = router;
