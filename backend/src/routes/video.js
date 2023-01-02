var express = require('express');
var router = express.Router();

const videoController = require('../controllers/videoController')
const verifyToken = require('../controllers/verifyToken')

router.post('/',verifyToken.verifyUser, videoController.addVideo)
router.put('/:id',verifyToken.verifyUser, videoController.updateVideo)
router.delete('/:id',verifyToken.verifyUser ,videoController.deleteVideo)
router.get('/find/:id',videoController.getVideo)
router.put('/view/:id',videoController.addView)
router.get('/trend',videoController.trend)
router.get('/random',videoController.random)
router.get('/sub',verifyToken.verifyUser ,videoController.sub)

router.get('/tags',videoController.tags)
router.get('/search',videoController.search)






module.exports  = router;