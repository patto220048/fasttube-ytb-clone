var express = require('express');
var router = express.Router();

const apiController = require('../controllers/userController')
const verifyToken = require('../controllers/verifyToken')



//update user users/api/:id  

router.put('/:id',verifyToken.verifyUser,apiController.update);
//delete user  users/api/:id
router.delete('/:id', verifyToken.verifyUser,apiController.deleteUser);
// get user  users/api/find/:id
router.get('/find/:id', apiController.getUser);
// subscribe users/api/sub/:id
router.put('/sub/:id',verifyToken.verifyUser, apiController.subscribe);
// unsubscribe users/api/unsub/:id
router.put('/unsub/:id', verifyToken.verifyUser,apiController.unsubscribe);
//like video users/api/like/:videoId
router.put('/like/:videoId',verifyToken.verifyUser, apiController.like);
//dislike users/api/dislike/:videoId
router.put('/dislike/:videoId',verifyToken.verifyUser, apiController.dislike);



module.exports  = router;

