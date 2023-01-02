const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    userId: {
        type : String,
        required : true,
    },
    videoTitle: {
        type : String,
        required : true,
    },
    videoDecs: {
        type : String,
        required : true,
    },
    videoURL: {
        type : String,
        required : true,
    },
    videoImg: {
        type : String,
    },
    imgURL: {
        type : String,
        required : true,
    },
    views: {
        type : Number,
        default : 0,
    },
    tags: {
        type: [String],
        default : [],
    },
    likes: {
        type: [String],
        default : [],
    },
    dislikes: {
        type: [String],
        default : [],
    },

    

},{timestamps: true});

module.exports=mongoose.model('Video', VideoSchema);