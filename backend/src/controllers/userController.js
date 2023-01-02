const createError = require('../error')
const User = require('../models/User')
const Video = require('../models/Video')

class apiController {
    async update(req, res, next) {
        if (req.params.id == req.user.id){
            try {
                const updateuUser = await User.findByIdAndUpdate(req.params.id,{
                    $set : req.body
                }, {new: true});
                res.status(200).json(updateuUser)
            } catch (err) {
                next(err)
                
            }
        }else {
            return next(createError(403,'You can update only your account'));
        }

    }

    async deleteUser(req, res, next) {
        if (req.params.id == req.user.id){
            try {
               await User.findByIdAndDelete(req.params.id)
                
                res.status(200).json("User has been deleted")
            } catch (err) {
                next(err)
                
            }
        }else {
            return next(createError(403,'You can delete only your account'));
        }

    }

    async getUser(req, res, next) {
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json(user)
        }
        catch(err){
            next(err)
        }
    }
    async subscribe(req, res, next) {
        try{
            await User.findByIdAndUpdate(req.user.id,{
                $push: { subscribersUsers: req.params.id}
            })
            await User.findByIdAndUpdate(req.params.id,{
                $inc: {
                    subscribers : 1
                }
            })
            res.status(200).json('Subscription successfull.')

        }
        catch(err){
            next(err)
        }
        
    }
    async unsubscribe(req, res, next) {
        try{
            await User.findByIdAndUpdate(req.user.id,{
                $pull: { subscribersUsers: req.params.id}
            })
            await User.findByIdAndUpdate(req.params.id,{
                $inc: {
                    subscribers : -1,
                }
            })
            res.status(200).json('Unsubscription successfull.')

            

        }
        catch(err){
            next(err)
        }
        
    }
    async like(req, res, next) {
        const user = req.user.id;
        const videoId = req.params.videoId
        try{    
            await Video.findByIdAndUpdate(videoId,{
                $addToSet:{likes:user},
                $pull: {dislikes:user}
            })
            res.status(200).json("The video have been liked")

        }
        catch(err){
            next(err)
        }
    }
    async dislike(req, res, next) {
        const user = req.user.id;
        const videoId = req.params.videoId
        try{
            await Video.findByIdAndUpdate(videoId,{
                $addToSet:{dislikes:user},
                $pull: {likes:user}
            })
            res.status(200).json("The video have been disliked")

        }
        catch(err){
            next(err)
        }
    }
}

module.exports = new apiController;
