var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user');

/* GET users listing. */
router.post('/sinscrire', userCtrl.sinscrire);
router.post('/login', userCtrl.login);

module.exports = router;
