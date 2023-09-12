var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("Paso por aqui");
  next()
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(next);
});



module.exports = router;
