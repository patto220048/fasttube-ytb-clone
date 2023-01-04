const createError = require('../error')
const User = require('../models/User')
const Video = require('../models/Video')

class videoController {
    async addVideo(req, res, next) {
        const newVideo = new Video({userId: req.user.id, ...req.body})
        try {
            const savedVideo = await newVideo.save()

            res.status(200).json(savedVideo)
        } catch (err) {
            next(err)
            
        }
    }
    async updateVideo(req, res, next) {
        try {
            const video = await Video.findById(req.params.id)
            if(!video) return next(createError(404,'Video not found'));
            if(req.user.id === video.userId) {
                const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                    $set: req.body,
                },{
                    new:true
                })
                res.status(200).json(updatedVideo)
            }else {
                return res.status(404).json("you can update only your video")
            }
            
        } catch (err) {
            next(err)   
        }
        
    }
    async deleteVideo(req, res, next) {
        try {
            const video = await Video.findById(req.params.id)
            if(!video) return next(createError(404,'Video not found'));
            if(req.user.id === video.userId) {
                await Video.findByIdAndDelete(req.params.id)
                res.status(200).json("Video deleted")
            }else {
                return next(createError(403,'You can delete only your video'))
            }

        } catch (err) {
            next(err)
        }
        
    }
    async getVideo(req, res, next) {
        try {
            const video = await Video.findById(req.params.id)
            res.status(200).json(video)
        } catch (err) {
            next(err)
            
        }
    }
    async random(req, res, next) {
        try {
            const videos= await Video.aggregate([{$sample:{size: 40}}])
            res.status(200).json(videos)
        } catch (err) {
            next(err)
            
        }
    }
    async trend(req, res, next) {
        try {
            const videos = await Video.find().sort({
                views: -1
            })
            res.status(200).json(videos)
        } catch (err) {
            next(err)
            
        }
    }
    async sub(req, res, next) {
        try {
            const user = await User.findById(req.user.id)   
            const subscribedChannels = user.subscribersUsers;

            const list = await Promise.all(subscribedChannels.map(channelId =>{
                return Video.find({userId: channelId})
            }))
            res.status(200).json(list.flat().sort((a,b)=>b.createdAt - a.createdAt))

        } catch (err) {
            next(err)
            
        }
    }

    async addView(req, res, next) {
        try {
           const view = await Video.findByIdAndUpdate(req.params.id,{
                $inc:{views:1}
            })
            res.status(200).json(view)
        } catch (err) {
            next(err)
            
        }
    }

    async tags(req, res, next) {

        const tags = req.query.tags.split(",")
        try {
           const videos = await Video.find({tags:{ $in:tags }}).limit(20);
           res.status(200).json(videos)
        } catch (err) {
            next(err)
            
        }
    }
    async search(req, res, next) {
        const query = req.query.q   
        try {
            const videos = await Video.find({videoTitle:{$regex:query, $options:'i' }}).limit(40)
            res.status(200).json(videos)
        } catch (err) {
            next(err)
            
        }
    }
    
} 

module.exports = new videoController;
