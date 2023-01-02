const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        unique : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
    },
    password: {
        type : String,
        
    },
    img: {
        type : String,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribersUsers: {
        type: [String],
        
    },
    fromGoogle:{
        type: Boolean,
        default: false,
    }
},{timestamps: true});

module.exports = mongoose.model('Users', UserSchema);