var express = require('express');
var router = express.Router();

const commentsController = require('../controllers/commentsController')
const verifyToken = require('../controllers/verifyToken')


router.post('/', verifyToken.verifyUser ,commentsController.addComment);
router.delete('/:id', verifyToken.verifyUser ,commentsController.deteleComment);
router.get('/find/:videoId',commentsController.getComments);

module.exports  = router;

