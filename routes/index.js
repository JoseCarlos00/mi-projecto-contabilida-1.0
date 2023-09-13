var express = require('express');
var router = express.Router();
const usuario = require('../controllers/user/controllerUser')

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log("Paso por aqui");
  next()
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', (req, res) => {
  res.render('login');
});

router.post('/signup',usuario.login);





module.exports = router;
