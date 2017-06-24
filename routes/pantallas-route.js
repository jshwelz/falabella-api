var express = require('express');
var router = express.Router();



var ctrl = require('../controllers/pantallas-controller');




router.get('/',ctrl.pantallas);






module.exports = router;
