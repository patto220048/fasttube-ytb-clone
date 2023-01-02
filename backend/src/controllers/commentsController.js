const createError = require('../error')
const Comment = require('../models/Comments')
const Video = require('../models/Video')


class commentsController {
    
    async addComment(req, res, next) {
        const newComment = await Comment({userId: req.user.id, ...req.body})
        try {
            const savedComment = await newComment.save()
            res.status(200).json(savedComment)  
        } catch (err) {
            next(err)
        }
    }
    async deteleComment(req, res, next) {
        try {
            const comment = await Comment.findById(req.params.id)
            const video = await Video.findById(req.params.id)
            if(req.user.id === comment.userId || req.user.id === video.userId) {
                await Comment.findByIdAndDelete(req.params.id)
                res.status(200).json('The comment deleted')
            }
            else{
                return next(createError(403,'You can delete only your comment'))
            }

        } catch (err) {
            next(err)
        }
    }
    async getComments(req, res, next) {
        try {
            const comments = await Comment.find({videoId: req.params.videoId }).sort({_id:-1})
            res.status(200).json(comments)
        } 
        catch (err) {
            next(err)
        }
    }

}
module.exports = new commentsController