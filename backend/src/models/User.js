const mongoose = require('mongoose');
const { isEmail} = require('validator');

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required:[true, "Please enter a name"],
        unique : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
        validate: [isEmail,"Email validation failed"], 
    },
    password: {
        type : String,
        required : true,
        minlength: 6,
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