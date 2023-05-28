var express = require('express');
var router = express.Router();
var usuario = require('../controllers/user/controllerUser')

/* GET users listing. */
router.get('/', usuario.index);   
router.get('/crear', usuario.crear);

module.exports = router;
