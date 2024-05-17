var express = require('express');
var router = express.Router();
var formulaire = require('../controllers/formulaire');



/*Get & Post formulaires*/
router.get('/propertyDetails', formulaire.propertyDetails);
router.post('/propertyDetails', formulaire.propertyDetails);

module.exports = router;