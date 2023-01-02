var express = require('express');
var router = express.Router();

const authController = require('../controllers/authController')

router.get('/signout', authController.signout);
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/google', authController.google);

module.exports  = router;

