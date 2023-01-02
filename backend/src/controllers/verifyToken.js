const jwt = require('jsonwebtoken')

const createError = require('../error')

class verifyToken {
    verifyUser(req, res, next){
        const token = req.cookies.access_token
        if(!token) {return next(createError(401,'You are not authenticated'))};
        
        jwt.verify(token, process.env.JWT_PW, (err ,user)=>{
            if(err) return next(createError(403,'Token is not valid'));
            req.user = user;
            next()
        })

    }
}

module.exports = new verifyToken