const mongoose = require('mongoose');

const Commentschema = new mongoose.Schema({
    userId: {
        type : String,
        required : true,
    },
    videoId: {
        type : String,
        required : true,
    },
    desc: {
        type : String,
        required : true,
    },

},{timestamps: true});

module.exports= mongoose.model('Comment', Commentschema);